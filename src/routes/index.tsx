import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/site/HeroSection";
import { MarqueeRibbon } from "@/components/site/MarqueeRibbon";
import { LifestyleRituals } from "@/components/site/LifestyleRituals";
import { BestSellersSection } from "@/components/site/BestSellersSection";
import { EditorialSplitSection } from "@/components/site/EditorialSplitSection";
import { DeepGreenFeatureSection } from "@/components/site/DeepGreenFeatureSection";
import { PriceListSection } from "@/components/site/PriceListSection";
import { CommunityReviews } from "@/components/site/CommunityReviews";
import { PromoBanner } from "@/components/site/PromoBanner";
import { BlogSection } from "@/components/site/BlogSection";
import { SocialStrip } from "@/components/site/SocialStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sasyadhara Farms — Wood Pressed Oils, Vedic Bilona Ghee & Organic Foods, Bangalore" },
      {
        name: "description",
        content:
          "Buy authentic cold wood pressed oils, Vedic bilona desi cow ghee, raw wild honey, and chemical-free jaggery from Sasyadhara Farms, KR Puram, Bangalore. Order on WhatsApp: 9866125836 / 8618717644.",
      },
      { property: "og:title", content: "Sasyadhara Farms — Purity Rooted in Tradition" },
      {
        property: "og:description",
        content: "Traditional cold wood pressed oils and Vedic bilona desi ghee from KR Puram, Bangalore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-foreground">
      {/* 1. Hero Section: Editorial Headline + Pedestal & Arch Visual */}
      <HeroSection />

      {/* 2. Deep Green Continuous Marquee Ribbon */}
      <MarqueeRibbon />

      {/* 3. 3 Arched Window Lifestyle Cards ("An organic choice for your everyday morning ritual") */}
      <LifestyleRituals />

      {/* 4. Best Sellers with Sage Aura Circular Backdrops */}
      <BestSellersSection />

      {/* 5. Editorial Feature Sections (2-Photo Composition + Pure Living Split) */}
      <EditorialSplitSection />

      {/* 6. Contrast Deep Forest Green Section ("Wood Pressed Oils · Inside-Out Goodness") */}
      <DeepGreenFeatureSection />

      {/* 7. Authentic 19-Item Official Rate Card with Category Filters & Bangalore Delivery */}
      <PriceListSection />

      {/* 8. From Our Community Testimonials */}
      <CommunityReviews />

      {/* 9. Welcome Benefit Promo Banner */}
      <PromoBanner />

      {/* 10. Farm Journal / Blog Section */}
      <BlogSection />

      {/* 11. Social Grid Strip (@sasyadharafarms) */}
      <SocialStrip />
    </div>
  );
}
