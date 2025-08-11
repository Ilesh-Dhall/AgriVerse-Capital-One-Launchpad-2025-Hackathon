import { Button } from "@/components/ui/button";
import {
  ArrowBigRight,
  ArrowUpRight,
  CircleArrowOutUpRight,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import HeroText from "./ui/HeroText";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="relative overflow-hidden">
      <div
        ref={ref}
        className="relative isolate"
        style={{
          backgroundImage: `url(/aog-agri.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(300px 200px at var(--mx,50%) var(--my,20%), hsl(var(--accent)/0.25), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/70" aria-hidden="true" />

        <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Leaf color="green" />
              <span className="text-xl font-semibold font-logo">AgriVerse</span>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <Link className="story-link" href="#solution">
              Solution
            </Link>
            <Link className="story-link" href="#trust">
              Trust
            </Link>
            <Link className="story-link" href="#access">
              Accessibility
            </Link>
            <Link className="story-link" href="#tech">
              Tech
            </Link>
          </div>
          <Button variant="default" className="sm:inline-flex bg-green-900">
            <Link href="/dashboard" aria-label="Open AgriVerse Dashboard">
              Get Started
            </Link>
          </Button>
        </nav>

        <main className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div className="space-y-6 animate-in">
            <HeroText />
            <p className="text-lg sm:text-xl max-w-prose">
              Revolutionizing agriculture with AI-powered insights and smart
              farming solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" size="lg" asChild>
                <Link href="/dashboard" aria-label="Open AgriVerse Dashboard">
                  Ask AgriVerse
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm pt-2">
              <span>Powered by</span>
              <Separator className="w-1 h-4 bg-foreground" />
              <Link href={"https://icar.org.in/hi"} target="_blank">
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800 border-2 border-green-900"
                >
                  <ArrowUpRight className="size-4" strokeWidth={3} />
                  ICAR
                </Badge>
              </Link>
              <Link href={"https://mausam.imd.gov.in/"} target="_blank">
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800 border-2 border-green-900"
                >
                  <ArrowUpRight className="size-4" strokeWidth={3} />
                  IMD
                </Badge>
              </Link>
              <Link href={""} target="_blank">
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800 border-2 border-green-900"
                >
                  <ArrowUpRight className="size-4" strokeWidth={3} />
                  Agri Data Portal
                </Badge>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg border bg-card p-4 shadow-[var(--shadow-elegant)] animate-scale-in">
              <div className="text-sm text-muted-foreground mb-2">
                Live demo
              </div>
              <div className="rounded-md border p-4 space-y-3 bg-background">
                <div className="text-sm">
                  “When should I irrigate my wheat next week in Nashik?”
                </div>
                <div className="text-sm text-muted-foreground">
                  AI is thinking…
                </div>
                <div className="rounded-md border p-3 bg-card">
                  <p className="text-sm">
                    Based on IMD forecast (temp 29-33°C, low rainfall) and soil
                    moisture trends, irrigate on Wednesday morning for 3-4
                    hours. Avoid late afternoon to reduce evaporation.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                    <li>Source: IMD, ICAR irrigation guidelines</li>
                    <li>Confidence: High</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Hero;
