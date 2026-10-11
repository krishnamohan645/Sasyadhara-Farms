import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import heroMustard from "@/assets/hero-mustard-pedestal.jpg";
import heroGhee from "@/assets/hero-ghee-pedestal.jpg";

const ARTICLES = [
  {
    title: "Why Wood Pressed (Mara Chekku) Oils Are Better Than Refined Oils",
    excerpt:
      "Modern refined oils undergo solvent extraction and temperatures up to 200°C. Discover why cold slow wood pressing preserves heart-healthy antioxidants and essential fatty acids.",
    date: "Farm Journal · 5 min read",
    image: heroMustard,
    link: "/process",
  },
  {
    title: "The Vedic Bilona Secret: Why Curd-Churned Ghee is Golden Medicine",
    excerpt:
      "Ayurveda strictly differentiates industrial cream butter ghee from cultured curd Bilona ghee. Learn how bidirectional wooden churning activates beneficial butyrate.",
    date: "Vedic Traditions · 4 min read",
    image: heroGhee,
    link: "/story",
  },
];

export function BlogSection() {
  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-[#E8E2D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
              Traditional Wisdom & Recipes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3528] mt-1 tracking-tight">
              Our Blog & Farm Journal
            </h2>
          </div>

          <Link
            href="/story"
            className="text-xs font-bold uppercase tracking-wider text-[#1D3528] hover:underline"
          >
            Read All Articles →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {ARTICLES.map((art) => {
            const imgSrc = typeof art.image === "string" ? art.image : (art.image as { src: string })?.src || art.image;
            return (
              <div
                key={art.title}
                className="group rounded-3xl overflow-hidden bg-white/70 border border-[#E8E2D5] shadow-xs hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E3D7]">
                  <img
                    src={imgSrc as string}
                    alt={art.title}
                    width={700}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1D3528] group-hover:text-gold transition-colors">
                    <Link href={art.link}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {art.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={art.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D3528] group-hover:text-gold transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
