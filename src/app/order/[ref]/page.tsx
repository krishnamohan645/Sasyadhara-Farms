"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Notice } from "@/components/site/Shared";
import { formatINR, whatsappLink } from "@/lib/site-config";

export default function OrderPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = use(params);
  const [order, setOrder] = useState<{ total: number; name: string } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(`order-${ref}`);
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, [ref]);

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <CheckCircle2 className="animate-rise mx-auto h-20 w-20 text-primary" />
      <h1 className="mt-6 text-4xl text-primary">Order request received</h1>
      <p className="mt-3 text-muted-foreground">
        {order ? `Thank you, ${order.name}.` : "Thank you."} Your order reference is
      </p>
      <p className="mt-2 inline-block rounded-full bg-secondary px-5 py-2 font-mono text-lg font-bold">
        {ref}
      </p>
      {order && (
        <p className="mt-4">
          Order total: <strong>{formatINR(order.total)}</strong>
        </p>
      )}
      <div className="mt-8 text-left">
        <Notice>
          Payment status: <strong>not paid</strong>. Online payments are being set up, so no money has been taken. Sasyadhara Farms will contact you to confirm payment and delivery.
        </Notice>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="whatsapp">
          <a
            href={whatsappLink(`Hello Sasyadhara Farms, I placed order ${ref}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shop">Continue shopping</Link>
        </Button>
      </div>
    </div>
  );
}
