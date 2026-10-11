"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site-config";
import { Logo } from "./Logo";
import { NAV_LEFT, NAV_RIGHT } from "./Header";

export function Footer() {
  const scrollToTop = () => {
    if (typeof globalThis !== "undefined" && "scrollTo" in globalThis) {
      globalThis.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1D3528] text-[#E5EFE7] border-t border-[#16291F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Explore / Shop */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase text-gold">
              Explore Range
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#D0DED4]">
              {NAV_LEFT.map((n) => (
                <li key={n.href}>
                  {n.href.includes("#") ? (
                    <a href={n.href} className="hover:text-white transition-colors">
                      {n.label}
                    </a>
                  ) : (
                    <Link href={n.href} className="hover:text-white transition-colors">
                      {n.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/shop?category=Wood+Pressed+Oils" className="hover:text-white transition-colors">
                  Wood Pressed Oils
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Pure+Desi+Ghee+(Bilona)" className="hover:text-white transition-colors">
                  Vedic Bilona Ghee
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Organic+Jaggery+%26+Honey" className="hover:text-white transition-colors">
                  Raw Wild Honey & Jaggery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Roots & Values */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase text-gold">
              About Sasyadhara
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#D0DED4]">
              {NAV_RIGHT.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-[#A5BAAC] block leading-relaxed mt-2 text-xs">
                  Sasyadhara Farms honors traditional Indian food preparation. Wood pressed cold oils and Vedic bilona desi ghee made with patience.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Store & Policies */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase text-gold">
              Delivery & Policies
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#D0DED4]">
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors font-medium">
                  Shipping Terms (Free &lt; 5km)
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns & Refunds Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hotlines */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest uppercase text-gold">
              Order Hotlines & Store
            </h3>
            <ul className="mt-4 space-y-3 text-xs sm:text-sm text-[#D0DED4]">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col">
                  <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white font-bold">
                    {SITE.phone}
                  </a>
                  <a href={`tel:${SITE.secondaryPhone.replace(/[^0-9+]/g, "")}`} className="hover:text-white font-bold">
                    {SITE.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                <span>{SITE.openingHours}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Centered Circular Seal & Bottom Bar matching Reference */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col items-center text-center space-y-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex flex-col items-center focus:outline-none"
            aria-label="Back to top"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white/10 border border-white/15 text-gold group-hover:scale-110 transition-transform">
              <Logo className="h-9 w-9 text-gold" />
            </div>
          </button>

          <p className="font-display text-sm tracking-widest uppercase text-white font-bold">
            Sasyadhara Farms
          </p>

          <p className="text-xs text-[#A5BAAC]">
            © {new Date().getFullYear()} Sasyadhara Farms, Bangalore. Purity Rooted in Tradition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
