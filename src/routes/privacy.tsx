import { createFileRoute } from "@tanstack/react-router";
import { Policy, policyHead } from "@/components/site/Policy";

export const Route = createFileRoute("/privacy")({
  head: () => policyHead("Privacy Policy", "How Sasyadhara Farms handles your personal information."),
  component: () => (
    <Policy title="Privacy Policy" sections={[
      { h: "Information we collect", p: "Details you provide at checkout or via the contact form, such as name, email, phone and delivery address. [To be reviewed.]" },
      { h: "How we use it", p: "[To be confirmed: order fulfilment, customer support, etc.]" },
      { h: "Contact", p: "[To be confirmed: privacy contact details.]" },
    ]} />
  ),
});
