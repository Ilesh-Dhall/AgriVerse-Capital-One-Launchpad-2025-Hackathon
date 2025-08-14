"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, User, Bot, Stars } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
  timestamp: Date;
}

export default function AiPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text: "Hi there! I'm your AgriVerse AI Assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 240000),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState<Message | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    document.title = "AI Farming Intelligence — AgriVerse";
  }, [messages, typingMessage]);

  const typeMessage = async (fullText: string, messageId: number) => {
    const words = fullText.split(" ");
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? " " : "") + words[i];

      setTypingMessage({
        id: messageId,
        type: "ai",
        text: currentText,
        timestamp: new Date(),
      });

      // Adjust typing speed - faster for short words, slower for long words
      const delay = words[i].length > 6 ? 150 : 100;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    // Clear typing message and add to main messages
    setTypingMessage(null);
    const finalMessage: Message = {
      id: messageId,
      type: "ai",
      text: fullText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, finalMessage]);
  };

  const getAIResponse = async (
    userMessage: string,
    chatHistory: Message[]
  ): Promise<string> => {
    try {
      const contextLimit = 10;
      const recentMessages = chatHistory.slice(-contextLimit);
      const contexualMessage = recentMessages
        .map((msg) => ({
          role: msg.type === "user" ? "user" : "assistant",
          content: msg.text,
        }))
        .concat({
          role: "user",
          content: userMessage,
        });

      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "text",
          message: JSON.stringify(contexualMessage),
        }),
      });
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.response) {
        return "I'm sorry, There was an error processing your request. Please try again.";
      }

      if (Array.isArray(data.response) && data.response[0]?.output) {
        return data.response[0].output;
      } else if (typeof data.response === "string") {
        return data.response;
      } else if (data.response.content || data.response.message) {
        return data.response.content || data.response.message;
      }

      return data.response;
    } catch (error) {
      console.error("Error getting AI response:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      const aiResponseText = await getAIResponse(currentInput, messages);
      setIsTyping(false);

      const messageId = Date.now() + 1;
      await typeMessage(aiResponseText, messageId);
    } catch (error) {
      console.error("Error in handleSendMessage:", error);
      setIsTyping(false);

      const errorResponse: Message = {
        id: Date.now() + 1,
        type: "ai",
        text: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  const handleQuickTemplate = (template: string) => {
    setInputText(`Tell me about ${template.toLowerCase()} for my farm`);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className="p-6 flex flex-col gap-6 mx-auto fade-in-5 animate-in duration-300"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <div className="flex items-center gap-2 mb-4 text-lg">
        <div className="p-2 rounded-lg bg-green-500/10">
          <Stars size={40} className="text-3xl text-green-600" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">AgriVerse AI Assistant</span>
          <p className="text-sm">
            Get instant farming insights powered by real-time data and AI
          </p>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="flex flex-col gap-3 grow overflow-y-scroll pr-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-in slide-in-from-bottom-5 duration-300 ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.type === "ai" && (
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-6 text-green-600" />
              </div>
            )}

            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl border ${
                message.type === "user"
                  ? "bg-bluish-bg text-bluish-text border-bluish-border"
                  : "bg-greenish-bg text-greenish-text border-greenish-border"
              }`}
            >
              {message.type === "ai" ? (
                <div className="text-md prose prose-sm max-w-none">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0">{children}</p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-bold">{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc ml-4 mb-2">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal ml-4 mb-2">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="mb-1">{children}</li>
                      ),
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-md">{message.text}</p>
              )}
              <p className={`text-xs mt-1 text-muted-foreground`}>
                {formatTime(message.timestamp)}
              </p>
            </div>

            {message.type === "user" && (
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-blue-600" />
              </div>
            )}
          </div>
        ))}

        {typingMessage && (
          <div className="flex gap-3 animate-in slide-in-from-bottom-5 duration-300">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-6 text-green-600" />
            </div>
            <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl border bg-greenish-bg text-greenish-text border-greenish-border">
              <div className="text-md prose prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 last:mb-0">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc ml-4 mb-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal ml-4 mb-2">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                  }}
                >
                  {typingMessage.text + "🮉"}
                </ReactMarkdown>
              </div>
              <p className="text-xs mt-1 text-muted-foreground">
                {formatTime(typingMessage.timestamp)}
              </p>
            </div>
          </div>
        )}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-in slide-in-from-bottom-5">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-6 text-green-600" />
            </div>
            <div className="border px-4 py-3 rounded-2xl bg-green-50 border-green-200 text-green-800">
              <div className="flex gap-1 justify-center items-end">
                <p className={`text-sm`}>Thinking </p>
                <div className="w-1 h-1 bg-green-800 rounded-full animate-bounce"></div>
                <div
                  className="w-1 h-1 bg-green-800 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1 h-1 bg-green-800 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {[
            { text: "Crop health", icon: "🌱" },
            { text: "Weather concerns", icon: "🌤️" },
            { text: "Market prices", icon: "💰" },
            { text: "Irrigation advice", icon: "💧" },
            { text: "Fertilizer guidance", icon: "🧪" },
            { text: "Pest control", icon: "🐛" },
          ].map((template) => (
            <Button
              key={template.text}
              variant="outline"
              size="sm"
              onClick={() => handleQuickTemplate(template.text)}
              className="gap-2 hover:scale-105 transition-all duration-200 border-green-200 hover:border-green-300 hover:bg-green-50"
            >
              <span className="text-base">{template.icon}</span>
              {template.text}
            </Button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-3">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about crop health, weather, market prices, irrigation..."
            className="flex-1 focus:border-green-400 focus:ring-green-400/20"
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            variant="outline"
            size="icon"
            className="border-green-200 hover:bg-green-50 hover:border-green-300"
            aria-label="Voice input"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-green-600 hover:bg-green-700 hover:shadow-xl transition-all duration-200"
          >
            <Send className="h-4 w-4" />
            Ask AI
          </Button>
        </div>
      </div>
    </div>
  );
}
