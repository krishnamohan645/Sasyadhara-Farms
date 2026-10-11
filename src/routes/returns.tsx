import { createFileRoute } from "@tanstack/react-router";
import { Policy, policyHead } from "@/components/site/Policy";

export const Route = createFileRoute("/returns")({
  head: () => policyHead("Returns & Refunds", "Returns and refunds policy for Sasyadhara Farms."),
  component: () => (
    <Policy title="Returns & Refunds" sections={[
      { h: "Eligibility", p: "[To be confirmed: which items can be returned and conditions.]" },
      { h: "How to request", p: "[To be confirmed: how customers raise a return or refund request.]" },
      { h: "Refund timelines", p: "[To be confirmed: refund method and timelines.]" },
    ]} />
  ),
});
