"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Mic, Sprout } from "lucide-react";
import { useEffect } from "react";

export default function AiPage() {
  useEffect(() => {
    document.title = "AI Farming Intelligence — AgriVerse";
  }, []);

  return (
    <>
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
    </>
  );
}