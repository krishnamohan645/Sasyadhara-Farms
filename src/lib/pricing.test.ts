import { describe, expect, it } from "vitest";
import { computeTotals } from "./pricing";

const cfg = { flatFee: 60, freeAbove: 999 };

describe("cart totals", () => {
  it("adds the delivery fee below the free-delivery threshold", () => {
    expect(computeTotals([{ slug: "mustard-oil", variantId: "1l", qty: 1 }], cfg)).toEqual({
      subtotal: 420,
      delivery: 60,
      total: 480,
    });
  });
  it("makes delivery free at or above the threshold", () => {
    expect(computeTotals([{ slug: "mustard-oil", variantId: "1l", qty: 3 }], cfg).delivery).toBe(0);
  });
  it("charges nothing for an empty cart", () => {
    expect(computeTotals([], cfg).total).toBe(0);
  });
});
