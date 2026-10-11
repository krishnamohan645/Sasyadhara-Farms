"use client";

import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QtyStepper } from "@/components/site/Shared";
import { useCart } from "@/lib/cart";
import { priceLine } from "@/lib/pricing";
import { formatINR } from "@/lib/site-config";
import { Summary } from "@/components/site/Summary";

export default function CartPage() {
  const { lines, setQty, remove } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-28 text-center">
        <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-secondary text-primary">
          <ShoppingBag className="h-10 w-10" />
        </span>
        <h1 className="mt-6 text-3xl text-primary">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Fill it with something good from our shelves.</p>
        <Button asChild variant="hero" size="lg" className="mt-8">
          <Link href="/shop">Start shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl text-primary">Your cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <ul className="space-y-4">
          {lines.map((l) => {
            const p = priceLine(l);
            if (!p) return null;
            return (
              <li
                key={l.slug + l.variantId}
                className="flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft"
              >
                <img
                  src={p.product.image}
                  alt={p.product.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/shop/${l.slug}`}
                    className="font-display text-lg text-primary hover:underline"
                  >
                    {p.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {p.variant.label} · {formatINR(p.variant.price)}
                  </p>
                </div>
                <QtyStepper value={l.qty} onChange={(n) => setQty(l.slug, l.variantId, n)} />
                <span className="w-20 text-right font-bold">{formatINR(p.total)}</span>
                <button
                  onClick={() => remove(l.slug, l.variantId)}
                  aria-label={`Remove ${p.product.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
        <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-28">
          <h2 className="text-xl text-primary">Order summary</h2>
          <div className="mt-4">
            <Summary lines={lines} />
          </div>
          <Button asChild size="lg" variant="hero" className="mt-6 w-full">
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
          <Button asChild variant="ghost" className="mt-2 w-full">
            <Link href="/shop">Continue shopping</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
