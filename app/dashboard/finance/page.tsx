"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { useEffect } from "react";

export default function FinancePage() {
  useEffect(() => {
    document.title = "Financial Planning — AgriVerse";
  }, []);

  return (
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
  );
}