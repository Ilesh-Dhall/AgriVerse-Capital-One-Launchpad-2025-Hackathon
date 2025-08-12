"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import { useEffect } from "react";

export default function CommunityPage() {
  useEffect(() => {
    document.title = "Community & Support — AgriVerse";
  }, []);

  return (
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
  );
}