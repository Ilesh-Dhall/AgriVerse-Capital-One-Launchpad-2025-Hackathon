"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart as LineChartIcon } from "lucide-react";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  CartesianGrid,
} from "recharts";

const priceData = [
  { day: "Mon", price: 1800 },
  { day: "Tue", price: 1750 },
  { day: "Wed", price: 1900 },
  { day: "Thu", price: 2050 },
  { day: "Fri", price: 1980 },
  { day: "Sat", price: 2100 },
  { day: "Sun", price: 2150 },
];

export default function MarketPage() {
  useEffect(() => {
    document.title = "Market Intelligence — AgriVerse";
  }, []);

  return (
    <article
      id="market"
      className="scroll-mt-24 animate-fade-slide-in"
      style={{ animationDelay: "0.3s" }}
    >
      <Card className="card-float border-green-200/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-accent"></div>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-green-500/10">
              <LineChartIcon className="h-5 w-5 text-green-600" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-accent bg-clip-text text-transparent font-display">
              Market Intelligence
            </span>
          </CardTitle>
          <CardDescription className="text-base">
            Current prices and short‑term trends.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-green-100/50 p-4 bg-gradient-to-br from-green-50/50 to-green-100/30 hover-lift group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🍅</span>
                <div className="text-sm font-medium text-muted-foreground">
                  Tomato — Pune
                </div>
              </div>
              <div className="text-3xl font-bold text-green-700 group-hover:scale-105 transition-transform">
                ₹ 2,150<span className="text-sm font-normal">/q</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                  ↗ +15%
                </span>
                <span className="text-xs text-muted-foreground">
                  vs last week
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-accent/20 p-4 bg-gradient-to-br from-accent/5 to-accent/10 hover-lift group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🌾</span>
                <div className="text-sm font-medium text-muted-foreground">
                  Wheat — Nashik
                </div>
              </div>
              <div className="text-3xl font-bold text-accent-foreground group-hover:scale-105 transition-transform">
                ₹ 2,020<span className="text-sm font-normal">/q</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent-foreground">
                  → Stable
                </span>
                <span className="text-xs text-muted-foreground">
                  vs last week
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-purple-100/50 p-4 bg-gradient-to-br from-purple-50/50 to-purple-100/30 hover-lift group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🧅</span>
                <div className="text-sm font-medium text-muted-foreground">
                  Onion — Lasalgaon
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-700 group-hover:scale-105 transition-transform">
                ₹ 1,850<span className="text-sm font-normal">/q</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">
                  ↘ -8%
                </span>
                <span className="text-xs text-muted-foreground">
                  vs last week
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-green-100/50 p-6 bg-gradient-to-br from-background to-green-50/50">
            <div className="flex items-center justify-between mb-4">
              <div className="text-base font-semibold">
                Price Trend (7 days)
              </div>
              <div className="px-2 py-1 rounded-full bg-green-100 text-xs font-medium text-green-700">
                Tomato
              </div>
            </div>
            <div className="h-48 rounded-lg bg-background/50 p-4 border border-green-100">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--muted-foreground) / 0.2)"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <RechartTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(160 60% 45%)"
                    strokeWidth={3}
                    dot={{
                      fill: "hsl(160 60% 45%)",
                      strokeWidth: 2,
                      r: 4,
                    }}
                    activeDot={{
                      r: 6,
                      stroke: "hsl(160 60% 45%)",
                      strokeWidth: 2,
                      fill: "white",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}