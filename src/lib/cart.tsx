import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import type { CartLine } from "./pricing";
import { getProduct } from "./products";

const KEY = "sasyadhara-cart-v1";

type Ctx = {
  lines: CartLine[];
  count: number;
  bump: number;
  add: (slug: string, variantId: string, qty: number) => void;
  setQty: (slug: string, variantId: string, qty: number) => void;
  remove: (slug: string, variantId: string) => void;
  clear: () => void;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, loaded]);

  const add: Ctx["add"] = (slug, variantId, qty) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.slug === slug && l.variantId === variantId);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: Math.min(99, next[i].qty + qty) };
        return next;
      }
      return [...prev, { slug, variantId, qty }];
    });
    setBump((b) => b + 1);
    const p = getProduct(slug);
    toast.success(`${p?.name ?? "Item"} added to cart`);
  };
  const setQty: Ctx["setQty"] = (slug, variantId, qty) =>
    setLines((prev) =>
      prev.map((l) =>
        l.slug === slug && l.variantId === variantId ? { ...l, qty: Math.max(1, Math.min(99, qty)) } : l,
      ),
    );
  const remove: Ctx["remove"] = (slug, variantId) =>
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.variantId === variantId)));
  const clear = () => setLines([]);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  return (
    <CartContext.Provider value={{ lines, count, bump, add, setQty, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
