"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
  Bell,
  Languages,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [showNotifications, setShowNotifications] = useState(false);

  const items = useMemo(
    () => [
      {
        id: "ai",
        href: "/dashboard/ai",
        label: "AI Assistant",
        icon: MessageSquare,
      },
      { id: "farm", href: "/dashboard/farm", label: "My Farm", icon: Sprout },
      {
        id: "weather",
        href: "/dashboard/weather",
        label: "Weather",
        icon: CloudSun,
      },
      {
        id: "market",
        href: "/dashboard/market",
        label: "Market",
        icon: LineChartIcon,
      },
      {
        id: "finance",
        href: "/dashboard/finance",
        label: "Finance",
        icon: Wallet,
      },
      {
        id: "health",
        href: "/dashboard/health",
        label: "Crop Health",
        icon: ShieldAlert,
      },
      {
        id: "knowledge",
        href: "/dashboard/knowledge",
        label: "Knowledge",
        icon: BookOpen,
      },
      {
        id: "community",
        href: "/dashboard/community",
        label: "Community",
        icon: Users,
      },
    ],
    []
  );

  const notifications = useMemo(
    () => [
      {
        id: "weather-alert",
        icon: "🌧️",
        title: "Weather Alert",
        description:
          "Heavy rain expected tomorrow — plan drainage for tomato fields.",
        time: "2 hours ago",
      },
      {
        id: "market-update",
        icon: "📈",
        title: "Market Update",
        description: "Tomato prices up 15% — good time to sell at Pune market.",
        time: "4 hours ago",
      },
      {
        id: "subsidy-reminder",
        icon: "📋",
        title: "Subsidy Reminder",
        description:
          "Equipment subsidy deadline in 5 days — submit documents now.",
        time: "1 day ago",
      },
      {
        id: "expert-available",
        icon: "👨‍🌾",
        title: "Expert Available",
        description:
          "Dr. Sharma has slots open for crop consultation tomorrow.",
        time: "3 days ago",
      },
    ],
    []
  );

  const activeHref = pathname === "/dashboard" ? "/dashboard/ai" : pathname;

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
                      isActive={activeHref.startsWith(item.href)}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="top-0 z-10 w-full">
            <div className="flex h-16 items-center px-2 border-b-2 border-gray-200">
              <SidebarTrigger className="p-6" />
              <Separator orientation="vertical" className="mx-3 h-8" />
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Sprout className="h-4 w-4" />
              </div>
              <div className="font-display font-bold text-lg ">
                AgriVerse Dashboard
              </div>
              <div className="ml-auto flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2 h-9">
                  <Languages className="h-4 w-4" />
                  <span className="hidden sm:inline">EN</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 relative"
                  aria-label="Notifications"
                  onClick={() => setShowNotifications((prev) => !prev)}
                >
                  <Bell className="h-4 w-4" />
                </Button>
                {showNotifications && (
                  <Card className="absolute top-15 left-1/2 overflow-hidden">
                    <CardHeader>Notifications</CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      {notifications.map((note) => (
                        <div
                          key={note.id}
                          className="flex items-start gap-3 p-2 rounded"
                        >
                          <span className="text-xl">{note.icon}</span>
                          <div>
                            <div className="font-medium">{note.title}</div>
                            <div className="text-xs">{note.description}</div>
                            <div className="text-xs mt-1">{note.time}</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </header>

          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
