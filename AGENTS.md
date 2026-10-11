# Sasyadhara Farms — Developer & Agent Architecture Guide

Welcome to the **Sasyadhara Farms** web application codebase.

## 🌿 About Sasyadhara Farms
Sasyadhara Farms is a Bangalore-based enterprise dedicated to traditional, wholesome agriculture and pure food production:
- **Wood-Pressed Oils (Marachekku/Lakdi Ghani):** Groundnut, Safflower, Mustard, Sesame, Coconut, Sunflower.
- **Vedic A2 Bilona Cow Ghee:** Prepared through authentic curd-churning techniques.
- **Pure Raw Forest Honey & Jaggery:** Unprocessed, organic sweeteners.
- **Direct-to-Consumer:** Seamless direct orders, doorstep delivery across Bangalore & South India, and instant WhatsApp support.

---

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js (App Router) + React 19 + TypeScript
- **Routing:** Next.js App Router (file-based in `src/app/`)
- **Styling:** Tailwind CSS v4, Lucide React icons, Sonner toast notifications
- **Cart State:** Local React Context (`src/lib/cart.tsx`) with localStorage persistence and direct WhatsApp order generation
- **Build Tool:** Next.js

---

## 📁 Repository Structure
```
Sasyadhara_Farms/
├── public/                # Static assets (favicons, robots.txt, icons)
├── src/
│   ├── app/               # Next.js App Router pages & layouts
│   │   ├── layout.tsx     # Root HTML shell, providers, Header & Footer
│   │   ├── page.tsx       # Homepage (Hero, Best Sellers, Price List, Rituals)
│   │   ├── story/         # Our Story & philosophy
│   │   ├── process/       # Traditional Wood-Pressed extraction methodology
│   │   ├── shop/          # Complete filterable product catalogue & slug pages
│   │   ├── cart/          # Cart overview & item stepper
│   │   ├── checkout/      # Delivery details & order creation
│   │   ├── order/         # Order confirmation & WhatsApp share
│   │   └── contact/       # Farm location, direct inquiry & WhatsApp contact
│   ├── assets/            # High-resolution packshots, background photos & textures
│   ├── components/
│   │   ├── site/          # Custom storefront components (Header, Footer, Hero, Shared)
│   │   └── ui/            # UI primitives (buttons, dialogs, sheet, etc.)
│   ├── data/
│   │   └── products.ts    # Product catalogue, categories, pricing, volumes & weights
│   ├── lib/               # Utilities, cart context & helper functions
│   └── styles.css         # Global CSS variables & Tailwind v4 theme styling
├── package.json           # Node dependencies & project metadata
└── next.config.ts         # Next.js application configuration
```

---

## 💻 Development Commands
- `npm run dev` — Launch the local Next.js development server at `http://localhost:3000/`
- `npm run build` — Build production bundle with Next.js
- `npm run start` — Run production server
- `npm run lint` — Run ESLint across code files
- `npm run format` — Auto-format files with Prettier

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
