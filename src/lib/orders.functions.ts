import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { computeTotals, priceLine } from "./pricing";

const schema = z.object({
  customer: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().regex(/^[6-9]\d{9}$/),
    address: z.string().trim().min(5).max(500),
    city: z.string().trim().min(2).max(100),
    state: z.string().trim().min(2).max(100),
    pin: z.string().trim().regex(/^\d{6}$/),
    notes: z.string().trim().max(500).optional(),
  }),
  lines: z
    .array(z.object({ slug: z.string().max(80), variantId: z.string().max(40), qty: z.number().int().min(1).max(99) }))
    .min(1)
    .max(50),
});

/**
 * Prices are recalculated here on the server — never trusted from the browser.
 * Payments are NOT active (no gateway credentials yet): this only creates a
 * demo order reference with status "payment_pending".
 */
export const createOrder = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const valid = data.lines.filter((l) => priceLine(l));
    if (valid.length === 0) throw new Error("No valid products in order");
    const totals = computeTotals(valid);
    const ref = "SF-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    return { ref, status: "payment_pending" as const, ...totals };
  });
