import type { Metadata } from "next";
import { Policy } from "@/components/site/Policy";

export const metadata: Metadata = {
  title: "Privacy Policy — Sasyadhara Farms",
  description: "How Sasyadhara Farms handles your personal information.",
};

export default function PrivacyPage() {
  return (
    <Policy
      title="Privacy Policy"
      sections={[
        {
          h: "Information We Collect",
          p: "Details you provide at checkout or via inquiry, such as your name, contact phone number, delivery address, and order selections.",
        },
        {
          h: "How We Use Information",
          p: "Your information is used strictly to fulfill your orders, provide dispatch updates, and answer inquiries. We never sell your data.",
        },
        {
          h: "Customer Support Contact",
          p: "For any questions regarding your data, contact care@sasyadharafarms.com or WhatsApp our official farm store number.",
        },
      ]}
    />
  );
}
