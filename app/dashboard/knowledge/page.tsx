"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useEffect } from "react";

export default function KnowledgePage() {
  useEffect(() => {
    document.title = "Knowledge Library — AgriVerse";
  }, []);

  return (
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
              (Nashik, MH), we've curated the most relevant
              guides and updates.
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}