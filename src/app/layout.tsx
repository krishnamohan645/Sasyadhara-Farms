import type { Metadata } from "next";
import { type ReactNode } from "react";
import "@/styles.css";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/Shared";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://sasyadharafarms.com"),
  title: "Sasyadhara Farms — Wood Pressed Oils, Vedic Bilona Ghee & Organic Foods, Bangalore",
  description:
    "Buy authentic cold wood pressed oils, Vedic bilona desi cow ghee, raw wild honey, and chemical-free jaggery from Sasyadhara Farms, KR Puram, Bangalore.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Sasyadhara Farms — Purity Rooted in Tradition",
    description:
      "Traditional cold wood pressed oils, Vedic bilona desi cow ghee, raw honey, and wholesome farm staples from KR Puram, Bangalore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sasyadhara Farms",
    description: "Wood pressed oils, Vedic bilona ghee, and traditional organic foods.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Mulish:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
          <Toaster position="top-center" />
        </CartProvider>
      </body>
    </html>
  );
}
