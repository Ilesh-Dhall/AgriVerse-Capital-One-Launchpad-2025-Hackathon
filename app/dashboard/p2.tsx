"use client";

import { useEffect, useMemo, useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  MessageSquare,
  Sprout,
  CloudSun,
  LineChart as LineChartIcon,
  Wallet,
  ShieldAlert,
  BookOpen,
  Users,
  Mic,
  Image as ImageIcon,
  Bell,
  Languages,
  Search,
} from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  CartesianGrid,
} from "recharts";
import Image from "next/image";

const priceData = [
  { day: "Mon", price: 1800 },
  { day: "Tue", price: 1750 },
  { day: "Wed", price: 1900 },
  { day: "Thu", price: 2050 },
  { day: "Fri", price: 1980 },
  { day: "Sat", price: 2100 },
  { day: "Sun", price: 2150 },
];

export default function Dashboard() {
  const hash =
    typeof window !== "undefined" ? window.location.hash || "#ai" : "#ai";

  useEffect(() => {
    document.title = "AgriVerse Dashboard — AI Farming Assistant";
    const desc =
      "Your centralized farm intelligence hub: chat, weather, market, finance, and crop health.";
    const ensure = (selector: string, creator: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = creator();
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };
    const metaDesc = ensure('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    metaDesc.setAttribute("content", desc);
    const linkCanonical = ensure('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    linkCanonical.setAttribute("href", window.location.origin + "/dashboard");
  }, []);

  const items = useMemo(
    () => [
      { id: "ai", label: "AI Assistant", icon: MessageSquare },
      { id: "farm", label: "My Farm", icon: Sprout },
      { id: "weather", label: "Weather", icon: CloudSun },
      { id: "market", label: "Market", icon: LineChartIcon },
      { id: "finance", label: "Finance", icon: Wallet },
      { id: "health", label: "Crop Health", icon: ShieldAlert },
      { id: "knowledge", label: "Knowledge", icon: BookOpen },
      { id: "community", label: "Community", icon: Users },
    ],
    []
  );

  return (
    <SidebarProvider>
      <div className="min-h-svh flex w-full">
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>AgriVerse</SidebarGroupLabel>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={hash === `#${item.id}`}
                    >
                      <a href={`#${item.id}`}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-primary/10">
            <div className="container mx-auto flex h-16 items-center gap-4 px-6">
              <SidebarTrigger className="mr-2" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Sprout className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="font-display font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AgriVerse Dashboard
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="mx-3 h-8 bg-primary/20"
              />
              <div className="relative hidden md:flex max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops, prices, weather…"
                  className="pl-10 h-10 border-primary/20 bg-muted/30 focus:bg-background hover:bg-background/80 transition-all"
                />
              </div>
              <div className="ml-auto flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 h-9 border-primary/20 hover:bg-primary/5"
                >
                  <Languages className="h-4 w-4" />
                  <span className="hidden sm:inline">EN</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-primary/10 relative"
                  aria-label="Notifications"
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full animate-pulse"></span>
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-6 py-8 grid gap-8 lg:grid-cols-[1fr_340px]">
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  AI Farming Intelligence
                </h1>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-accent-foreground">
                    Live Data
                  </span>
                </div>
              </div>

              {/* 1. AI Chat Assistant */}
              <article id="ai" className="scroll-mt-24 animate-fade-slide-in">
                <Card className="card-float border-primary/10 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-display">
                        AI Chat Assistant
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Ask naturally in your language. Templates help you get
                      started.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {[
                        { text: "Crop health", icon: "🌱" },
                        { text: "Weather concerns", icon: "🌤️" },
                        { text: "Market prices", icon: "💰" },
                        { text: "Irrigation advice", icon: "💧" },
                      ].map((t) => (
                        <Button
                          key={t.text}
                          variant="secondary"
                          size="sm"
                          className="gap-2 hover-scale border-primary/20 bg-primary/5 hover:bg-primary/10"
                        >
                          <span>{t.icon}</span>
                          {t.text}
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-accent/5 border border-primary/10">
                      <Input
                        placeholder="e.g., When should I irrigate my wheat in Nashik next week?"
                        className="flex-1 bg-background/80 border-primary/20 focus:bg-background"
                      />
                      <Button
                        variant="secondary"
                        size="icon"
                        className="shrink-0 hover-glow bg-accent/20 hover:bg-accent/30"
                        aria-label="Voice input"
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Button className="shrink-0 bg-gradient-primary hover:opacity-90">
                        Ask AI
                      </Button>
                    </div>
                    <div className="rounded-xl border border-primary/10 p-4 bg-gradient-to-br from-background to-muted/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Recent conversation
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium">
                            U
                          </div>
                          <p className="flex-1 p-2 rounded-lg bg-secondary/10">
                            <span className="font-medium">You:</span> Best time
                            to sell tomatoes in Pune?
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <Sprout className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <p className="flex-1 p-3 rounded-lg bg-primary/5 border border-primary/10">
                            <span className="font-medium text-primary">
                              AgriVerse:
                            </span>{" "}
                            Prices trending up 15% next 10 days; optimal window:
                            next Tue–Thu. Sources: Agmarknet, local mandi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* 2. Farm Profile & Management */}
              <article
                id="farm"
                className="scroll-mt-24 animate-fade-slide-in"
                style={{ animationDelay: "0.1s" }}
              >
                <Card className="card-float border-secondary/20 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Sprout className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-display">
                        My Farm
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Your farm details, crops and seasonal plan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-xl border border-secondary/10 p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 hover-lift group">
                        <div className="text-sm font-medium text-muted-foreground mb-2">
                          Farm Size
                        </div>
                        <div className="text-3xl font-bold text-secondary group-hover:scale-105 transition-transform">
                          4.5 acres
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          📏 Total area
                        </div>
                      </div>
                      <div className="rounded-xl border border-accent/20 p-4 bg-gradient-to-br from-accent/5 to-accent/10 hover-lift group">
                        <div className="text-sm font-medium text-muted-foreground mb-2">
                          Location
                        </div>
                        <div className="text-3xl font-bold text-accent-foreground group-hover:scale-105 transition-transform">
                          Nashik, MH
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          📍 District, State
                        </div>
                      </div>
                      <div className="rounded-xl border border-primary/20 p-4 bg-gradient-to-br from-primary/5 to-primary/10 hover-lift group">
                        <div className="text-sm font-medium text-muted-foreground mb-2">
                          Current Crops
                        </div>
                        <div className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform">
                          Wheat, Tomato
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          🌾 Active crops
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-primary/10 p-6 bg-gradient-to-br from-background to-muted/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="text-base font-semibold">
                          Crop Calendar
                        </div>
                        <div className="px-2 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent-foreground">
                          2024
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-2 text-xs">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const isActive = i >= 2 && i <= 6; // March to July
                          return (
                            <div
                              key={i}
                              className={`h-10 rounded-lg flex items-center justify-center font-medium transition-all hover-scale ${
                                isActive
                                  ? "bg-gradient-to-b from-secondary to-secondary/80 text-secondary-foreground shadow-md"
                                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
                              }`}
                            >
                              {
                                [
                                  "Jan",
                                  "Feb",
                                  "Mar",
                                  "Apr",
                                  "May",
                                  "Jun",
                                  "Jul",
                                  "Aug",
                                  "Sep",
                                  "Oct",
                                  "Nov",
                                  "Dec",
                                ][i]
                              }
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground text-center">
                        🌱 Green months indicate active growing season
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* 3. Weather & Climate */}
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

              {/* 4. Market Intelligence */}
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

              {/* 5. Financial Planning */}
              <article
                id="finance"
                className="scroll-mt-24 animate-fade-slide-in"
                style={{ animationDelay: "0.4s" }}
              >
                <Card className="card-float border-yellow-200/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-warning"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-yellow-500/10">
                        <Wallet className="h-5 w-5 text-yellow-600" />
                      </div>
                      <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent font-display">
                        Financial Planning
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Track costs vs returns and explore schemes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-xl border border-red-100/50 p-4 bg-gradient-to-br from-red-50/50 to-red-100/30 hover-lift group">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💸</span>
                          <div className="text-sm font-medium text-muted-foreground">
                            Budget Used
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-red-600 group-hover:scale-105 transition-transform">
                          ₹ 48,500
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <div className="flex-1 bg-red-100 rounded-full h-2">
                            <div
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: "67%" }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            67%
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-green-100/50 p-4 bg-gradient-to-br from-green-50/50 to-green-100/30 hover-lift group">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💰</span>
                          <div className="text-sm font-medium text-muted-foreground">
                            Expected Returns
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-green-600 group-hover:scale-105 transition-transform">
                          ₹ 72,000
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                            +48% ROI
                          </span>
                          <span className="text-xs text-muted-foreground">
                            projected
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-blue-100/50 p-4 bg-gradient-to-br from-blue-50/50 to-blue-100/30 hover-lift group">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🏛️</span>
                          <div className="text-sm font-medium text-muted-foreground">
                            Govt Schemes
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-blue-600 group-hover:scale-105 transition-transform">
                          3{" "}
                          <span className="text-lg font-normal">available</span>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                            ⚡ 2 expiring soon
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-yellow-100/50 p-6 bg-gradient-to-br from-yellow-50/30 to-background">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="text-base font-semibold">
                          Available Schemes
                        </div>
                        <div className="px-2 py-1 rounded-full bg-yellow-100 text-xs font-medium text-yellow-700">
                          Updated Today
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-green-100 hover:border-green-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🌾</span>
                            <div>
                              <div className="font-medium text-sm">
                                PM-KISAN Direct Benefit
                              </div>
                              <div className="text-xs text-muted-foreground">
                                ₹2,000 installment due Dec 2024
                              </div>
                            </div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                            Eligible
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-blue-100 hover:border-blue-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🚜</span>
                            <div>
                              <div className="font-medium text-sm">
                                Equipment Subsidy
                              </div>
                              <div className="text-xs text-muted-foreground">
                                50% subsidy on farm equipment
                              </div>
                            </div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700">
                            5 days left
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-purple-100 hover:border-purple-200 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🏦</span>
                            <div>
                              <div className="font-medium text-sm">
                                Crop Insurance
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Weather-based protection
                              </div>
                            </div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">
                            Apply Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* 6. Crop Health Monitor */}
              <article
                id="health"
                className="scroll-mt-24 animate-fade-slide-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Card className="card-float border-red-200/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <ShieldAlert className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-display">
                        Crop Health Monitor
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Upload leaf images to get likely issues and remedies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 rounded-xl border-2 border-dashed border-red-200 bg-gradient-to-br from-red-50/30 to-background hover:border-red-300 transition-colors">
                      <UploadPreview />
                    </div>
                    <div className="rounded-xl border border-orange-100/50 p-4 bg-gradient-to-br from-orange-50/30 to-background">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">💡</span>
                        <div className="text-sm font-medium">
                          Photography Tips
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Take photos in daylight</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Focus on affected leaves</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Include both sides of leaf</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Multiple angles preferred</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-green-100/50 p-4 bg-gradient-to-br from-green-50/30 to-background">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">🤖</span>
                        <div className="text-sm font-medium">
                          AI Analysis Results
                        </div>
                        <div className="px-2 py-1 rounded-full bg-green-100 text-xs font-medium text-green-700">
                          95% Confidence
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 rounded-lg bg-background border border-green-100">
                          <div className="font-medium text-orange-600 mb-1">
                            🍅 Tomato Leaf Curl Disease
                          </div>
                          <div className="text-muted-foreground text-xs mb-2">
                            Detected in uploaded images
                          </div>
                          <div className="text-xs">
                            <span className="font-medium">Treatment:</span>{" "}
                            Apply neem oil spray, improve drainage, remove
                            affected leaves
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-background border border-blue-100">
                          <div className="font-medium text-blue-600 mb-1">
                            💧 Irrigation Recommendation
                          </div>
                          <div className="text-xs">
                            <span className="font-medium">Timing:</span> Reduce
                            watering frequency, water early morning only
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* 7. Knowledge Library */}
              <article
                id="knowledge"
                className="scroll-mt-24 animate-fade-slide-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Card className="card-float border-purple-200/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-display">
                        Knowledge Library
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Curated practices and policy updates.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 rounded-xl border border-purple-100/50 bg-gradient-to-br from-purple-50/30 to-background hover-lift group">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📖</span>
                          <div className="flex-1">
                            <div className="font-medium mb-1 group-hover:text-purple-600 transition-colors">
                              ICAR Wheat Irrigation Guidelines
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Explainable steps for optimal wheat irrigation
                              based on soil type and climate
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">
                                Expert Verified
                              </span>
                              <span className="text-xs text-muted-foreground">
                                • 2 min read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-blue-100/50 bg-gradient-to-br from-blue-50/30 to-background hover-lift group">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🌦️</span>
                          <div className="flex-1">
                            <div className="font-medium mb-1 group-hover:text-blue-600 transition-colors">
                              IMD District Forecast Integration
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              How to use weather data for precise farm planning
                              and risk management
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                                Updated Weekly
                              </span>
                              <span className="text-xs text-muted-foreground">
                                • 3 min read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-green-100/50 bg-gradient-to-br from-green-50/30 to-background hover-lift group">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🏛️</span>
                          <div className="flex-1">
                            <div className="font-medium mb-1 group-hover:text-green-600 transition-colors">
                              PM-KISAN & Agricultural Subsidies
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Complete eligibility guide and application
                              timelines for government schemes
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                                Policy Update
                              </span>
                              <span className="text-xs text-muted-foreground">
                                • 5 min read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-accent/20 p-4 bg-gradient-to-br from-accent/5 to-background">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">🎯</span>
                        <div className="text-sm font-medium">
                          Personalized for You
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Based on your crops (Wheat, Tomato) and location
                        (Nashik, MH), we&apos;ve curated the most relevant
                        guides and updates.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>

              {/* 8. Community & Support */}
              <article
                id="community"
                className="scroll-mt-24 animate-fade-slide-in"
                style={{ animationDelay: "0.7s" }}
              >
                <Card className="card-float border-cyan-200/50 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 rounded-lg bg-cyan-500/10">
                        <Users className="h-5 w-5 text-cyan-600" />
                      </div>
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent font-display">
                        Community & Support
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Connect with farmers and experts.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-cyan-100/50 p-4 bg-gradient-to-br from-cyan-50/30 to-background hover-lift group">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">👥</span>
                          <div className="text-sm font-medium text-muted-foreground">
                            Nearby Farmers
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-cyan-600 group-hover:scale-105 transition-transform mb-2">
                          12
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Active in your 5km radius • 3 online now
                        </div>
                      </div>

                      <div className="rounded-xl border border-blue-100/50 p-4 bg-gradient-to-br from-blue-50/30 to-background hover-lift group">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">👨‍🌾</span>
                          <div className="text-sm font-medium text-muted-foreground">
                            Expert Consultations
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-blue-600 group-hover:scale-105 transition-transform mb-2">
                          5 slots
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Available this week • Next: Tomorrow 2PM
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-green-100/50 p-6 bg-gradient-to-br from-green-50/30 to-background">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg">💬</span>
                        <div className="text-base font-semibold">
                          Recent Community Activity
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-green-100">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium">
                            RS
                          </div>
                          <div className="flex-1">
                            <div className="text-sm">
                              <span className="font-medium">Rajesh Singh</span>{" "}
                              shared irrigation tips for wheat crops
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              2 hours ago • 8 farmers found this helpful
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-blue-100">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
                            AP
                          </div>
                          <div className="flex-1">
                            <div className="text-sm">
                              <span className="font-medium">
                                Dr. Anita Patel
                              </span>{" "}
                              answered question about tomato leaf curl
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              5 hours ago • Expert verified answer
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg bg-background border border-purple-100">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium">
                            MK
                          </div>
                          <div className="flex-1">
                            <div className="text-sm">
                              <span className="font-medium">Mohan Kumar</span>{" "}
                              posted market price update for onions
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              1 day ago • Trending in your area
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </section>

            {/* Right Panel */}
            <aside className="space-y-6">
              <Card className="card-float border-primary/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-lg">⚡</span>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Button className="justify-start h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground">
                    <MessageSquare className="h-4 w-4 mr-3" />
                    Ask AI About My Crops
                  </Button>
                  <Button
                    className="justify-start h-12 hover-lift border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700"
                    variant="outline"
                  >
                    <CloudSun className="h-4 w-4 mr-3" />
                    Check Today&apos;s Weather
                  </Button>
                  <Button
                    className="justify-start h-12 hover-lift border-green-200 bg-green-50 hover:bg-green-100 text-green-700"
                    variant="outline"
                  >
                    <LineChartIcon className="h-4 w-4 mr-3" />
                    View Market Prices
                  </Button>
                  <Button
                    className="justify-start h-12 hover-lift border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-700"
                    variant="outline"
                  >
                    <ImageIcon className="h-4 w-4 mr-3" />
                    Upload Crop Photo
                  </Button>
                  <Button className="justify-start h-12 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                    <ShieldAlert className="h-4 w-4 mr-3" />
                    Emergency Crop Issue
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-float border-accent/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-lg">🔔</span>
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="rounded-xl border border-blue-100/50 p-4 bg-gradient-to-br from-blue-50/30 to-background hover-lift">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🌧️</span>
                      <div>
                        <div className="font-medium text-blue-700 mb-1">
                          Weather Alert
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Heavy rain expected tomorrow — plan drainage for
                          tomato fields.
                        </div>
                        <div className="text-xs text-blue-600 mt-2">
                          2 hours ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-green-100/50 p-4 bg-gradient-to-br from-green-50/30 to-background hover-lift">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📈</span>
                      <div>
                        <div className="font-medium text-green-700 mb-1">
                          Market Update
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Tomato prices up 15% — good time to sell at Pune
                          market.
                        </div>
                        <div className="text-xs text-green-600 mt-2">
                          4 hours ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-orange-100/50 p-4 bg-gradient-to-br from-orange-50/30 to-background hover-lift">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📋</span>
                      <div>
                        <div className="font-medium text-orange-700 mb-1">
                          Subsidy Reminder
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Equipment subsidy deadline in 5 days — submit
                          documents now.
                        </div>
                        <div className="text-xs text-orange-600 mt-2">
                          1 day ago
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-purple-100/50 p-4 bg-gradient-to-br from-purple-50/30 to-background hover-lift">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">👨‍🌾</span>
                      <div>
                        <div className="font-medium text-purple-700 mb-1">
                          Expert Available
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Dr. Sharma has slots open for crop consultation
                          tomorrow.
                        </div>
                        <div className="text-xs text-purple-600 mt-2">
                          3 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function UploadPreview() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return setPreview(null);
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="flex items-center gap-4">
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="hidden"
          aria-label="Upload crop photo"
        />
        <Button
          variant="secondary"
          className="gap-2 h-12 px-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200 hover:from-red-100 hover:to-orange-100 text-red-700 hover-lift"
          asChild
        >
          <span className="inline-flex items-center">
            <ImageIcon className="h-5 w-5" />
            Choose Crop Image
          </span>
        </Button>
      </label>
      {preview ? (
        <div className="relative">
          <Image
            src={preview}
            alt="Uploaded crop leaf preview"
            className="h-20 w-20 rounded-xl object-cover border-2 border-red-200 shadow-md"
            loading="lazy"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
          <ImageIcon className="h-8 w-8 text-gray-400" />
        </div>
      )}
    </div>
  );
}
