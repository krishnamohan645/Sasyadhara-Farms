import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import lifestyleOil from "@/assets/lifestyle-oil-ritual.jpg";
import lifestyleGhee from "@/assets/lifestyle-ghee-pour.jpg";
import lifestyleHoney from "@/assets/lifestyle-hands-jar.jpg";

const RITUALS = [
  {
    title: "Pure Cooking Ritual",
    subtitle: "Wood Pressed Oils",
    description: "Cold Mara Chekku pressed oils crafted for wholesome, heart-friendly everyday cooking.",
    image: lifestyleOil,
    alt: "Woman with natural bottle of cold pressed cooking oil in bright warm kitchen",
    linkText: "Shop Oils",
    category: "Wood Pressed Oils",
  },
  {
    title: "Morning Vedic Ritual",
    subtitle: "A2 Bilona Cow Ghee",
    description: "A spoonful of golden granular A2 ghee with morning warm water or herbal tea for gut vitality.",
    image: lifestyleGhee,
    alt: "Wooden spoon drizzling golden pure ghee into warm ceramic cup",
    linkText: "Shop Ghee",
    category: "Pure Desi Ghee (Bilona)",
  },
  {
    title: "Raw Nature's Sweetness",
    subtitle: "Wild Honey & Jaggery",
    description: "Direct apiary unpasteurised honey and chemical-free jaggery to sweeten life naturally.",
    image: lifestyleHoney,
    alt: "Hands holding artisanal raw wild honey jar with natural craft label",
    linkText: "Shop Sweeteners",
    category: "Organic Jaggery & Honey",
  },
];

export function LifestyleRituals() {
  return (
    <section className="bg-[#FAF7F2] py-20 border-b border-[#E8E2D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
            ✦ Traditional Handcrafted Wellness ✦
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1D3528] mt-2 tracking-tight">
            An organic choice for your everyday morning ritual
          </h2>
        </div>

        {/* 3 Arched Window Cards matching reference */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RITUALS.map((ritual) => (
            <div key={ritual.title} className="group flex flex-col items-center text-center">
              {/* Arched Window Image Container */}
              <div className="relative w-full aspect-[3/4] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-soft bg-[#EDE8DD] border border-[#E5DFD3] transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src={ritual.image}
                  alt={ritual.alt}
                  width={600}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Pill Button below the arch */}
              <div className="mt-6">
                <Link
                  to="/shop"
                  search={{ category: ritual.category }}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-[#1D3528]/20 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1D3528] shadow-xs hover:bg-[#1D3528] hover:text-white transition-all hover:scale-105"
                >
                  <span>{ritual.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <h3 className="font-display text-xl font-bold text-[#1D3528] mt-3">
                {ritual.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-xs leading-relaxed">
                {ritual.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
