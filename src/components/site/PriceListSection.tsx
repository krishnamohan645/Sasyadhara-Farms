import { useState, useMemo } from "react";
import { MessageCircle, Phone, Search, Truck, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFICIAL_PRICE_LIST, type Category, type PriceItem } from "@/lib/products";
import { SITE, formatINR, whatsappOrderLink, whatsappLink } from "@/lib/site-config";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export function PriceListSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const { add } = useCart();

  const allItems = useMemo(() => {
    return OFFICIAL_PRICE_LIST.flatMap((cat) => cat.items);
  }, []);

  const categories = useMemo(() => {
    return OFFICIAL_PRICE_LIST.map((cat) => cat.category);
  }, []);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchQ =
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        (item.teluguName && item.teluguName.toLowerCase().includes(query.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [allItems, activeCategory, query]);

  const handleQuickAdd = (item: PriceItem) => {
    const slugMap: Record<string, { slug: string; variantId: string }> = {
      "oil-mustard": { slug: "mustard-oil", variantId: "1l" },
      "oil-groundnut": { slug: "groundnut-oil", variantId: "1l" },
      "oil-sunflower": { slug: "sunflower-oil", variantId: "1l" },
      "oil-white-sesame": { slug: "white-sesame-oil", variantId: "1l" },
      "oil-black-sesame": { slug: "black-sesame-oil", variantId: "1l" },
      "oil-coconut": { slug: "coconut-oil", variantId: "1l" },
      "oil-safflower": { slug: "safflower-kusuma-oil", variantId: "1l" },
      "oil-niger": { slug: "niger-verri-nuvvulu-oil", variantId: "1l" },
      "ghee-cow-500": { slug: "bilona-cow-ghee", variantId: "500ml" },
      "ghee-cow-250": { slug: "bilona-cow-ghee", variantId: "250ml" },
      "ghee-buf-500": { slug: "bilona-buffalo-ghee", variantId: "500ml" },
      "ghee-buf-250": { slug: "bilona-buffalo-ghee", variantId: "250ml" },
      "jaggery-cubes": { slug: "jaggery-cubes", variantId: "1kg" },
      "jaggery-powder": { slug: "jaggery-powder", variantId: "1kg" },
      "honey-250": { slug: "pure-raw-honey", variantId: "250g" },
      "honey-500": { slug: "pure-raw-honey", variantId: "500g" },
      "powder-moringa": { slug: "moringa-powder", variantId: "100g" },
      "powder-abc": { slug: "abc-powder", variantId: "100g" },
      "balm-beetroot": { slug: "herbal-lipbalm", variantId: "beetroot" },
      "balm-rose": { slug: "herbal-lipbalm", variantId: "rose" },
    };

    const target = slugMap[item.id];
    if (target) {
      add(target.slug, target.variantId, 1);
      toast.success(`Added ${item.name} (${item.size}) to cart`);
    } else {
      window.open(whatsappOrderLink(`${item.name} (${item.size})`, item.price), "_blank");
    }
  };

  return (
    <section id="price-list" className="scroll-mt-20 py-16 sm:py-24 bg-cream/40 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Minimal Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Official Farm Rate Card
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2">
            Price List
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">
            Premium Wood Pressed Oils • Pure Desi Ghee (Bilona) • Organic Jaggery & Raw Honey
          </p>

          {/* Minimal Hotline Links */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp/15 px-3.5 py-1.5 font-bold text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: {SITE.phone}</span>
            </a>
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-semibold text-primary hover:border-accent transition"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              <span>Call: {SITE.phone}</span>
            </a>
            <a
              href={`tel:${SITE.secondaryPhone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 font-semibold text-primary hover:border-accent transition"
            >
              <span>{SITE.secondaryPhone}</span>
            </a>
          </div>
        </div>

        {/* Minimal Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-background border border-border text-foreground hover:bg-secondary"
            }`}
          >
            All Products ({allItems.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-background border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimal Price List Table / Items */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="divide-y divide-border/60">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:px-6 hover:bg-secondary/30 transition-colors"
              >
                {/* Left: Product Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-base sm:text-lg font-bold text-primary">
                      {item.name}
                    </h3>
                    {item.isNew && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent">
                        NEW
                      </span>
                    )}
                    {item.isBestseller && (
                      <span className="rounded-full bg-gold/25 px-2 py-0.5 text-[10px] font-bold text-gold-foreground">
                        BESTSELLER
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                    <span>Pack: <strong className="text-foreground">{item.size}</strong></span>
                    {item.teluguName && (
                      <span>• <span className="italic">{item.teluguName}</span></span>
                    )}
                  </div>
                </div>

                {/* Right: Price & Order Action */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-border/40">
                  <div className="text-left sm:text-right">
                    <span className="font-display text-xl font-bold text-foreground">
                      {formatINR(item.price)}
                    </span>
                    <span className="text-[11px] text-muted-foreground block">
                      per {item.size.split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="whatsapp"
                      className="text-xs font-semibold h-9 px-3"
                    >
                      <a
                        href={whatsappOrderLink(`${item.name} (${item.size})`, item.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-3.5 w-3.5 mr-1" />
                        Order
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs font-medium h-9 px-3 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleQuickAdd(item)}
                    >
                      + Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Shipping Charges Note */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-bold text-primary text-sm mb-2">
            <Truck className="h-4 w-4 text-accent" />
            <span>Delivery Policy (KR Puram Store, Bangalore):</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="flex items-start gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Within 5 KM:</strong> Min. 2L order = FREE Delivery</span>
            </div>
            <div className="flex items-start gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Bangalore City:</strong> Min. 2L = 50% shipping borne by us</span>
            </div>
            <div className="flex items-start gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Outside Bangalore:</strong> Safe courier dispatch across India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
