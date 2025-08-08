"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Trust from "@/components/Trust";
import Accessibility from "@/components/Accessibility";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "AgriVerse — Intelligent Farming Companion";
    const desc =
      "AI-powered advisor for Indian agriculture. Ask naturally, get trusted, actionable guidance in seconds.";
    const ensure = (selector: string, creator: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = creator();
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };
    const metaDesc = ensure('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    metaDesc.setAttribute("content", desc);

    const linkCanonical = ensure('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    linkCanonical.setAttribute(
      "href",
      window.location.origin + window.location.pathname
    );
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AgriVerse",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered agricultural advisor for India: multilingual, explainable, and grounded in public data.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    inLanguage: ["en", "hi", "ta", "mr"],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <Trust />
      <Accessibility />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
