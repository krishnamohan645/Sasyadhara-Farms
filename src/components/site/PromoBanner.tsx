import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site-config";
import handsJar from "@/assets/lifestyle-hands-jar.jpg";

export function PromoBanner() {
  return (
    <section className="bg-[#FAF7F2] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-[#E5DFD3] bg-[#F1ECE1] md:grid-cols-12 items-center shadow-soft">
          {/* Left Visual */}
          <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden">
            <img
              src={handsJar}
              alt="Hands holding artisanal pure honey jar"
              width={600}
              height={500}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Text & CTA */}
          <div className="md:col-span-7 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
              Welcome Farm Benefit
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#1D3528] tracking-tight">
              Special Welcome Offer on Your First Order
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience the difference of zero-chemical wood pressed oils and Vedic Bilona ghee. Free delivery within 5 km on min. 2L orders!
            </p>
            <div className="pt-2">
              <Button
                asChild
                className="rounded-full bg-[#1D3528] text-white px-8 py-6 text-sm font-bold hover:bg-[#274737] shadow-sm hover:scale-105 transition-all"
              >
                <a
                  href={whatsappLink("Hello Sasyadhara Farms, I would like to order with the welcome offer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Claim via WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
