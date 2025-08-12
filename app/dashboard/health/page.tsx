"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldAlert, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
            width={80}
            height={80}
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

export default function HealthPage() {
  useEffect(() => {
    document.title = "Crop Health Monitor — AgriVerse";
  }, []);

  return (
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
  );
}