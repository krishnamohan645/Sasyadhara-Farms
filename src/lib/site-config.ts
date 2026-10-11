export const SITE = {
  name: "Sasyadhara Farms",
  tagline: "Purity Rooted in Tradition",
  whatsappNumber: "919866125836",
  secondaryWhatsappNumber: "918618717644",
  phone: "+91 98661 25836",
  secondaryPhone: "+91 86187 17644",
  email: "sasyadharafarms@gmail.com",
  address: "Near Lake Montfort School, Opp. Kurudusonnenahalli Bus Stop, KR Puram, Bangalore – 560049",
  openingHours: "Mon – Sun: 8:00 AM – 9:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
  whatsappGreeting: "Hello Sasyadhara Farms, I would like to order fresh wood pressed oils / farm products.",
};

/** Official Shipping Policy from Price Flyer */
export const SHIPPING_POLICY = {
  local5km: {
    zone: "Within 5 KM of KR Puram store",
    minOrder: "2 Litres",
    fee: "FREE Delivery",
  },
  bangalore: {
    zone: "Within Bangalore",
    minOrder: "2 Litres",
    fee: "50% Shipping charges borne by us",
  },
  outsideBangalore: {
    zone: "Outside Bangalore / Pan-India",
    minOrder: "Any order",
    fee: "Full courier shipping charges apply",
  },
};

/** DEMO delivery settings for cart checkout */
export const DELIVERY = {
  flatFee: 60,
  freeAbove: 999,
};

export function whatsappLink(text: string = SITE.whatsappGreeting, number: string = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function whatsappOrderLink(item: string, price?: number | string) {
  const msg = price
    ? `Hello Sasyadhara Farms, I would like to order: ${item} (₹${price}). Please share availability and payment details.`
    : `Hello Sasyadhara Farms, I would like to order: ${item}. Please share availability and payment details.`;
  return whatsappLink(msg);
}

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

