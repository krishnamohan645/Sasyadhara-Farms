import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBadge, Notice, ProductCard, QtyStepper } from "@/components/site/Shared";
import { useCart } from "@/lib/cart";
import { getProduct, PRODUCTS } from "@/lib/products";
import { formatINR, whatsappLink } from "@/lib/site-config";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProduct(loaderData.slug) : undefined;
    const title = p ? `${p.name} — Sasyadhara Farms` : "Product — Sasyadhara Farms";
    return {
      meta: [
        { title },
        { name: "description", content: p?.short ?? "Product details" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.short ?? "Product details" },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <h1 className="text-3xl text-primary">Product not found</h1>
      <Link to="/shop" className="mt-4 inline-block font-semibold text-accent underline">Back to shop</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug)!;
  const { add } = useCart();
  const navigate = useNavigate();
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const v = product.variants.find((x) => x.id === variantId)!;
  const related = PRODUCTS.filter((p) => p.slug !== slug).sort((a) => (a.category === product.category ? -1 : 1)).slice(0, 3);
  const waText = `Hello Sasyadhara Farms, I would like to enquire about ${product.name} (${v.label}).`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/shop" className="hover:text-primary">Shop</Link> / <span>{product.name}</span>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="animate-rise overflow-hidden rounded-[2.5rem] bg-muted shadow-lift">
          <img src={product.image} alt={product.name} width={1024} height={1024} className="h-full max-h-[640px] w-full object-cover" />
        </div>
        <div className="animate-rise [animation-delay:120ms]">
          <div className="flex items-center gap-2">
            <span className="eyebrow">{product.category}</span>
            {product.demo && <DemoBadge />}
          </div>
          <h1 className="mt-2 text-4xl text-primary sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-3xl font-bold">{formatINR(v.price)}</span>
            <span className={product.inStock ? "font-semibold text-primary" : "font-semibold text-destructive"}>
              {product.inStock ? "In stock" : "Out of stock"}
            </span>
          </div>
          <fieldset className="mt-6">
            <legend className="text-sm font-semibold">Pack size</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((x) => (
                <button key={x.id} type="button" aria-pressed={x.id === variantId} onClick={() => setVariantId(x.id)}
                  className="rounded-full border-2 border-border px-5 py-2 text-sm font-semibold transition aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground">
                  {x.label}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <QtyStepper value={qty} onChange={setQty} />
            <Button size="lg" disabled={!product.inStock} onClick={() => add(slug, variantId, qty)}>Add to Cart</Button>
            <Button size="lg" variant="hero" disabled={!product.inStock} onClick={() => { add(slug, variantId, qty); navigate({ to: "/checkout" }); }}>Buy Now</Button>
          </div>
          <Button asChild variant="whatsapp" className="mt-4">
            <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Enquire on WhatsApp</a>
          </Button>
          {product.info && (
            <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
              {product.info.map((i) => (
                <div key={i.label} className="grid grid-cols-3 gap-4 p-4 text-sm">
                  <dt className="font-semibold">{i.label}</dt>
                  <dd className="col-span-2 text-muted-foreground">{i.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-6">
            <Notice>
              Official price from Sasyadhara Farms rate card. Free delivery within 5 km of KR Puram on min. 2L order.
            </Notice>
          </div>
        </div>
      </div>
      <section className="mt-20">
        <h2 className="text-3xl text-primary">You may also like</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </div>
  );
}
