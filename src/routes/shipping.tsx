import { createFileRoute } from "@tanstack/react-router";
import { Policy, policyHead } from "@/components/site/Policy";
import { SITE, SHIPPING_POLICY } from "@/lib/site-config";

export const Route = createFileRoute("/shipping")({
  head: () => policyHead("Shipping & Delivery Policy", "Doorstep shipping and delivery charges policy for Sasyadhara Farms orders."),
  component: () => (
    <Policy
      title="Shipping & Delivery Policy"
      sections={[
        {
          h: "Local Delivery (Within 5 KM of Our Store)",
          p: `Store location: ${SITE.address}. For customers within a 5 km radius of our KR Puram store, delivery is completely FREE on a minimum order of 2 Litres of oil/ghee or equivalent items.`,
        },
        {
          h: "Bangalore City Delivery",
          p: `For orders across all other areas and suburbs of Bangalore, on a minimum order of 2 Litres, 50% of the courier/delivery charges will be borne by Sasyadhara Farms.`,
        },
        {
          h: "Outside Bangalore & Pan-India Courier",
          p: `For orders outside Bangalore across Karnataka and other states in India, products are packed securely in leak-proof food-grade containers and dispatched via express courier. Full standard courier shipping charges apply based on parcel weight and destination.`,
        },
        {
          h: "Order Placement & Assistance",
          p: `To place an order or calculate exact delivery fees for your address, WhatsApp or call us directly at ${SITE.phone} or ${SITE.secondaryPhone}.`,
        },
      ]}
    />
  ),
});
