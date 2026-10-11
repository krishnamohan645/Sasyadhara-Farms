import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) {
    return { title: "Product Not Found — Sasyadhara Farms" };
  }
  return {
    title: `${p.name} — Sasyadhara Farms`,
    description: p.short ?? "Fresh wood-pressed oils and organic farm products.",
    openGraph: {
      title: `${p.name} — Sasyadhara Farms`,
      description: p.short ?? "Fresh wood-pressed oils and organic farm products.",
      images: [p.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== slug)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 3);

  return <ProductDetailClient product={product} related={related} />;
}
