import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Notice } from "@/components/site/Shared";
import { useCart } from "@/lib/cart";
import { createOrder } from "@/lib/orders.functions";
import { Summary } from "@/components/site/Summary";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Sasyadhara Farms" },
      { name: "description", content: "Enter delivery details to place your Sasyadhara Farms order." },
      { property: "og:title", content: "Checkout — Sasyadhara Farms" },
      { property: "og:description", content: "Checkout." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const FIELDS = [
  { k: "name", l: "Full name", type: "text", auto: "name" },
  { k: "email", l: "Email address", type: "email", auto: "email" },
  { k: "phone", l: "Mobile number (10 digits)", type: "tel", auto: "tel-national" },
  { k: "address", l: "Delivery address", type: "text", auto: "street-address", wide: true },
  { k: "city", l: "City", type: "text", auto: "address-level2" },
  { k: "state", l: "State", type: "text", auto: "address-level1" },
  { k: "pin", l: "PIN code", type: "text", auto: "postal-code" },
] as const;
type Key = (typeof FIELDS)[number]["k"] | "notes";

function validate(f: Record<Key, string>) {
  const e: Partial<Record<Key, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Enter a valid email.";
  if (!/^[6-9]\d{9}$/.test(f.phone.trim())) e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (f.address.trim().length < 5) e.address = "Please enter your address.";
  if (f.city.trim().length < 2) e.city = "Required.";
  if (f.state.trim().length < 2) e.state = "Required.";
  if (!/^\d{6}$/.test(f.pin.trim())) e.pin = "Enter a 6-digit PIN code.";
  return e;
}

function Checkout() {
  const { lines, clear } = useCart();
  const navigate = useNavigate();
  const submitOrder = useServerFn(createOrder);
  const [f, setF] = useState<Record<Key, string>>({ name: "", email: "", phone: "", address: "", city: "", state: "", pin: "", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState("");

  if (lines.length === 0)
    return (
      <div className="py-28 text-center">
        <h1 className="text-3xl text-primary">Nothing to check out yet</h1>
        <Button asChild className="mt-6"><Link to="/shop">Go to shop</Link></Button>
      </div>
    );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    setServerError("");
    try {
      const res = await submitOrder({ data: { customer: { ...f, notes: f.notes || undefined }, lines } });
      sessionStorage.setItem(`order-${res.ref}`, JSON.stringify({ ...res, lines, name: f.name }));
      clear();
      navigate({ to: "/order/$ref", params: { ref: res.ref } });
    } catch {
      setServerError("We couldn't place your order. Please check your details and try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl text-primary">Checkout</h1>
      <div className="mt-6"><Notice><strong>Demo checkout:</strong> online payments (UPI, cards, net banking via Razorpay) are not yet activated. Placing an order creates an order reference only — no payment is taken.</Notice></div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2">
          {FIELDS.map((x) => (
            <label key={x.k} className={`text-sm font-semibold ${"wide" in x ? "sm:col-span-2" : ""}`}>
              {x.l} <span className="text-destructive">*</span>
              <input type={x.type} autoComplete={x.auto} value={f[x.k]} onChange={(e) => setF({ ...f, [x.k]: e.target.value })}
                aria-invalid={!!errors[x.k]} aria-describedby={errors[x.k] ? `${x.k}-err` : undefined}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 font-normal aria-invalid:border-destructive" />
              {errors[x.k] && <span id={`${x.k}-err`} className="mt-1 block text-xs text-destructive">{errors[x.k]}</span>}
            </label>
          ))}
          <label className="text-sm font-semibold sm:col-span-2">
            Order notes (optional)
            <textarea rows={3} maxLength={500} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 font-normal" />
          </label>
          {serverError && <p role="alert" className="text-sm text-destructive sm:col-span-2">{serverError}</p>}
          <Button type="submit" size="lg" variant="hero" disabled={busy} className="sm:col-span-2">
            {busy ? "Placing order…" : "Place order (demo — no payment)"}
          </Button>
        </form>
        <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-xl text-primary">Order summary</h2>
          <p className="mt-1 text-xs text-muted-foreground">Final totals are recalculated securely on our server.</p>
          <div className="mt-4"><Summary lines={lines} /></div>
        </aside>
      </div>
    </div>
  );
}
