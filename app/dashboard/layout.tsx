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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Bell,
  Languages,
  Search,
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
                  onClick={() => setShowNotifications((prev) => !prev)}
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-accent rounded-full animate-pulse"></span>
                </Button>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-6 py-8 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="space-y-8">{children}</div>

            <aside className="space-y-6">
              {showNotifications && (
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
              )}
            </aside>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
