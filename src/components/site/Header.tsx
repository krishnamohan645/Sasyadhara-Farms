"use client";

import Link from "next/link";
import { Menu, ShoppingBag, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { SITE, whatsappLink } from "@/lib/site-config";
import { Logo } from "./Logo";

export const NAV_LEFT = [
  { href: "/shop", label: "Shop" },
  { href: "/#price-list", label: "Price List" },
] as const;

export const NAV_RIGHT = [
  { href: "/story", label: "Our Story" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

function CartButton() {
  const { count, bump } = useCart();
  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} items`}
      className="relative grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-black/5 transition"
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span
          key={bump}
          className="animate-pop absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#1D3528] px-1 text-[10px] font-bold text-white"
        >
          {count}
        </span>
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D5]">
      {/* Top Thin Announcement Banner */}
      <div className="bg-[#1D3528] text-[#E5EFE7] text-[11px] sm:text-xs py-1.5 px-4 font-medium tracking-wider text-center uppercase">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 sm:gap-4">
          <span>FREE DELIVERY WITHIN 5 KM (MIN. 2L)</span>
          <span className="opacity-40">•</span>
          <span className="hidden sm:inline">KR PURAM, BANGALORE</span>
          <span className="hidden sm:inline opacity-40">•</span>
          <a
            href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
            className="hover:underline font-bold text-[#E5EFE7]"
          >
            CALL: {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main Luxury Nav: Left Links - Center Emblem - Right Actions */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Left Nav (Desktop) */}
        <nav aria-label="Main Left" className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide text-foreground/80">
          {NAV_LEFT.map((n) => {
            if (n.href.includes("#")) {
              return (
                <a key={n.href} href={n.href} className="hover:text-[#1D3528] transition-colors">
                  {n.label}
                </a>
              );
            }
            return (
              <Link key={n.href} href={n.href} className="hover:text-[#1D3528] transition-colors">
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Center Circular Brand Emblem */}
        <Link href="/" className="flex flex-col items-center group">
          <Logo className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-sm font-bold text-[#1D3528] tracking-widest uppercase mt-0.5">
            Sasyadhara
          </span>
        </Link>

        {/* Right Nav (Desktop) */}
        <nav aria-label="Main Right" className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide text-foreground/80">
          {NAV_RIGHT.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-[#1D3528] transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right Utility Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1D3528] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#284938] transition shadow-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          <CartButton />

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full text-[#1D3528] hover:bg-black/5 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-[#FAF7F2] p-6 flex flex-col justify-between">
              <div>
                <SheetTitle className="flex items-center gap-3 font-display text-[#1D3528] text-xl">
                  <Logo className="h-10 w-10" /> Sasyadhara Farms
                </SheetTitle>
                <p className="text-xs text-muted-foreground mt-1">KR Puram, Bangalore</p>

                <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
                  {[...NAV_LEFT, ...NAV_RIGHT].map((n) => {
                    if (n.href.includes("#")) {
                      return (
                        <a
                          key={n.href}
                          href={n.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-4 py-3 font-display text-lg text-foreground hover:bg-black/5"
                        >
                          {n.label}
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={n.href}
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-4 py-3 font-display text-lg text-foreground hover:bg-black/5"
                      >
                        {n.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-border space-y-2">
                <p className="text-xs text-muted-foreground">Call or WhatsApp orders:</p>
                <div className="text-sm font-bold text-[#1D3528]">{SITE.phone}</div>
                <div className="text-sm font-bold text-[#1D3528]">{SITE.secondaryPhone}</div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
