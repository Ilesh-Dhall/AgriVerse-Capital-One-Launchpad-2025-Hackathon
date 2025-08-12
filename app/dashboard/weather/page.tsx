"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudSun } from "lucide-react";
import { useEffect } from "react";

export default function WeatherPage() {
  useEffect(() => {
    document.title = "Weather & Climate — AgriVerse";
  }, []);

  return (
    <article
      id="weather"
      className="scroll-mt-24 animate-fade-slide-in"
      style={{ animationDelay: "0.2s" }}
    >
      <Card className="card-float border-blue-200/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-info"></div>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <CloudSun className="h-5 w-5 text-blue-600" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-display">
              Weather & Climate
            </span>
          </CardTitle>
          <CardDescription className="text-base">
            7‑day forecast and crop impact insights.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                d: "Mon",
                t: "31°C",
                rain: "0.2mm",
                icon: "☀️",
                weather: "sunny",
              },
              {
                d: "Tue",
                t: "33°C",
                rain: "—",
                icon: "🌤️",
                weather: "partly-cloudy",
              },
              {
                d: "Wed",
                t: "30°C",
                rain: "1.1mm",
                icon: "🌦️",
                weather: "rainy",
              },
              {
                d: "Thu",
                t: "29°C",
                rain: "—",
                icon: "☁️",
                weather: "cloudy",
              },
              {
                d: "Fri",
                t: "28°C",
                rain: "2.0mm",
                icon: "🌧️",
                weather: "rainy",
              },
              {
                d: "Sat",
                t: "30°C",
                rain: "—",
                icon: "⛅",
                weather: "partly-cloudy",
              },
              {
                d: "Sun",
                t: "31°C",
                rain: "—",
                icon: "☀️",
                weather: "sunny",
              },
            ].map((f, index) => (
              <div
                key={f.d}
                className={`rounded-xl border border-blue-100/50 p-4 hover-lift group transition-all duration-300 ${
                  f.weather === "rainy"
                    ? "bg-gradient-to-br from-blue-50 to-blue-100/50"
                    : f.weather === "sunny"
                    ? "bg-gradient-to-br from-orange-50 to-yellow-100/50"
                    : "bg-gradient-to-br from-gray-50 to-gray-100/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  {f.d}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <div className="text-2xl font-bold group-hover:scale-110 transition-transform">
                    {f.t}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  💧 Rain: {f.rain}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-blue-100/50 p-6 bg-gradient-to-br from-blue-50/50 to-background">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-base font-semibold">
                Crop Impact Forecast
              </div>
              <div className="px-2 py-1 rounded-full bg-blue-100 text-xs font-medium text-blue-700">
                AI Insights
              </div>
            </div>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-blue-100">
                <span className="text-2xl">🌾</span>
                <div className="text-sm">
                  <span className="font-medium">Wheat:</span> Irrigate
                  mid‑week; avoid afternoon watering. Optimal morning
                  hours: 6-8 AM.
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-red-100">
                <span className="text-2xl">🍅</span>
                <div className="text-sm">
                  <span className="font-medium">Tomato:</span> Watch
                  for leaf curl after Friday showers. Consider
                  covering young plants.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}