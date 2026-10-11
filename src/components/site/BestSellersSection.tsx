"use client";

import Link from "next/link";
import { MessageCircle, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/products";
import { formatINR, whatsappOrderLink } from "@/lib/site-config";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export function BestSellersSection() {
  const { add } = useCart();

  // 4 iconic bestsellers across distinct categories matching reference layout
  const BESTSELLER_SLUGS = [
    "groundnut-oil",
    "bilona-cow-ghee",
    "pure-raw-honey",
    "herbal-lipbalm",
  ];
  const bestsellers = BESTSELLER_SLUGS
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter(Boolean) as (typeof PRODUCTS)[number][];

  const handleAdd = (slug: string, variantId: string, name: string) => {
    add(slug, variantId, 1);
    toast.success(`Added ${name} to cart`);
  };

  return (
    <section className="bg-[#FAF7F2] py-20 border-b border-[#E8E2D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header with View All */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1D3528]/70">
              Fresh Daily Farm Press
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3528] mt-1 tracking-tight">
              Our Best Sellers
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-xs font-bold uppercase tracking-wider text-[#1D3528] hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* 4 Product Cards with Circular/Arched Sage Auras matching reference */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((prod) => {
            const variant = prod.variants[0];
            return (
              <div
                key={prod.slug}
                className="group flex flex-col items-center text-center rounded-3xl p-4 bg-white/60 border border-[#E8E2D5] hover:bg-white transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
              >
                {/* Product Image inside Soft Sage Green Aura Backdrop */}
                <Link
                  href={`/shop/${prod.slug}`}
                  className="relative w-full aspect-square flex items-center justify-center rounded-2xl overflow-hidden mb-4"
                >
                  {/* The Circular / Arched Sage Aura */}
                  <div className="absolute inset-2 rounded-full bg-[#DEE7D7] transition-transform duration-500 group-hover:scale-105" />

                  <img
                    src={prod.image}
                    alt={prod.name}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="relative z-10 max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                </Link>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-[#C87D32] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#C87D32]" />
                  ))}
                  <span className="text-[11px] font-bold text-muted-foreground ml-1">(4.9)</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-[#1D3528] line-clamp-1">
                  <Link href={`/shop/${prod.slug}`} className="hover:underline">
                    {prod.name}
                  </Link>
                </h3>

                {/* Price */}
                <div className="text-sm font-extrabold text-foreground mt-1 mb-4">
                  {formatINR(variant.price)}
                  <span className="text-xs font-normal text-muted-foreground ml-1">/ {variant.label}</span>
                </div>

                {/* Forest Green Pill Button */}
                <div className="mt-auto w-full grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-[#1D3528] text-white text-xs font-bold hover:bg-[#274737]"
                  >
                    <a
                      href={whatsappOrderLink(`${prod.name} (${variant.label})`, variant.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Order
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-[#1D3528]/30 text-[#1D3528] text-xs font-semibold hover:bg-[#1D3528] hover:text-white"
                    onClick={() => handleAdd(prod.slug, variant.id, prod.name)}
                  >
                    <ShoppingBag className="h-3 w-3 mr-1" />
                    + Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
