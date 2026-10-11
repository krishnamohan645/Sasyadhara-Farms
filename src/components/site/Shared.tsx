"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Minus, Plus, MessageCircle, Info } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { formatINR, whatsappLink } from "@/lib/site-config";

export function QtyStepper({
  value,
  onChange,
  label = "Quantity",
}: {
  value: number;
  onChange: (n: number) => void;
  label?: string;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-input bg-card"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center font-semibold" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(99, value + 1))}
        className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export function DemoBadge() {
  return (
    <span className="rounded-full bg-gold/25 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">
      Demo
    </span>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-4 text-sm text-foreground/85">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      <div>{children}</div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const v = product.variants.find((x) => x.id === variantId)!;
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.demo && <DemoBadge />}
          <span className="rounded-full bg-card/90 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl text-primary">
            <Link href={`/shop/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.short}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xl font-bold text-foreground">{formatINR(v.price)}</span>
          <span
            className={
              product.inStock
                ? "text-xs font-semibold text-primary"
                : "text-xs font-semibold text-destructive"
            }
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <label className="text-xs font-semibold text-muted-foreground">
          Pack size
          <select
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
            className="mt-1 block w-full rounded-full border border-input bg-background px-4 py-2 text-sm text-foreground"
          >
            {product.variants.map((x) => (
              <option key={x.id} value={x.id}>
                {x.label} — {formatINR(x.price)}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <QtyStepper value={qty} onChange={setQty} />
          <Button
            className="flex-1"
            disabled={!product.inStock}
            onClick={() => add(product.slug, variantId, qty)}
          >
            Add to Cart
          </Button>
        </div>
        <Link
          href={`/shop/${product.slug}`}
          className="text-sm font-semibold text-accent hover:underline"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}

export function WhatsAppFab() {
  const pathname = usePathname() || "";
  const raised =
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/cart") ||
    pathname.startsWith("/shop");
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition hover:scale-110 ${
        raised ? "bottom-24" : "bottom-5"
      }`}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="seed-texture border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-3 text-4xl text-primary sm:text-5xl">{title}</h1>
        {children && <div className="animate-rise mt-4 text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
