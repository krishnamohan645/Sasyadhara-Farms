import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import gheeJar from "@/assets/hero-ghee-pedestal.jpg";
import lifestylePour from "@/assets/lifestyle-ghee-pour.jpg";
import lifestyleOil from "@/assets/lifestyle-oil-ritual.jpg";

export function EditorialSplitSection() {
  const gheeJarSrc = typeof gheeJar === "string" ? gheeJar : (gheeJar as { src: string })?.src || gheeJar;
  const lifestylePourSrc = typeof lifestylePour === "string" ? lifestylePour : (lifestylePour as { src: string })?.src || lifestylePour;
  const lifestyleOilSrc = typeof lifestyleOil === "string" ? lifestyleOil : (lifestyleOil as { src: string })?.src || lifestyleOil;

  return (
    <>
      {/* 1. Organic Feature: Two Photos on Left + Copy on Right (Matches Reference Section 5) */}
      <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-[#E8E2D5] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Photo Composition: Circle Inset + Arched Image */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Main Arched Frame */}
              <div className="relative w-[78%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
                <img
                  src={gheeJarSrc as string}
                  alt="Sasyadhara Farms Bilona Cow Ghee on limestone pedestal"
                  width={700}
                  height={850}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Circular floating inset on top left (Matches Reference Mockup) */}
              <div className="absolute -top-4 -left-2 sm:-left-4 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#FAF7F2] shadow-lift bg-[#E8E3D7]">
                <img
                  src={lifestylePourSrc as string}
                  alt="Golden ghee pouring ritual"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <span>VEDIC BILONA METHOD</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1D3528] tracking-tight leading-[1.1]">
                Pure Vedic Bilona Desi Cow Ghee
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Handcrafted strictly according to traditional Ayurvedic wisdom. We curdle whole milk into yogurt, churn it bidirectionally with a wooden bilona to separate butter, and gently slow-cook it on a low flame until golden, aromatic granules form.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-foreground/80 font-medium">
                <p>✦ 100% Danedar Golden Texture & Irresistible Aroma</p>
                <p>✦ No Industrial Centrifuges · Zero Cream Skimming</p>
                <p>✦ Rich in Butyric Acid & Essential Fat-Soluble Vitamins</p>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="rounded-full bg-[#1D3528] px-8 py-6 text-sm font-bold text-white hover:bg-[#274737] shadow-sm hover:scale-105 transition-all"
                >
                  <Link href="/shop?category=Pure+Desi+Ghee+(Bilona)" className="flex items-center gap-2">
                    <span>Shop Ghee Range</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Inverse Split: Copy on Left + Lifestyle Image on Right (Matches Reference Section 7) */}
      <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-[#E8E2D5] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
                LIVING WELL WITH SASYADHARA
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1D3528] tracking-tight leading-[1.1]">
                Pure Living With Us!
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                When you switch to unrefined cold pressed oils and Vedic ghee, you invite nature’s pure nourishment back to your dining table. Experience the deep aroma of cold-pressed mustard oil in traditional tempering, or the delicate sweetness of apiary wild honey.
              </p>

              <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed">
                We believe what touches your body should come from the earth, uncorrupted by chemicals, preservatives, or high-heat refinement.
              </p>

              <div className="pt-2">
                <Button
                  asChild
                  className="rounded-full bg-[#1D3528] px-8 py-6 text-sm font-bold text-white hover:bg-[#274737] shadow-sm hover:scale-105 transition-all"
                >
                  <Link href="/story" className="flex items-center gap-2">
                    <span>Our Story & Roots</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Arched Lifestyle Image */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-t-[12rem] rounded-b-3xl overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#EBE7DD]">
                <img
                  src={lifestyleOilSrc as string}
                  alt="Customer holding fresh farm cold-pressed oil"
                  width={700}
                  height={850}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
