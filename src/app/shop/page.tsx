"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { PageHero, ProductCard, Notice } from "@/components/site/Shared";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlQ = searchParams.get("q") || "";
  const urlCategory = searchParams.get("category") || "";
  const urlSort = (searchParams.get("sort") as "featured" | "low" | "high") || "featured";

  const [q, setQ] = useState(urlQ);
  const [category, setCategory] = useState(urlCategory);
  const [sort, setSort] = useState(urlSort);

  const updateFilters = (newQ: string, newCat: string, newSort: string) => {
    const params = new URLSearchParams();
    if (newQ) params.set("q", newQ);
    if (newCat) params.set("category", newCat);
    if (newSort && newSort !== "featured") params.set("sort", newSort);
    const qs = params.toString();
    router.replace(`/shop${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  const handleSearchChange = (val: string) => {
    setQ(val);
    updateFilters(val, category, sort);
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    updateFilters(q, cat, sort);
  };

  const handleSortChange = (s: "featured" | "low" | "high") => {
    setSort(s);
    updateFilters(q, category, s);
  };

  const handleClear = () => {
    setQ("");
    setCategory("");
    setSort("featured");
    router.replace("/shop", { scroll: false });
  };

  const minPrice = (p: (typeof PRODUCTS)[number]) => Math.min(...p.variants.map((v) => v.price));

  const list = useMemo(() => {
    let result = PRODUCTS.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q || (p.name + " " + p.short + " " + p.category).toLowerCase().includes(q.toLowerCase())),
    );
    if (sort === "low") result = [...result].sort((a, b) => minPrice(a) - minPrice(b));
    if (sort === "high") result = [...result].sort((a, b) => minPrice(b) - minPrice(a));
    return result;
  }, [category, q, sort]);

  return (
    <>
      <PageHero eyebrow="The farm store" title="Shop our products" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft md:flex-row md:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-full border border-input bg-background py-2.5 pl-10 pr-4"
            />
          </label>
          <label className="text-sm font-semibold">
            <span className="sr-only">Sort by price</span>
            <select
              value={sort}
              onChange={(e) => handleSortChange(e.target.value as "featured" | "low" | "high")}
              className="w-full rounded-full border border-input bg-background px-4 py-2.5 md:w-auto"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["", ...CATEGORIES].map((c) => (
            <button
              key={c || "all"}
              onClick={() => handleCategoryChange(c)}
              aria-pressed={category === c}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              {c || "All"}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-2xl text-primary">No products match your search.</p>
            <button className="mt-4 font-semibold text-accent underline" onClick={handleClear}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
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

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading shop catalogue…</div>}>
      <ShopContent />
    </Suspense>
  );
}
