import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
          backgroundImage: `url(/og-agri.jpg)`,
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
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-primary shadow-[var(--shadow-elegant)]" />
            <span className="text-xl font-semibold">AgriVerse</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a className="story-link" href="#solution">
              Solution
            </a>
            <a className="story-link" href="#trust">
              Trust
            </a>
            <a className="story-link" href="#access">
              Accessibility
            </a>
            <a className="story-link" href="#tech">
              Tech
            </a>
          </div>
          <Button variant="hero" asChild className="hidden sm:inline-flex">
            <Link href="/dashboard" aria-label="Open AgriVerse Dashboard">
              Ask AgriVerse
            </Link>
          </Button>
        </nav>

        <main className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div className="space-y-6 animate-enter">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Your Intelligent Farming Companion
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-prose">
              Get instant, expert advice for your crops in your own language.
              Trusted, explainable answers grounded in public data and
              agricultural science.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link href="/dashboard" aria-label="Open AgriVerse Dashboard">
                  Ask AgriVerse
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                Learn more
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <span>Powered by</span>
              <span className="px-2 py-1 rounded border">ICAR</span>
              <span className="px-2 py-1 rounded border">IMD</span>
              <span className="px-2 py-1 rounded border">Agri Data Portal</span>
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
                    Based on IMD forecast (temp 29–33°C, low rainfall) and soil
                    moisture trends, irrigate on Wednesday morning for 3–4
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
