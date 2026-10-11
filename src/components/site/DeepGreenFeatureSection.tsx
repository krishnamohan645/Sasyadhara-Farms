import { MessageCircle, CheckCircle2, ShieldCheck, Sparkles, Truck, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site-config";
import greenStage from "@/assets/green-feature-pedestal.jpg";

export function DeepGreenFeatureSection() {
  const points = [
    {
      icon: Droplets,
      title: "Extracted Below 40°C",
      desc: "Slow Mara Chekku wood pressing prevents heat friction, keeping heat-sensitive vitamins and antioxidants intact.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Chemicals & Preservatives",
      desc: "100% natural, unadulterated purity. No mineral oils, artificial essence, or synthetic bleaching agents.",
    },
    {
      icon: Sparkles,
      title: "Traditional Vedic Bilona Ghee",
      desc: "Made from whole cultured A2 curd, hand-churned into makkhan with wooden bilona for golden granular nutrition.",
    },
    {
      icon: Truck,
      title: "Free Delivery Within 5 KM",
      desc: "Direct farm dispatch from KR Puram, Bangalore. Free delivery on min. 2L orders & subsidized across Bangalore.",
    },
  ];

  return (
    <section className="bg-[#1D3528] text-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Centered Heading like the reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4B276]">
            ✦ FARM STORE IN KR PURAM, BANGALORE ✦
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2 tracking-tight">
            Wood Pressed Oils · Inside-Out Goodness
          </h2>
          <p className="text-sm sm:text-base text-[#D0DED4] mt-3">
            Preserving the sacred essence of traditional Indian cooking in every golden drop.
          </p>
        </div>

        {/* 2-Column Split: Center/Left Pedestal Visual + Right Feature Points */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left / Center Visual: The Oil Bottle on Limestone Pedestal */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src={greenStage}
                alt="Wood Pressed Oil on rough limestone pedestal with palm leaves against deep forest green background"
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Feature Points with Icons matching reference */}
          <div className="lg:col-span-6 space-y-8">
            {points.map((pt) => (
              <div key={pt.title} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#D4B276] border border-white/10">
                  <pt.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#D0DED4] leading-relaxed mt-1">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-[#1D3528] font-bold hover:bg-[#F2ECE1] shadow-lg px-8 py-6 text-sm hover:scale-105 transition-transform"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Order on WhatsApp</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 text-white font-semibold hover:bg-white/10 px-6 py-6 text-sm"
              >
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>
                  <span>Call Store: {SITE.phone}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
