import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import lifestyle1 from "@/assets/lifestyle-oil-ritual.jpg";
import lifestyle2 from "@/assets/lifestyle-ghee-pour.jpg";
import lifestyle3 from "@/assets/lifestyle-hands-jar.jpg";

const REVIEWS = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Indiranagar, Bangalore",
    rating: 5,
    title: "Real Danedar Ghee Just Like Nani Made",
    quote:
      "I was searching for authentic Bilona ghee in Bangalore for months. Sasyadhara's Cow Ghee has that golden granular texture and heavenly aroma that fills the kitchen the moment you open the jar. Delivery to Indiranagar was prompt too!",
    image: lifestyle1,
  },
  {
    id: 2,
    name: "Dr. Rajesh K.",
    location: "Whitefield, Bangalore",
    rating: 5,
    title: "Unadulterated Wood Pressed Mustard Oil",
    quote:
      "As a physician, I am extremely particular about cooking oils. Their cold mara chekku mustard oil has authentic natural pungency without chemical heat treatment. My family has switched completely.",
    image: lifestyle2,
  },
  {
    id: 3,
    name: "Meera Venkatesh",
    location: "KR Puram, Bangalore",
    rating: 5,
    title: "Local Farm Store Purity You Can Trust",
    quote:
      "Visiting their KR Puram store was reassuring. You can actually see the wood presses in operation. Their raw wild honey and organic jaggery are staple items in our breakfast table now.",
    image: lifestyle3,
  },
];

export function CommunityReviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rev = REVIEWS[activeIdx];

  const next = () => setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="bg-[#FAF7F2] py-20 lg:py-28 border-b border-[#E8E2D5]">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
            ✦ TRUSTED BY BANGALORE FAMILIES ✦
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1D3528] mt-2 tracking-tight">
            From Our Community
          </h2>
        </div>

        {/* Review Box */}
        <div className="grid items-center gap-8 md:grid-cols-12 bg-white/70 rounded-[2.5rem] border border-[#E5DFD3] p-6 sm:p-10 shadow-soft">
          {/* Customer Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-[#E5DFD3] bg-[#E8E3D7]">
              <img
                src={rev.image}
                alt={rev.name}
                width={500}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="md:col-span-7 space-y-4">
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#C87D32]">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#C87D32]" />
              ))}
              <span className="text-xs font-bold text-[#1D3528] ml-2">Verified Customer</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1D3528]">
              "{rev.title}"
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
              "{rev.quote}"
            </p>

            <div className="pt-2">
              <div className="font-display font-bold text-base text-[#1D3528]">
                {rev.name}
              </div>
              <div className="text-xs text-muted-foreground">{rev.location}</div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-[#1D3528] hover:bg-black/5 transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-[#1D3528] hover:bg-black/5 transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 ml-4">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIdx === i ? "w-6 bg-[#1D3528]" : "w-2 bg-[#1D3528]/25"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
