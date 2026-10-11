import { Instagram } from "lucide-react";
import lifestyle1 from "@/assets/lifestyle-oil-ritual.jpg";
import lifestyle2 from "@/assets/lifestyle-ghee-pour.jpg";
import lifestyle3 from "@/assets/lifestyle-hands-jar.jpg";
import heroMustard from "@/assets/hero-mustard-pedestal.jpg";
import heroHoney from "@/assets/hero-honey-pedestal.jpg";

const TILES = [
  { img: lifestyle1, alt: "Wood pressed oil ritual" },
  { img: heroHoney, alt: "Wild honey harvest jar" },
  { img: lifestyle2, alt: "Vedic bilona ghee pouring ritual" },
  { img: heroMustard, alt: "Fresh stone pressed mustard oil" },
  { img: lifestyle3, alt: "Artisanal organic jaggery and honey" },
];

export function SocialStrip() {
  return (
    <section className="bg-[#FAF7F2] py-16 border-b border-[#E8E2D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
            CONNECT WITH OUR COMMUNITY
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-2xl sm:text-3xl font-bold text-[#1D3528] hover:text-gold transition-colors mt-1"
          >
            <Instagram className="h-6 w-6 text-gold" />
            <span>Join Us @sasyadharafarms</span>
          </a>
        </div>

        {/* 5 Photos Row matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {TILES.map((t, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[#E5DFD3] shadow-xs bg-[#EDE8DD]"
            >
              <img
                src={(typeof t.img === "string" ? t.img : (t.img as { src: string })?.src) as string}
                alt={t.alt}
                width={400}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1D3528]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
