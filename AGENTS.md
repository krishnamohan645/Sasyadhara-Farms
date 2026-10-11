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
- **Framework:** TanStack Start (SSR) + React 19 + TypeScript
- **Routing:** TanStack Router (File-based routes in `src/routes/`)
- **Styling:** Tailwind CSS v4, Lucide React icons, Sonner toast notifications
- **Cart State:** Local React Context (`src/lib/cart.tsx`) with localStorage persistence and direct WhatsApp order generation
- **Build Tool:** Vite 8

---

## 📁 Repository Structure
```
Sasyadhara_Farms/
├── public/                # Static assets (favicons, robots.txt, icons)
├── src/
│   ├── assets/            # High-resolution packshots, background photos & textures
│   ├── components/
│   │   ├── site/          # Custom storefront components (Header, Footer, Hero, Shared)
│   │   └── ui/            # UI components (buttons, dialogs, sheet, etc.)
│   ├── data/
│   │   └── products.ts    # Product catalogue, categories, pricing, volumes & weights
│   ├── lib/               # Utilities, cart context & helper functions
│   ├── routes/            # TanStack Router pages (index, story, process, products, contact)
│   └── styles.css         # Global CSS variables & Tailwind v4 theme styling
├── package.json           # Node dependencies & project metadata
└── vite.config.ts         # Vite bundler & TanStack Start SSR configuration
```

---

## 💻 Development Commands
- `npm run dev` — Launch the local Vite development server at `http://localhost:8080/`
- `npm run build` — Build production bundle with TanStack Start SSR
- `npm run lint` — Run ESLint across code files
- `npm run format` — Auto-format files with Prettier
