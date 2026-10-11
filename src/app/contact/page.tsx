"use client";

import { MessageCircle, MapPin, Phone, Clock, Truck, Sparkles, ExternalLink } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SITE, whatsappLink } from "@/lib/site-config";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("Place New Order");
  const [form, setForm] = useState({ name: "", phone: "", items: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please provide your name and phone number.");
      return;
    }
    setError("");
    const message = `*Inquiry: ${inquiryType}*\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nDetails / Items: ${form.items.trim() || "Interested in Sasyadhara Farm products"}`;
    if (typeof globalThis !== "undefined") {
      globalThis.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    }
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: "Store Address",
      subtitle: "KR Puram, Bangalore",
      desc: SITE.address,
      cta: "Open in Google Maps",
      href: "https://maps.google.com/?q=Kurudusonnenahalli+Main+Rd+KR+Puram+Bangalore",
    },
    {
      icon: Phone,
      title: "Direct Hotlines",
      subtitle: "Call store anytime",
      desc: `${SITE.phone} · ${SITE.secondaryPhone}`,
      cta: "Call Primary Number",
      href: `tel:${SITE.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Ordering",
      subtitle: "Instant confirmation",
      desc: "Order directly by message or voice note. Quick response.",
      cta: "Chat on WhatsApp",
      href: whatsappLink(),
    },
    {
      icon: Clock,
      title: "Store Timings",
      subtitle: "Open All 7 Days",
      desc: SITE.openingHours,
      cta: "Visit us today",
    },
  ];

  const deliveryRules = [
    {
      title: "Within 5 KM of Store",
      detail:
        "Free doorstep delivery on minimum order of 2 Litres (KR Puram, Seegehalli, Kodigehalli, Kurudusonnenahalli).",
      badge: "FREE DELIVERY",
    },
    {
      title: "Across Greater Bangalore",
      detail:
        "50% of shipping charges absorbed by Sasyadhara Farms on min. 2 Litres order (Whitefield, Indiranagar, HSR, Koramangala, etc.).",
      badge: "50% SUBSIDIZED",
    },
    {
      title: "Pan-India Courier",
      detail: "Safely packaged in eco-friendly protective cartons and dispatched across India.",
      badge: "PAN-INDIA",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-foreground">
      {/* 1. Header Banner */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 178, 118, 0.35) 0%, rgba(209, 224, 203, 0.25) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 text-center space-y-4">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>DIRECT ORDERING & VISITING US</span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#1D3528] tracking-tight leading-[1.08]">
              We Are Here for Your Family
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions about traditional cold pressing? Want fresh golden cow ghee delivered to your Bangalore doorstep? Call, message, or visit our KR Puram farm store.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="py-16 sm:py-20 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((m) => (
              <div
                key={m.title}
                className="group rounded-3xl bg-white/70 border border-[#E8E2D5] p-6 hover:bg-white hover:shadow-soft transition-all space-y-4 flex flex-col justify-between"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1D3528]/10 text-[#1D3528] group-hover:bg-[#1D3528] group-hover:text-white transition-colors">
                    <m.icon className="h-6 w-6" />
                  </span>
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1D3528]/60">
                      {m.subtitle}
                    </p>
                    <h3 className="font-display text-lg font-bold text-[#1D3528] mt-0.5">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                    {m.desc}
                  </p>
                </div>

                {m.href && (
                  <div className="pt-2">
                    <a
                      href={m.href}
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3528] hover:text-gold transition-colors"
                    >
                      <span>{m.cta}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Order Builder + Bangalore Delivery Terms */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Instant WhatsApp Order Builder */}
            <div className="lg:col-span-7 bg-white/80 rounded-[2.5rem] border border-[#E5DFD3] p-8 sm:p-12 shadow-soft">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
                INSTANT WHATSAPP INQUIRY
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1D3528] mt-1 tracking-tight">
                Send an Order or Question
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Fill out the quick fields below and click send. We will immediately open your WhatsApp with a formatted message ready for our team.
              </p>

              {/* Inquiry Type Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Place New Order",
                  "Price & Stock Question",
                  "Store Directions",
                  "Bulk & Corporate Order",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      inquiryType === type
                        ? "bg-[#1D3528] text-white shadow-xs"
                        : "bg-[#F0ECE1] text-[#1D3528] hover:bg-[#E5DFD0]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1D3528]/80 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-2xl border border-[#E5DFD3] bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#1D3528] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1D3528]/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 98661 25836"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl border border-[#E5DFD3] bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#1D3528] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1D3528]/80 mb-1">
                    Products or Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. I would like to order 2 Litres of Groundnut Oil and 500g of Vedic Bilona Cow Ghee to Indiranagar, Bangalore."
                    value={form.items}
                    onChange={(e) => setForm({ ...form, items: e.target.value })}
                    className="w-full rounded-2xl border border-[#E5DFD3] bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#1D3528] focus:outline-none"
                  />
                </div>

                {error && <p className="text-xs font-bold text-red-600">{error}</p>}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-[#1D3528] text-white py-6 text-sm font-bold hover:bg-[#274737] shadow-sm hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span>Send via WhatsApp</span>
                </Button>
              </form>
            </div>

            {/* Right Column: Bangalore Delivery Terms & Map Link */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-[2.5rem] bg-[#1D3528] text-white p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4B276] flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-[#D4B276]" />
                  <span>BANGALORE SHIPPING TERMS</span>
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  Doorstep Delivery Policy
                </h3>

                <div className="space-y-4">
                  {deliveryRules.map((rule) => (
                    <div
                      key={rule.title}
                      className="rounded-2xl bg-white/10 p-4 border border-white/10 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-white text-sm">
                          {rule.title}
                        </span>
                        <span className="rounded-full bg-[#D4B276]/20 border border-[#D4B276]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#D4B276]">
                          {rule.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#D0DED4] leading-relaxed">{rule.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-[#A5BAAC] border-t border-white/10">
                  ✦ Orders packaged in eco-safe cartons with anti-leak protection.
                </div>
              </div>

              {/* Direct Hotlines Box */}
              <div className="rounded-3xl bg-white/80 border border-[#E8E2D5] p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Direct Phone Support
                  </p>
                  <p className="font-display font-bold text-lg text-[#1D3528] mt-0.5">
                    {SITE.phone} / {SITE.secondaryPhone}
                  </p>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-[#1D3528] text-white text-xs font-bold hover:bg-[#274737]"
                >
                  <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>Call Store</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
