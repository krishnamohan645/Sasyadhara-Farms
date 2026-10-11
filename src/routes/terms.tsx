import { createFileRoute } from "@tanstack/react-router";
import { Policy, policyHead } from "@/components/site/Policy";

export const Route = createFileRoute("/terms")({
  head: () => policyHead("Terms & Conditions", "Terms and conditions for using the Sasyadhara Farms store."),
  component: () => (
    <Policy title="Terms & Conditions" sections={[
      { h: "Orders", p: "[To be confirmed: order acceptance and cancellation terms.]" },
      { h: "Pricing", p: "[To be confirmed: pricing, taxes and changes.]" },
      { h: "Governing law", p: "[To be confirmed by the business.]" },
    ]} />
  ),
});
