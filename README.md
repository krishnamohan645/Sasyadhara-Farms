# Sasyadhara Farms — Web Storefront & Catalogue

> **Purity Rooted in Tradition**  
> Direct from our organic farms to your dining table. Authentic Wood-Pressed Oils, Vedic A2 Bilona Cow Ghee, Wild Honey, Millets, and Organic Staples.

---

## 🌾 Overview

**Sasyadhara Farms** is an authentic agricultural enterprise headquartered in Bangalore, Karnataka. This repository contains the official web storefront, interactive catalogue, and direct customer engagement platform.

### Key Highlights
- 🌿 **Traditional Wood-Pressed (Marachekku) Oils:** Cold-extracted at low temperatures without chemical refining.
- 🧈 **Vedic A2 Bilona Cow Ghee:** Hand-churned from cultured curd using bi-directional wooden churners.
- 🍯 **Raw Wild Honey & Organic Sweeteners:** Pure nectar, natural palm & sugarcane jaggery.
- 📦 **Direct Doorstep Delivery:** Flexible ordering with real-time cart calculations and instant WhatsApp checkout.
- ⚡ **High-Performance SSR Architecture:** Powered by Next.js 16 (App Router), React 19, and Tailwind CSS v4.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Modern full-stack React framework with server components and SSR |
| **React 19** | Concurrent rendering, server actions, and hooks |
| **Tailwind CSS v4** | Custom theme design tokens, fluid typography, and responsive layouts |
| **Lucide React** | Clean, accessible iconography |
| **Sonner** | Interactive toast notifications |
| **TypeScript** | Strict type safety across components and catalogues |

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm`, `pnpm`, or `bun`

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/krishnamohan645/Sasyadhara-Farms.git
cd Sasyadhara-Farms
npm install
```

### Running Locally
Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, favicons, manifests
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── layout.tsx      # Root HTML shell, providers, Header & Footer
│   │   ├── page.tsx        # Homepage (Hero, Best Sellers, Price List, Rituals)
│   │   ├── story/          # Our Story & philosophy
│   │   ├── process/        # Traditional Wood-Pressed extraction methodology
│   │   ├── shop/           # Complete filterable product catalogue & slug pages
│   │   ├── cart/           # Cart overview & item stepper
│   │   ├── checkout/       # Delivery details & order creation
│   │   ├── order/          # Order confirmation & WhatsApp share
│   │   └── contact/        # Farm locations, direct inquiry & WhatsApp contact
│   ├── assets/             # Brand images, packshots, farm photos
│   ├── components/
│   │   ├── site/           # Storefront sections (Header, Hero, Footer, Shared)
│   │   └── ui/             # Reusable UI primitives (dialog, button, input)
│   ├── data/
│   │   └── products.ts     # Curated catalogue, pricing & specifications
│   ├── lib/                # Cart context, WhatsApp generators, utilities
│   └── styles.css          # Design system variables and typography
├── next.config.ts          # Next.js bundler configuration
└── postcss.config.mjs      # PostCSS Tailwind CSS v4 configuration
```

---

## 📍 Contact & Support

- **Farm Location:** Sasyadhara Farms, Bangalore, Karnataka, India
- **WhatsApp Support:** [+91 94813 42938](https://wa.me/919481342938)
- **Email:** care@sasyadharafarms.com
- **Website:** [sasyadharafarms.com](https://sasyadharafarms.com)

---

&copy; 2026 Sasyadhara Farms. All rights reserved. Built with pride for pure and healthy living.