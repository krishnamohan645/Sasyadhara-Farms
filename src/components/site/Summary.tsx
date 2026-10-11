import type { CartLine } from "@/lib/pricing";
import { computeTotals } from "@/lib/pricing";
import { DELIVERY, formatINR } from "@/lib/site-config";

export function Summary({ lines }: { lines: CartLine[] }) {
  const t = computeTotals(lines);
  return (
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatINR(t.subtotal)}</dd></div>
      <div className="flex justify-between"><dt>Delivery</dt><dd>{t.delivery === 0 ? "Free" : formatINR(t.delivery)}</dd></div>
      {t.delivery > 0 && <p className="text-xs text-muted-foreground">Free delivery above {formatINR(DELIVERY.freeAbove)} (demo setting)</p>}
      <div className="flex justify-between border-t border-border pt-3 text-lg font-bold"><dt>Total</dt><dd>{formatINR(t.total)}</dd></div>
    </dl>
  );
}

