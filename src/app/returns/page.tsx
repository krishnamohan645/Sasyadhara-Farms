import type { Metadata } from "next";
import { Policy } from "@/components/site/Policy";

export const metadata: Metadata = {
  title: "Returns & Refunds — Sasyadhara Farms",
  description: "Returns and refunds policy for Sasyadhara Farms.",
};

export default function ReturnsPage() {
  return (
    <Policy
      title="Returns & Refunds"
      sections={[
        { h: "Eligibility", p: "Unopened products in original seal can be returned or exchanged within 48 hours of doorstep delivery." },
        { h: "How to request", p: "Contact our customer care team via WhatsApp or phone with your order details." },
        { h: "Refund timelines", p: "Approved refunds are processed to your original payment method within 3 to 5 business days." },
      ]}
    />
  );
}
