import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Droplets, Sparkles, ShieldCheck, Sun, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site-config";
import heroMustard from "@/assets/hero-mustard-pedestal.jpg";
import heroGhee from "@/assets/hero-ghee-pedestal.jpg";
import greenStage from "@/assets/green-feature-pedestal.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Sasyadhara Farms | Cold Wood Press & Vedic Bilona" },
      {
        name: "description",
        content:
          "Learn how Sasyadhara Farms extracts cold wood-pressed Mara Chekku oils below 40°C and hand-churns Vedic Bilona desi ghee in KR Puram, Bangalore.",
      },
      { property: "og:title", content: "Our Process — Sasyadhara Farms" },
      {
        property: "og:description",
        content: "Traditional cold wood pressing and Vedic Bilona curd-churned ghee extraction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const oilSteps = [
    {
      num: "01",
      title: "Seed Selection & Natural Sun Curing",
      desc: "We curate only pristine, undamaged single-origin groundnuts, mustard seeds, sesame, and sun-dried copra directly from farmers. Seeds are air-cured under natural sunlight to reach the exact moisture level required for gentle extraction.",
    },
    {
      num: "02",
      title: "Slow Wooden Vaagai Mara Chekku Pressing",
      desc: "The seeds are poured into a mortar crafted from traditional Vaagai wood. A heavy wooden pestle rotates at a slow 12–16 RPM. The natural wood absorbs friction, guaranteeing that the oil temperature never exceeds 40°C at any moment.",
    },
    {
      num: "03",
      title: "Zero Chemical Solvents & Zero Refining",
      desc: "Commercial factories use petroleum-derived hexane solvents to squeeze out every drop of fat. At Sasyadhara, we rely solely on mechanical wooden pressure. No caustic soda, no synthetic bleaching agents, and no artificial degumming.",
    },
    {
      num: "04",
      title: "Gravity Settling & Pure Cotton Filtration",
      desc: "The freshly pressed raw oil is allowed to rest undisturbed in stainless steel tanks for 48 hours so natural seed sediment settles naturally by gravity. It is then filtered through pure woven cotton cloth and hand-bottled raw.",
    },
  ];

  const gheeSteps = [
    {
      num: "01",
      title: "Fresh Whole A2 Cow Milk",
      desc: "Pure, wholesome A2 desi cow milk is slowly heated on a low flame in traditional brass vessels until it simmers naturally.",
    },
    {
      num: "02",
      title: "Cultured Overnight into Whole Curd",
      desc: "Unlike industrial ghee that separates raw cream with high-speed centrifuges, we follow the sacred Ayurvedic path: the milk is cooled and cultured into living whole curd overnight.",
    },
    {
      num: "03",
      title: "Bidirectional Wooden Bilona Churning",
      desc: "The set curd is churned bidirectionally with a wooden churner (Bilona). The rhythmic clockwise and counter-clockwise motion separates authentic makkhan (butter) from nutritious buttermilk.",
    },
    {
      num: "04",
      title: "Slow Simmering into Golden Danedar Ghee",
      desc: "The makkhan is gently melted on a low fire until the milk solids caramelize and settle, leaving pure, fragrant, golden granular (danedar) ghee with an unmistakable heavenly aroma.",
    },
  ];

  const comparison = [
    {
      metric: "Extraction Temperature",
      industrial: "180°C – 220°C (destroys vital vitamins & omega fats)",
      sasyadhara: "Below 40°C (100% cold pressed, living enzymes intact)",
    },
    {
      metric: "Extraction Solvents",
      industrial: "Petroleum Hexane chemical solvents to force fat yield",
      sasyadhara: "Zero chemicals, purely mechanical wooden pestle pressure",
    },
    {
      metric: "Refining & Degumming",
      industrial: "Caustic soda, phosphoric acid, and chemical degumming",
      sasyadhara: "Zero refining. 100% natural raw virgin oil",
    },
    {
      metric: "Bleaching & Deodorizing",
      industrial: "Bleaching earths + 200°C steam stripping to remove natural smell",
      sasyadhara: "Natural color and authentic nutty aroma untouched",
    },
    {
      metric: "Preservatives & TBHQ",
      industrial: "Synthetic antioxidants (TBHQ, BHA) for multi-year shelf life",
      sasyadhara: "No additives. Natural vitamin E acts as preservative",
    },
    {
      metric: "Desi Ghee Preparation",
      industrial: "Industrial cream separators (direct cream boiled into ghee)",
      sasyadhara: "Authentic Vedic 5-step Bilona method from cultured curd",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-foreground">
      {/* 1. Page Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(209, 224, 203, 0.5) 0%, rgba(212, 178, 118, 0.25) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 text-center space-y-4">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>SACRED CRAFT & ANCIENT SCIENCE</span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#1D3528] tracking-tight leading-[1.08]">
              The Science of Living Purity
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Step inside our process: why traditional wood Mara Chekku cold pressing and Vedic Bilona curd-churning preserve nutrients that modern factory refining destroys.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Process A: Wood Pressed Oils (Mara Chekku) */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70 flex items-center gap-1.5">
                <Droplets className="h-4 w-4 text-gold" />
                <span>MARA CHEKKU WOOD PRESS METHOD</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1D3528] tracking-tight">
                Cold Pressed Under 40°C
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                When oil seeds are crushed under modern steel screws at 150°C, the friction burns heat-sensitive polyphenols, essential fatty acids, and vitamin E. Our slow-turning wooden pestles prevent friction heat, yielding unadulterated cold pressed oil rich in taste and natural aroma.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-square rounded-[2.5rem] overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
                <img
                  src={heroMustard}
                  alt="Sasyadhara Farms cold wood pressed oil bottle"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oilSteps.map((st) => (
              <div
                key={st.num}
                className="rounded-3xl bg-white/70 border border-[#E8E2D5] p-6 sm:p-8 shadow-xs hover:shadow-soft transition-all space-y-4"
              >
                <span className="font-mono text-3xl font-extrabold text-gold block">
                  {st.num}
                </span>
                <h3 className="font-display text-lg font-bold text-[#1D3528]">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process B: Vedic Bilona Desi Ghee */}
      <section className="bg-[#1D3528] text-white py-20 lg:py-28 border-b border-[#16291F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 mb-16">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[460px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={heroGhee}
                  alt="Sasyadhara Farms Vedic Bilona Cow Ghee on limestone pedestal"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4B276] flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#D4B276]" />
                <span>THE ANCIENT 5-STEP VEDIC BILONA METHOD</span>
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                From Whole Curd to Golden Makkhan
              </h2>
              <p className="text-sm sm:text-base text-[#D0DED4] leading-relaxed">
                Commercial dairy ghee is almost universally prepared by skimming raw cream with motor separators and heating the cream directly. In classical Ayurveda, ghee is medicine only when made from cultured yogurt curd churned bidirectionally with wooden bilonas.
              </p>
            </div>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gheeSteps.map((st) => (
              <div
                key={st.num}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 hover:bg-white/10 transition-colors"
              >
                <span className="font-mono text-3xl font-extrabold text-[#D4B276] block">
                  {st.num}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D0DED4] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table: Factory Refined vs Sasyadhara */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
              KNOW YOUR FOOD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3528] mt-1">
              Industrial Refining vs. Sasyadhara Craft
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Why your health transforms when you make the switch to authentic cold-pressed staples.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#E8E2D5] bg-white shadow-soft">
            <div className="grid grid-cols-12 bg-[#1D3528] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-3">Aspect</div>
              <div className="col-span-4 sm:col-span-4 text-red-300">Commercial Refined Oils</div>
              <div className="col-span-4 sm:col-span-5 text-[#D4B276]">Sasyadhara Wood Pressed</div>
            </div>

            <div className="divide-y divide-[#E8E2D5]">
              {comparison.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-start gap-2 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]/60"
                  }`}
                >
                  <div className="col-span-4 sm:col-span-3 font-bold text-[#1D3528]">
                    {row.metric}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-muted-foreground flex items-start gap-1.5">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.industrial}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-5 font-semibold text-[#1D3528] flex items-start gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.sasyadhara}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 lg:py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1D3528] tracking-tight">
            Ready to Taste the Difference?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Order your fresh wood pressed oils and Vedic Bilona cow ghee directly from our KR Puram store.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1D3528] text-white px-8 py-6 text-sm font-bold hover:bg-[#274737] shadow-sm hover:scale-105 transition-all"
            >
              <Link to="/#price-list" className="flex items-center gap-2">
                <span>View Full Price List</span>
                <ArrowRight className="h-4 w-4" />
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
                <span>Order on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
