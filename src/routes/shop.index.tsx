import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { z } from "zod";
import { PageHero, ProductCard, Notice } from "@/components/site/Shared";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  sort: z.enum(["featured", "low", "high"]).optional(),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop — Sasyadhara Farms" },
      { name: "description", content: "Browse wood pressed oils, jaggery, millets, pulses and snacks from Sasyadhara Farms." },
      { property: "og:title", content: "Shop — Sasyadhara Farms" },
      { property: "og:description", content: "Wood pressed oils, jaggery, millets, pulses and snacks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { q = "", category = "", sort = "featured" } = Route.useSearch();
  const navigate = useNavigate({ from: "/shop/" });
  const set = (patch: Record<string, string | undefined>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  const minPrice = (p: (typeof PRODUCTS)[number]) => Math.min(...p.variants.map((v) => v.price));
  let list = PRODUCTS.filter(
    (p) =>
      (!category || p.category === category) &&
      (!q || (p.name + " " + p.short + " " + p.category).toLowerCase().includes(q.toLowerCase())),
  );
  if (sort === "low") list = [...list].sort((a, b) => minPrice(a) - minPrice(b));
  if (sort === "high") list = [...list].sort((a, b) => minPrice(b) - minPrice(a));

  return (
    <>
      <PageHero eyebrow="The farm store" title="Shop our products" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => set({ q: e.target.value || undefined })} placeholder="Search products…" className="w-full rounded-full border border-input bg-background py-2.5 pl-10 pr-4" />
          </label>
          <label className="text-sm font-semibold">
            <span className="sr-only">Sort by price</span>
            <select value={sort} onChange={(e) => set({ sort: e.target.value })} className="w-full rounded-full border border-input bg-background px-4 py-2.5 md:w-auto">
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["", ...CATEGORIES].map((c) => (
            <button key={c || "all"} onClick={() => set({ category: c || undefined })} aria-pressed={category === c}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground">
              {c || "All"}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-primary">No products match your search.</p>
            <button className="mt-4 font-semibold text-accent underline" onClick={() => navigate({ search: {} })}>Clear filters</button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
        <div className="mt-10">
          <Notice>
            All products and rates are verified against the Sasyadhara Farms official farm price list. Direct dispatch from our KR Puram, Bangalore store.
          </Notice>
        </div>
      </div>
    </>
  );
}
