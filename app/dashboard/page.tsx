"use client";

import { useEffect, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Languages, Search, MessageSquare, Sprout, CloudSun, LineChart as LineChartIcon, Wallet, ShieldAlert, BookOpen, Users } from "lucide-react";
// Dashboard section components
import AIChatAssistant from "@/components/dashboard/AIChatAssistant";
import FarmProfile from "@/components/dashboard/FarmProfile";
import WeatherClimate from "@/components/dashboard/WeatherClimate";
import MarketIntelligence from "@/components/dashboard/MarketIntelligence";
import FinancialPlanning from "@/components/dashboard/FinancialPlanning";
import CropHealthMonitor from "@/components/dashboard/CropHealthMonitor";
import KnowledgeLibrary from "@/components/dashboard/KnowledgeLibrary";
import CommunitySupport from "@/components/dashboard/CommunitySupport";
import QuickActions from "@/components/dashboard/QuickActions";
import Notifications from "@/components/dashboard/Notifications";
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
          <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto flex h-14 items-center gap-3 px-4">
              <SidebarTrigger className="mr-2" />
              <div className="font-semibold">AgriVerse Dashboard</div>
              <Separator orientation="vertical" className="mx-2 h-6" />
              <div className="relative hidden md:flex max-w-md w-full">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops, prices, weather…"
                  className="pl-8"
                />
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Languages className="h-4 w-4" />
                  EN
                </Button>
                <Button variant="ghost" size="icon" aria-label="Notifications">
                  <Bell />
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-6 grid gap-6 lg:grid-cols-[1fr_320px]">
            <section className="space-y-6">
              <h1 className="text-2xl font-bold">
                AgriVerse Dashboard — AI Farming Assistant
              </h1>
              <AIChatAssistant />
              <FarmProfile />
              <WeatherClimate />
              <MarketIntelligence />
              <FinancialPlanning />
              <CropHealthMonitor />
              <KnowledgeLibrary />
              <CommunitySupport />
            </section>
            <aside className="space-y-6">
              <QuickActions />
              <Notifications />
            </aside>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );

