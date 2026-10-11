import { DELIVERY } from "./site-config";
import { PRODUCTS } from "./products";

export type CartLine = { slug: string; variantId: string; qty: number };

export function priceLine(line: CartLine) {
  const p = PRODUCTS.find((x) => x.slug === line.slug);
  const v = p?.variants.find((x) => x.id === line.variantId);
  if (!p || !v) return null;
  return { product: p, variant: v, qty: line.qty, total: v.price * line.qty };
}

export function computeTotals(lines: CartLine[], cfg = DELIVERY) {
  const subtotal = lines.reduce((s, l) => s + (priceLine(l)?.total ?? 0), 0);
  const delivery = subtotal === 0 || subtotal >= cfg.freeAbove ? 0 : cfg.flatFee;
  return { subtotal, delivery, total: subtotal + delivery };
}
