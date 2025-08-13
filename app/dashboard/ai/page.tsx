"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Sprout, Send, User, Bot } from "lucide-react";

export default function AiPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "Hi there! I'm your AgriVerse AI Assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 240000),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    document.title = "AI Farming Intelligence — AgriVerse";
  }, [messages]);

  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error getting AI response:", error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
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
      const aiResponseText = await getAIResponse(currentInput);

      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        text: aiResponseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error in handleSendMessage:", error);
      const errorResponse = {
        id: Date.now() + 1,
        type: "ai",
        text: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
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
      className="p-6 flex flex-col gap-6"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="flex items-center gap-2 mb-4 text-lg">
        <div className="p-2 rounded-lg bg-green-500/10">
          <Sprout size={40} className="text-3xl text-green-600" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">AgriVerse AI Assistant</span>
          <p className="text-sm">
            Get instant farming insights powered by real-time data and AI
          </p>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="grow overflow-y-scroll pr-4">
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
                  ? "bg-blue-50 border-blue-200 text-blue-800"
                  : "bg-green-50 border-green-200 text-green-800"
              }`}
            >
              <p className={`text-sm`}>{message.text}</p>
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
            className="flex-1 border-green-200 focus:border-green-400 focus:ring-green-400/20"
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
