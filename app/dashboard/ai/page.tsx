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

  const simulateAiResponse = (userMessage: string) => {
    const responses = {
      "crop health":
        "Based on satellite imagery and weather data, your crops show 92% health index. Detected minor nitrogen deficiency in sector B3. Recommend urea application of 50kg/hectare.",
      weather:
        "Next 7 days forecast: Light rain expected Thu-Fri (15-20mm). Temperature: 24-31°C. Perfect conditions for wheat sowing. Avoid spraying pesticides on rainy days.",
      irrigation:
        "Soil moisture at 45%. Recommend irrigation in 2-3 days. Optimal timing: 6-8 AM to reduce evaporation. Current ET₀: 4.2mm/day for your region.",
      market:
        "Today's mandi rates: Wheat ₹2,100/quintal (+2%), Rice ₹3,200/quintal (-1%). Export demand strong for basmati. Consider storage for better prices next month.",
      fertilizer:
        "NPK analysis shows: N-low, P-adequate, K-high. Apply DAP 100kg + Urea 75kg per hectare. Micronutrient zinc recommended based on soil test.",
      default:
        "I'm analyzing your query with real-time agricultural data. Our AI processes weather patterns, market trends, and soil conditions to provide personalized farming insights.",
    };

    const query = userMessage.toLowerCase();
    let response = responses.default;

    for (const [key, value] of Object.entries(responses)) {
      if (key !== "default" && query.includes(key)) {
        response = value;
        break;
      }
    }

    return response;
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
    setInputText("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        text: simulateAiResponse(inputText),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
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
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4 text-lg">
        <div className="p-2 rounded-lg bg-green-500/10">
          <Bot size={40} className="text-3xl text-green-600" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">AgriVerse AI Assistant</span>
          <p className="text-sm">
            Get instant farming insights powered by real-time data and AI
          </p>
        </div>
      </div>
      <div
        style={{ height: "calc(100vh - 400px)" }}
        className="overflow-y-scroll"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-in slide-in-from-bottom-5 duration-300 ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.type === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                <Sprout className="h-4 w-4 text-white" />
              </div>
            )}

            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-white border border-green-100 shadow-sm"
              }`}
            >
              <p
                className={`text-sm ${
                  message.type === "user" ? "text-white" : "text-gray-800"
                }`}
              >
                {message.text}
              </p>
              <p
                className={`text-xs mt-1 ${
                  message.type === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>

            {message.type === "user" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-in slide-in-from-bottom-5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Sprout className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white border border-green-100 shadow-sm px-4 py-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="absolute bottom-0 flex flex-col gap-3 m-3 w-full">
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
