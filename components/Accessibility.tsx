import { Languages, Mic, WifiOff } from "lucide-react";

const Accessibility = () => {
  return (
    <section id="access" className="container mx-auto py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl">
          Designed for Every Farmer
        </h2>
        <p className="text-muted-foreground mt-3">
          Built for usability in low-connectivity, multilingual, real-world
          settings.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-card p-6 text-center">
          <Mic className="mx-auto text-primary" />
          <div className="font-medium mt-2">Voice input</div>
          <div className="text-sm text-muted-foreground">
            Speak naturally and get answers
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <Languages className="mx-auto text-primary" />
          <div className="font-medium mt-2">Multiple languages</div>
          <div className="text-sm text-muted-foreground">
            Hindi • English • Tamil • Marathi • more
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6 text-center">
          <WifiOff className="mx-auto text-primary" />
          <div className="font-medium mt-2">Resilient design</div>
          <div className="text-sm text-muted-foreground">
            Optimized for patchy connectivity
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-5 mt-6">
        <div className="text-sm font-medium mb-2">
          One question, many languages
        </div>
        <div className="grid gap-2 text-sm">
          <div>EN: When should I irrigate my wheat in Nashik next week?</div>
          <div>HI: अगला हफ्ता नासिक में गेंहू की सिंचाई कब करनी चाहिए?</div>
          <div>
            TA: அடுத்த வாரம் நாசிக்கில் கோதுமைக்கு நீர்ப்பாசனம் எப்போது செய்ய
            வேண்டும்?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
