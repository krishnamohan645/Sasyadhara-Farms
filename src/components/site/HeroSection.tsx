"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappOrderLink } from "@/lib/site-config";
import heroMustard from "@/assets/hero-mustard-pedestal.jpg";
import heroGhee from "@/assets/hero-ghee-pedestal.jpg";
import heroHoney from "@/assets/hero-honey-pedestal.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HERO_SLIDES = [
  {
    id: "mustard",
    index: "01",
    eyebrow: "TRADITIONAL COLD WOOD PRESSED",
    prefix: "Meet Sasyadhara's",
    title: "Organic Mustard Oil",
    subtitle: "Cold Mara Chekku Extracted · 100% Raw · ₹410 / Litre",
    description: "Slow-pressed in wooden chekkus below 40°C to preserve natural pungency, vital antioxidants, and omega-3.",
    price: "₹410",
    unit: "1 Litre",
    image: heroMustard,
    alt: "Sasyadhara Farms Wood Pressed Mustard Oil on stone pedestal with botanical leaves and sage arch",
    orderName: "Wood Pressed Mustard Oil (1 Litre)",
    orderPrice: 410,
  },
  {
    id: "ghee",
    index: "02",
    eyebrow: "VEDIC BILONA METHOD",
    prefix: "Meet Sasyadhara's",
    title: "Pure Bilona Cow Ghee",
    subtitle: "Cultured A2 Curd Churned · Danedar Golden · ₹800 / 500ml",
    description: "Hand-churned with wooden bilona from cultured curd into makkhan, then slowly hand-simmered for authentic golden granules.",
    price: "₹800",
    unit: "500 ml",
    image: heroGhee,
    alt: "Sasyadhara Farms Vedic Bilona Cow Ghee on stone pedestal with botanical leaves and sage arch",
    orderName: "Pure Cow Ghee Bilona Method (500 ml)",
    orderPrice: 800,
  },
  {
    id: "honey",
    index: "03",
    eyebrow: "DIRECT APIARY HARVEST",
    prefix: "Meet Sasyadhara's",
    title: "Pure Raw Wild Honey",
    subtitle: "100% Unprocessed · Live Bee Pollen · ₹250 / 250g",
    description: "Unfiltered, unheated wild apiary honey packed with live natural enzymes and rich therapeutic sweetness.",
    price: "₹250",
    unit: "250 gms",
    image: heroHoney,
    alt: "Sasyadhara Farms Pure Raw Wild Honey on stone pedestal with botanical leaves and sage arch",
    orderName: "Pure Raw Wild Honey (250 gms)",
    orderPrice: 250,
  },
];

export function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const slide = HERO_SLIDES[activeIdx];

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-[#E8E2D5]/80 bg-[#FAF7F2]">
      {/* Authentic Sunlit Organic Farm Photographic Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${typeof heroBg === "string" ? heroBg : (heroBg as { src: string })?.src || heroBg})` }}
        aria-hidden="true"
      />

      {/* Subtle Warm Gradient Overlay for Visual Depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/50 via-transparent to-[#FAF7F2]/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 min-h-[480px]">
          {/* Left Column: Bold Clean Editorial Typography like the Reference */}
          <div className="lg:col-span-6 space-y-6">
            {/* Slide Index & Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/80">
                {slide.eyebrow}
              </span>
            </div>

            {/* Title */}
            <div>
              <p className="font-display text-3xl sm:text-4xl text-[#1D3528] font-bold">
                {slide.prefix}
              </p>
              <h1
                key={slide.id}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1D3528] tracking-tight leading-[1.05] mt-1 transition-all duration-500 animate-rise"
              >
                {slide.title}
              </h1>
            </div>

            {/* Subtitle & Price Note */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D3528]/70">
              {slide.subtitle}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              {slide.description}
            </p>

            {/* Solid Forest Green Pill Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#1D3528] px-8 py-6 text-sm font-bold text-white hover:bg-[#274737] shadow-sm transition-all hover:scale-105"
              >
                <a
                  href={whatsappOrderLink(slide.orderName, slide.orderPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-[#1D3528]/30 px-6 py-6 text-sm font-semibold text-[#1D3528] hover:bg-[#1D3528]/5"
              >
                <a href="#price-list">
                  <span>View Price List</span>
                </a>
              </Button>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-[#1D3528] hover:bg-black/5 transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-[#1D3528] hover:bg-black/5 transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="text-xs font-mono font-bold text-[#1D3528]">
                {slide.index} / 03
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIdx === i ? "w-6 bg-[#1D3528]" : "w-2 bg-[#1D3528]/20"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Iconic Product on Limestone Pedestal with Sage Arch */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-square rounded-[2.5rem] overflow-hidden shadow-lift border border-[#E5DFD3] bg-[#EBE7DD]/40">
              <img
                key={slide.id}
                src={(typeof slide.image === "string" ? slide.image : (slide.image as { src: string })?.src) as string}
                alt={slide.alt}
                width={900}
                height={900}
                className="h-full w-full object-cover transition-all duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
