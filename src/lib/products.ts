import mustard from "@/assets/packshot-mustard.png";
import groundnut from "@/assets/packshot-groundnut.png";
import sunflower from "@/assets/packshot-sunflower.png";
import sesame from "@/assets/packshot-sesame.png";
import coconut from "@/assets/packshot-coconut.png";
import bilonaGhee from "@/assets/packshot-ghee.png";
import honey from "@/assets/packshot-honey.png";
import jaggery from "@/assets/packshot-jaggery.png";
import superfoods from "@/assets/superfood-powders.jpg";
import lipbalm from "@/assets/packshot-lipbalm.png";
import millets from "@/assets/millets.jpg";
import snacks from "@/assets/millet-snacks.jpg";

export type Category =
  | "Wood Pressed Oils"
  | "Pure Desi Ghee (Bilona)"
  | "Organic Jaggery & Honey"
  | "Superfood Powders"
  | "Herbal Lip Balms"
  | "Millets & Snacks";

export const CATEGORIES: Category[] = [
  "Wood Pressed Oils",
  "Pure Desi Ghee (Bilona)",
  "Organic Jaggery & Honey",
  "Superfood Powders",
  "Herbal Lip Balms",
  "Millets & Snacks",
];

export type Variant = { id: string; label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  category: Category;
  short: string;
  description: string;
  image: string;
  variants: Variant[];
  inStock: boolean;
  badge?: "NEW" | "BESTSELLER" | "POPULAR";
  demo?: boolean;
  unitNote?: string;
  info?: { label: string; value: string }[];
};

export type PriceItem = {
  id: string;
  name: string;
  teluguName?: string;
  category: Category;
  size: string;
  price: number;
  isNew?: boolean;
  isBestseller?: boolean;
};

/**
 * Verified Official Price List directly from Sasyadhara Farms printed flyer.
 */
export const OFFICIAL_PRICE_LIST: {
  category: Category;
  title: string;
  subtitle?: string;
  items: PriceItem[];
}[] = [
  {
    category: "Wood Pressed Oils",
    title: "Wood Pressed Edible Oils",
    subtitle: "Product – Per 1 Litre (Cold Pressed / Mara Chekku)",
    items: [
      { id: "oil-groundnut", name: "Groundnut Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 420, isBestseller: true },
      { id: "oil-sunflower", name: "Sunflower Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 450 },
      { id: "oil-white-sesame", name: "White Sesame Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 560 },
      { id: "oil-black-sesame", name: "Black Sesame Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 560 },
      { id: "oil-coconut", name: "Coconut Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 650 },
      { id: "oil-mustard", name: "Mustard Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 410, isBestseller: true },
      { id: "oil-safflower", name: "Safflower (Kusuma) Oil", teluguName: "Kusuma Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 550, isNew: true },
      { id: "oil-niger", name: "Niger (Verri Nuvvulu) Oil", teluguName: "Verri Nuvvulu Oil", category: "Wood Pressed Oils", size: "1 Litre", price: 950, isNew: true },
    ],
  },
  {
    category: "Pure Desi Ghee (Bilona)",
    title: "Pure Desi Ghee (Bilona Method)",
    subtitle: "Traditional curd-churned Vedic bilona method for authentic aroma & nutrition",
    items: [
      { id: "ghee-cow-500", name: "Cow Ghee (Bilona Method)", category: "Pure Desi Ghee (Bilona)", size: "500 ml", price: 800, isNew: true, isBestseller: true },
      { id: "ghee-cow-250", name: "Cow Ghee (Bilona Method)", category: "Pure Desi Ghee (Bilona)", size: "250 ml", price: 420, isNew: true },
      { id: "ghee-buf-500", name: "Buffalo Ghee (Bilona Method)", category: "Pure Desi Ghee (Bilona)", size: "500 ml", price: 850, isNew: true },
      { id: "ghee-buf-250", name: "Buffalo Ghee (Bilona Method)", category: "Pure Desi Ghee (Bilona)", size: "250 ml", price: 440, isNew: true },
    ],
  },
  {
    category: "Organic Jaggery & Honey",
    title: "Organic Jaggery and Honey",
    subtitle: "Chemical-free, unrefined sweetness and pure natural raw honey",
    items: [
      { id: "jaggery-cubes", name: "Jaggery Cubes", category: "Organic Jaggery & Honey", size: "1 KG", price: 120, isBestseller: true },
      { id: "jaggery-powder", name: "Jaggery Powder", category: "Organic Jaggery & Honey", size: "1 KG", price: 150 },
      { id: "honey-250", name: "Pure Raw Honey", category: "Organic Jaggery & Honey", size: "250 gms", price: 250 },
      { id: "honey-500", name: "Pure Raw Honey", category: "Organic Jaggery & Honey", size: "500 gms", price: 500, isBestseller: true },
    ],
  },
  {
    category: "Superfood Powders",
    title: "Health & Superfood Powders",
    subtitle: "Nutrient-dense natural immunity & health boosters",
    items: [
      { id: "powder-moringa", name: "Moringa Powder", category: "Superfood Powders", size: "100 gms", price: 160 },
      { id: "powder-abc", name: "ABC (Amla Beetroot Carrot) Powder", category: "Superfood Powders", size: "100 gms", price: 180, isBestseller: true },
    ],
  },
  {
    category: "Herbal Lip Balms",
    title: "Herbal Lip Balms",
    subtitle: "Handcrafted natural herbal hydration with pure botanical extracts",
    items: [
      { id: "balm-beetroot", name: "Beetroot Lipbalm", category: "Herbal Lip Balms", size: "15 gms", price: 200 },
      { id: "balm-rose", name: "Rose Lipbalm", category: "Herbal Lip Balms", size: "15 gms", price: 200 },
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "mustard-oil",
    name: "Wood Pressed Mustard Oil",
    category: "Wood Pressed Oils",
    badge: "BESTSELLER",
    short: "Traditional cold wood pressed mustard oil with rich aroma and natural pungency.",
    description:
      "Crafted at Sasyadhara Farms using traditional wooden mara chekku presses. Extracted at room temperature to retain all natural antioxidants, omega fatty acids, and authentic mustard zest.",
    image: mustard,
    variants: [
      { id: "1l", label: "1 Litre", price: 410 },
      { id: "500ml", label: "500 ml", price: 215 },
    ],
    inStock: true,
    info: [
      { label: "Extraction", value: "Traditional Wooden Mara Chekku" },
      { label: "Purity", value: "100% Natural, No Preservatives" },
      { label: "Origin", value: "Store in KR Puram, Bangalore" },
    ],
  },
  {
    slug: "groundnut-oil",
    name: "Wood Pressed Groundnut Oil",
    category: "Wood Pressed Oils",
    badge: "BESTSELLER",
    short: "Pure peanut oil cold-extracted for aromatic, wholesome everyday cooking.",
    description:
      "Made from farm-fresh premium groundnuts using traditional wooden presses. Offers a clean, nutty aroma, rich vitamin E content, and high smoke point ideal for traditional Indian kitchens.",
    image: groundnut,
    variants: [
      { id: "1l", label: "1 Litre", price: 420 },
      { id: "500ml", label: "500 ml", price: 220 },
    ],
    inStock: true,
    info: [
      { label: "Extraction", value: "Slow Cold Wood Press" },
      { label: "Purity", value: "Zero Mineral Oils, Zero Chemicals" },
      { label: "Shelf Life", value: "6 Months in cool dark place" },
    ],
  },
  {
    slug: "sunflower-oil",
    name: "Wood Pressed Sunflower Oil",
    category: "Wood Pressed Oils",
    short: "Light, golden, heart-friendly sunflower oil naturally extracted.",
    description:
      "Slow-pressed sunflower seeds producing a gentle golden oil packed with natural vitamin E and healthy unsaturated fats, perfect for everyday curries and sautéing.",
    image: sunflower,
    variants: [{ id: "1l", label: "1 Litre", price: 450 }],
    inStock: true,
  },
  {
    slug: "white-sesame-oil",
    name: "Wood Pressed White Sesame Oil",
    category: "Wood Pressed Oils",
    short: "Nutrient-rich gingelly oil pressed from premium white sesame seeds.",
    description:
      "Traditional South Indian sesame (til/gingelly) oil pressed slowly with wooden pestle. Revered in Ayurveda for deep nourishment, bone health, and culinary flavor.",
    image: sesame,
    variants: [{ id: "1l", label: "1 Litre", price: 560 }],
    inStock: true,
  },
  {
    slug: "black-sesame-oil",
    name: "Wood Pressed Black Sesame Oil",
    category: "Wood Pressed Oils",
    short: "Intense, nutrient-dense oil from heritage black sesame seeds.",
    description:
      "Rich in calcium, zinc, and antioxidants. Extracted cold in wooden chekku presses for traditional herbal uses, cooking, and holistic wellness.",
    image: sesame,
    variants: [{ id: "1l", label: "1 Litre", price: 560 }],
    inStock: true,
  },
  {
    slug: "coconut-oil",
    name: "Wood Pressed Coconut Oil",
    category: "Wood Pressed Oils",
    short: "Aromatic raw coconut oil pressed from sun-dried natural copra.",
    description:
      "Fragrant, pure, unrefined coconut oil extracted without bleaching or high heat. Ideal for coastal culinary dishes, hair nourishment, and body massage.",
    image: coconut,
    variants: [{ id: "1l", label: "1 Litre", price: 650 }],
    inStock: true,
  },
  {
    slug: "safflower-kusuma-oil",
    name: "Wood Pressed Safflower (Kusuma) Oil",
    category: "Wood Pressed Oils",
    badge: "NEW",
    short: "Heritage Kusuma oil prized for heart health and light flavor.",
    description:
      "Cold-extracted Safflower (Kusuma) oil rich in oleic acid and omega-6. Known to support healthy cholesterol levels and optimal cardiovascular vitality.",
    image: mustard,
    variants: [{ id: "1l", label: "1 Litre", price: 550 }],
    inStock: true,
  },
  {
    slug: "niger-verri-nuvvulu-oil",
    name: "Wood Pressed Niger (Verri Nuvvulu) Oil",
    category: "Wood Pressed Oils",
    badge: "NEW",
    short: "Rare traditional Verri Nuvvulu oil cold pressed with immense medicinal value.",
    description:
      "Authentic Niger seed (Verri Nuvvulu) oil traditionally cherished in Telugu & Deccan cuisines for unique deep flavor and anti-inflammatory properties.",
    image: mustard,
    variants: [{ id: "1l", label: "1 Litre", price: 950 }],
    inStock: true,
  },
  {
    slug: "bilona-cow-ghee",
    name: "Pure Cow Ghee (Bilona Method)",
    category: "Pure Desi Ghee (Bilona)",
    badge: "NEW",
    short: "Artisanal A2 Cow Ghee prepared using traditional Vedic Bilona curd-churning.",
    description:
      "Prepared following the authentic Vedic 5-step process: Whole cow milk is boiled, cultured into curd, churned with wooden bilona to yield makkhan, and slowly hand-simmered into golden, aromatic, granular desi ghee.",
    image: bilonaGhee,
    variants: [
      { id: "500ml", label: "500 ml", price: 800 },
      { id: "250ml", label: "250 ml", price: 420 },
    ],
    inStock: true,
    info: [
      { label: "Method", value: "Traditional Vedic Bilona" },
      { label: "Texture", value: "Danedar (Granular) Golden Ghee" },
      { label: "Purity", value: "No preservatives, 100% natural" },
    ],
  },
  {
    slug: "bilona-buffalo-ghee",
    name: "Pure Buffalo Ghee (Bilona Method)",
    category: "Pure Desi Ghee (Bilona)",
    badge: "NEW",
    short: "Rich, dense, traditional bilona buffalo ghee with high smoke point and deep taste.",
    description:
      "Churned from fresh cultured buffalo curd using the authentic wooden bilona method. Dense granular texture and creamy taste, perfect for festive sweets and hearty dishes.",
    image: bilonaGhee,
    variants: [
      { id: "500ml", label: "500 ml", price: 850 },
      { id: "250ml", label: "250 ml", price: 440 },
    ],
    inStock: true,
  },
  {
    slug: "jaggery-cubes",
    name: "Organically Processed Jaggery Cubes",
    category: "Organic Jaggery & Honey",
    badge: "BESTSELLER",
    short: "Chemical-free, naturally prepared solid jaggery cubes.",
    description:
      "Pure sugarcane juice naturally clarified using plant extracts without artificial bleaching agents or sulphur. Sweet, wholesome, rich in iron and minerals.",
    image: jaggery,
    variants: [{ id: "1kg", label: "1 KG", price: 120 }],
    inStock: true,
  },
  {
    slug: "jaggery-powder",
    name: "Organically Processed Jaggery Powder",
    category: "Organic Jaggery & Honey",
    short: "Fine unrefined golden jaggery powder for tea, baking, and sweets.",
    description:
      "Natural alternative to white refined sugar. Dissolves easily into daily chai, coffee, and desserts while infusing rich iron and micronutrients.",
    image: jaggery,
    variants: [{ id: "1kg", label: "1 KG", price: 150 }],
    inStock: true,
  },
  {
    slug: "pure-raw-honey",
    name: "Pure Raw Natural Honey",
    category: "Organic Jaggery & Honey",
    badge: "POPULAR",
    short: "100% pure unprocessed wild apiary honey straight from nature.",
    description:
      "Raw unpasteurised honey loaded with beneficial natural enzymes, bee pollen, and soothing antioxidants. No added corn syrups or artificial sugars.",
    image: honey,
    variants: [
      { id: "500g", label: "500 gms", price: 500 },
      { id: "250g", label: "250 gms", price: 250 },
    ],
    inStock: true,
  },
  {
    slug: "moringa-powder",
    name: "Pure Moringa Leaf Powder",
    category: "Superfood Powders",
    short: "Shade-dried natural drumstick leaf powder packed with multivitamins and iron.",
    description:
      "Known as the miracle tree, our moringa leaves are hand-picked, shade-dried, and finely stone-ground to preserve heat-sensitive vitamins and antioxidants.",
    image: superfoods,
    variants: [{ id: "100g", label: "100 gms", price: 160 }],
    inStock: true,
  },
  {
    slug: "abc-powder",
    name: "ABC (Amla Beetroot Carrot) Powder",
    category: "Superfood Powders",
    badge: "BESTSELLER",
    short: "Vibrant blend of Amla, Beetroot, and Carrot for radiant skin and hemoglobin boost.",
    description:
      "A potent daily superfood powder combining the vitamin C of fresh gooseberry (amla), the iron of beetroot, and the beta-carotene of carrot. Mix with warm water, juices, or smoothies.",
    image: superfoods,
    variants: [{ id: "100g", label: "100 gms", price: 180 }],
    inStock: true,
  },
  {
    slug: "herbal-lipbalm",
    name: "Handmade Herbal Lip Balm",
    category: "Herbal Lip Balms",
    badge: "NEW",
    short: "Nourishing botanical lip balms infused with pure extracts and natural beeswax.",
    description:
      "Chemical-free botanical lip care handcrafted with cold pressed oils, natural beeswax, and pure floral/vegetable botanical extracts for long-lasting hydration.",
    image: lipbalm,
    variants: [
      { id: "beetroot", label: "Beetroot Lipbalm (15g)", price: 200 },
      { id: "rose", label: "Rose Lipbalm (15g)", price: 200 },
    ],
    inStock: true,
  },
  {
    slug: "millets-pulses",
    name: "Farm Sourced Millets & Pulses Pack",
    category: "Millets & Snacks",
    short: "Directly farmer-sourced unpolished millets and traditional pulses.",
    description:
      "Rich in dietary fibre and plant proteins. Direct farmer procurement ensures freshness, authentic taste, and fair value for our farming community.",
    image: millets,
    variants: [
      { id: "1kg", label: "1 kg", price: 180 },
      { id: "2kg", label: "2 kg", price: 340 },
    ],
    inStock: true,
  },
  {
    slug: "millet-snacks",
    name: "Home-made Wholesome Millet Snacks",
    category: "Millets & Snacks",
    short: "Crispy, guilt-free tea-time snacks prepared with millets and cold pressed oils.",
    description:
      "Crafted with love using traditional household recipes. Zero refined flour (maida), zero palm oil, fried exclusively in wood pressed oils.",
    image: snacks,
    variants: [{ id: "250g", label: "250 g", price: 150 }],
    inStock: true,
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
