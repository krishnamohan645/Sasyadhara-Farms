"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PRODUCTS } from "@/lib/products";
import { formatINR, whatsappOrderLink } from "@/lib/site-config";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export function FeaturedCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { add } = useCart();

  const featured = PRODUCTS.slice(0, 8);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleAdd = (slug: string, variantId: string, name: string) => {
    add(slug, variantId, 1);
    toast.success(`Added ${name} to cart`);
  };

  return (
    <section className="py-16 sm:py-20 bg-background border-b border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Minimal Section Header with Nav Controls */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Fresh from our farm store
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mt-1">
              Featured Products
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous slide"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next slide"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {featured.map((p) => {
              const defaultVariant = p.variants[0];
              return (
                <CarouselItem key={p.slug} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group flex flex-col h-full rounded-3xl border border-border/70 bg-card p-4 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                    {/* Image */}
                    <Link
                      href={`/shop/${p.slug}`}
                      className="relative block aspect-square overflow-hidden rounded-2xl bg-secondary/50"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        width={600}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {p.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-bold text-primary shadow-xs">
                          {p.badge}
                        </span>
                      )}
                    </Link>

                    {/* Details */}
                    <div className="mt-4 flex flex-1 flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {p.category}
                        </span>
                        <h3 className="font-display text-lg font-bold text-primary mt-0.5 leading-snug line-clamp-1">
                          <Link href={`/shop/${p.slug}`} className="hover:underline">
                            {p.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                          {p.short}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border/60">
                        <div className="flex items-baseline justify-between mb-3">
                          <span className="font-display text-xl font-bold text-foreground">
                            {formatINR(defaultVariant.price)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {defaultVariant.label}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            asChild
                            size="sm"
                            variant="whatsapp"
                            className="text-xs font-semibold"
                          >
                            <a
                              href={whatsappOrderLink(`${p.name} (${defaultVariant.label})`, defaultVariant.price)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageCircle className="h-3.5 w-3.5 mr-1" />
                              WhatsApp
                            </a>
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs font-semibold hover:bg-primary hover:text-primary-foreground"
                            onClick={() => handleAdd(p.slug, defaultVariant.id, p.name)}
                          >
                            <ShoppingBag className="h-3.5 w-3.5 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
