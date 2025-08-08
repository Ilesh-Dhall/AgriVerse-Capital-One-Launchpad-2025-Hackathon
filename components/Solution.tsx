import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, CloudRain, Sprout, Database, Languages } from "lucide-react";

const samples = [
  "How do I control brown planthopper in paddy?",
  "Should I sow chickpea this week in Indore?",
  "Will cold wave affect my tomato crop in Nashik?",
];

const QueryDemo = () => {
  const [query, setQuery] = useState(samples[0]);
  const [answer, setAnswer] = useState("");
  const i = useRef(0);

  const generate = () => {
    const text =
      "Based on current weather, soil, and pest advisories: use yellow sticky traps, avoid broad-spectrum sprays, and apply recommended bio-control. Source: ICAR & IMD.";
    setAnswer("");
    i.current = 0;
    const interval = setInterval(() => {
      setAnswer((a) => a + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, 12);
  };

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-lg border bg-card p-5 shadow-[var(--shadow-elegant)]">
      <div className="flex gap-2 mb-3 overflow-x-auto">
        {samples.map((s) => (
          <button
            key={s}
            onClick={() => {
              setQuery(s);
              setTimeout(generate, 50);
            }}
            className="px-3 py-1 rounded border text-sm hover-scale"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="grid gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask naturally in your language…"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <Button variant="hero" onClick={generate} className="w-full sm:w-auto">
          Ask AgriVerse
        </Button>
        <div className="rounded-md border bg-background p-3 text-sm min-h-24 whitespace-pre-wrap animate-fade-in">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <section id="solution" className="container mx-auto py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl">
          From Question to Actionable Advice
        </h2>
        <p className="text-muted-foreground mt-3">
          Ask naturally. Our multilingual AI processes weather, crop science,
          soil, and finance data to give you clear, trusted recommendations.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Languages className="text-primary" size={18} />
              <span className="font-medium">Ask Naturally</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Chat in Hindi, English or your regional language. Voice support
              coming soon.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="text-primary" size={18} />
              <span className="font-medium">Reason Across Domains</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Retrieval + reasoning with weather, crop cycles, pest science, and
              policy.
            </p>
          </div>
        </div>
        <QueryDemo />
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Database className="text-primary" size={18} />
              <span className="font-medium">Grounded in Facts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cites sources from ICAR, IMD, and public datasets to reduce
              hallucinations.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <CloudRain className="text-primary" size={18} />
              <span className="font-medium">Actionable Outputs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Clear steps, timing, quantities—no jargon. Confidence scores
              included.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Sprout className="text-primary" size={18} />
              <span className="font-medium">Designed for Trust</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Explainable, reliable, and built for real-world edge cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
