import type { Metadata } from "next";
import { Policy } from "@/components/site/Policy";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sasyadhara Farms",
  description: "Terms and conditions for using the Sasyadhara Farms web platform.",
};

export default function TermsPage() {
  return (
    <Policy
      title="Terms & Conditions"
      sections={[
        {
          h: "Orders & Fulfilment",
          p: "All orders placed are confirmed directly by our team. Availability is subject to fresh daily press batches and seasonal farm harvests.",
        },
        {
          h: "Pricing & Payments",
          p: "All prices are listed in Indian Rupees (₹) according to the official farm rate card. Rates are transparent and inclusive of standard packing.",
        },
        {
          h: "Jurisdiction",
          p: "All transactions and operations are governed by the laws applicable in Bangalore, Karnataka, India.",
        },
      ]}
    />
  );
}
