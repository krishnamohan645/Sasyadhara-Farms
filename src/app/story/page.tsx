import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Sparkles, Heart, ShieldCheck, Sprout, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { whatsappLink } from "@/lib/site-config";
import lifestyleOil from "@/assets/lifestyle-oil-ritual.jpg";
import lifestyleGhee from "@/assets/lifestyle-ghee-pour.jpg";
import lifestyleHoney from "@/assets/lifestyle-hands-jar.jpg";

export const metadata: Metadata = {
  title: "Our Story — Sasyadhara Farms | Purity Rooted in Tradition",
  description:
    "Discover the story of Sasyadhara Farms, KR Puram, Bangalore. Reviving cold wood-pressed Mara Chekku oils, Vedic Bilona desi ghee, and pure farmer-sourced staples.",
};

export default function StoryPage() {
  const lifestyleOilSrc = typeof lifestyleOil === "string" ? lifestyleOil : (lifestyleOil as { src: string })?.src || lifestyleOil;
  const lifestyleGheeSrc = typeof lifestyleGhee === "string" ? lifestyleGhee : (lifestyleGhee as { src: string })?.src || lifestyleGhee;
  const lifestyleHoneySrc = typeof lifestyleHoney === "string" ? lifestyleHoney : (lifestyleHoney as { src: string })?.src || lifestyleHoney;

  const pillars = [
    {
      icon: Sprout,
      title: "Traditional Mara Chekku",
      desc: "Slow wooden pestles rotate at low RPM to ensure oil temperature never exceeds 40°C, preserving all vital enzymes, natural aroma, and antioxidants.",
    },
    {
      icon: Sparkles,
      title: "Authentic Vedic Bilona",
      desc: "We never skim raw cream. Whole A2 cow milk is cultured into curd, churned bidirectionally with wooden bilonas into makkhan, and slow-cooked for danedar golden granules.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Chemical Refining",
      desc: "No petroleum hexane solvents, no bleaching clay, no chemical degumming, and no artificial fragrances. 100% unadulterated nature in every bottle.",
    },
    {
      icon: Heart,
      title: "Direct Farmer Support",
      desc: "Seeds, wild apiary honey, sugarcane, and millets are sourced directly from ethical regional growers at fair prices, ensuring true soil-to-kitchen integrity.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-foreground">
      {/* 1. Atmospheric Editorial Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#E8E2D5]">
        {/* Ambient Backing Glow */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 178, 118, 0.35) 0%, rgba(209, 224, 203, 0.2) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 text-center space-y-4">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>HERITAGE, TRADITION & PURITY</span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#1D3528] tracking-tight leading-[1.08]">
              Purity Rooted in Tradition
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              We started Sasyadhara Farms in KR Puram, Bangalore with a sacred commitment: to banish industrially stripped oils and artificial pantry substitutes in favor of the timeless food wisdom of our ancestors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. The Story of "Sasya" and "Dhara" */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Circular Seal Presentation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#EDE8DD] border border-[#E5DFD3] flex items-center justify-center shadow-soft p-8 group">
                <Logo className="w-full h-full text-[#1D3528] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-3 rounded-full border border-dashed border-[#1D3528]/20" />
              </div>
              <p className="mt-4 font-display text-lg font-bold text-[#1D3528]">
                Sasyadhara Farms Seal of Authenticity
              </p>
              <p className="text-xs text-muted-foreground max-w-xs mt-1">
                The woman operating the traditional wooden press honors the Vedic home kitchen.
              </p>
            </div>

            {/* Right Column: Editorial Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
                OUR EMBLEM & PHILOSOPHY
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3528] tracking-tight">
                What Sasyadhara Means
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                In classical Sanskrit, <strong className="text-[#1D3528]">Sasya</strong> refers to the fertile, wholesome botanical vegetation of the earth — the seeds, grains, and living herbs that nourish mankind. <strong className="text-[#1D3528]">Dhara</strong> represents the eternal stream, the sacred flow of life and steadfast devotion.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Together, <strong className="text-[#1D3528]">Sasyadhara</strong> stands for an unbroken stream of natural nourishment flowing directly from the farm to your home. Our logo depicts a woman operating a traditional wooden oil press (*Mara Chekku*) beside a harvested basket of seeds — honoring the ancient maternal care and unhurried patience with which food was once prepared at home.
              </p>

              <div className="rounded-2xl border border-[#1D3528]/15 bg-white/70 p-6 space-y-2">
                <p className="font-display font-bold text-base text-[#1D3528]">
                  "Food is Medicine When Prepared With Sacred Patience."
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  When seeds are forced through modern industrial steel expellers at 200°C with chemical solvents, their living prana is extinguished. By returning to the wooden press and bilona churn, we preserve life inside every drop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Core Pillars of Sasyadhara */}
      <section className="bg-[#1D3528] text-white py-20 lg:py-28 border-b border-[#16291F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4B276]">
              UNCOMPROMISED PURITY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 tracking-tight">
              The Four Pillars of Our Craft
            </h2>
            <p className="text-sm sm:text-base text-[#D0DED4] mt-3">
              Every drop of oil, jar of bilona ghee, and block of jaggery is governed by these non-negotiable standards.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors space-y-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#D4B276] border border-white/10">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D0DED4] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visual Lifestyle Bento Grid */}
      <section className="py-20 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
              TRADITIONAL LIVING
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3528] mt-1">
              From Our Kitchen to Yours
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
              <img
                src={lifestyleOilSrc as string}
                alt="Cold pressed cooking oil morning ritual"
                width={600}
                height={750}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">WOOD PRESSED OILS</p>
                  <p className="font-display text-lg font-bold text-white">Wholesome Daily Nourishment</p>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
              <img
                src={lifestyleGheeSrc as string}
                alt="Golden Vedic bilona cow ghee pouring ritual"
                width={600}
                height={750}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">VEDIC BILONA GHEE</p>
                  <p className="font-display text-lg font-bold text-white">Cultured Curd Churned Butter</p>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
              <img
                src={lifestyleHoneySrc as string}
                alt="Hands holding raw wild apiary honey jar"
                width={600}
                height={750}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">RAW WILD HONEY</p>
                  <p className="font-display text-lg font-bold text-white">Unfiltered & Direct from Apiary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visit Us in KR Puram & Order Call to Action */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1D3528]/10 px-4 py-1.5 text-xs font-bold text-[#1D3528]">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Store in KR Puram, Bangalore</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1D3528] tracking-tight">
            Experience the Warmth of Our Store
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            You are always welcome to visit our physical store near Lake Montfort School, Kurudusonnenahalli, KR Puram. Witness our wooden presses running, smell the fresh natural groundnut and mustard aromas, and take home the purest staples for your loved ones.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1D3528] text-white px-8 py-6 text-sm font-bold hover:bg-[#274737] shadow-sm hover:scale-105 transition-all"
            >
              <Link href="/shop" className="flex items-center gap-2">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#1D3528]/30 px-6 py-6 text-sm font-semibold text-[#1D3528] hover:bg-[#1D3528]/5"
            >
              <Link href="/process">
                <span>Our Extraction Process</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#1D3528]/30 px-6 py-6 text-sm font-semibold text-[#1D3528] hover:bg-[#1D3528]/5"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-whatsapp" />
                <span>Message on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
