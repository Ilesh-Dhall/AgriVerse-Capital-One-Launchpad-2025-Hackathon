"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sprout } from "lucide-react";
import { useEffect } from "react";

export default function FarmPage() {
  useEffect(() => {
    document.title = "My Farm — AgriVerse";
  }, []);

  return (
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
  );
}