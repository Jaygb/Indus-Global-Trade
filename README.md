# Indus Global Trade — Web Platform Architecture

Professional, responsive, and SEO-optimized website architecture for **Indus Global Trade**, an international export enterprise.

---

## 1. Project Overview

- **Business Name**: Indus Global Trade
- **Tagline**: International Export & Supply Partner
- **Purpose**: Showcase commercial and industrial export capabilities to prospective international B2B buyers with clear navigation, fast performance, transparent product specifications, and strong technical SEO.
- **Current Phase**: Foundation & Architectural Setup (Core structure, static export pipeline, brand tokens, SEO foundations, and navigation).

---

## 2. Technology Stack

- **Framework**: Next.js (App Router)
- **UI Library**: React (Server Components by default; Client Components used only where interactivity is required)
- **Type Safety**: TypeScript (Strict Mode enabled)
- **Styling**: Tailwind CSS with CSS design tokens
- **Code Quality**: ESLint
- **Package Manager**: npm
- **Version Control**: Git

---

## 3. Brand Design System & Color Palette

Consistent brand tokens are configured in `src/app/globals.css` using Tailwind CSS theme variables:

| Token | Hex Code | Purpose |
|---|---|---|
| **Navy Blue** | `#16324F` | Primary brand color, headers, primary buttons, footers |
| **Muted Teal** | `#2A817A` | Accent color, secondary buttons, active highlights, badges |
| **Light Grey** | `#F3F5F7` | Neutral surface backgrounds, subtle card fills, borders |
| **White** | `#FFFFFF` | Core card surfaces, clean page canvas |

---

## 4. Project Folder Structure

The project strictly separates presentation, data models, layout, and shared utilities:

```
├── public/
│   ├── images/               # Production-ready web assets (optimized)
│   └── icons/                # Local brand and UI icons
├── src/
│   ├── app/
│   │   ├── about-us/         # /about-us route
│   │   ├── contact-us/       # /contact-us route
│   │   ├── products/
│   │   │   ├── chemicals/    # /products/chemicals category route
│   │   │   └── page.tsx      # /products landing page
│   │   ├── globals.css       # Global styles and Tailwind v4 theme tokens
│   │   ├── icon.svg          # Dynamic SVG site favicon
│   │   ├── layout.tsx        # Root layout (Metadata API, Header, Footer, JSON-LD)
│   │   ├── not-found.tsx     # Custom 404 page
│   │   ├── page.tsx          # Minimal temporary homepage verifying foundation
│   │   ├── robots.ts         # Technical SEO robots.txt generator
│   │   └── sitemap.ts        # Static sitemap.xml generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx    # Semantic footer with navigation and trade desk info
│   │   │   ├── Header.tsx    # Semantic header with brand identity and contact bar
│   │   │   └── Navbar.tsx    # Accessible navigation bar with Products dropdown
│   │   ├── sections/
│   │   │   └── SectionHeading.tsx # Reusable section title and badge component
│   │   ├── seo/
│   │   │   └── JsonLd.tsx    # Schema.org structured data renderer
│   │   └── ui/
│   │       ├── Badge.tsx     # Reusable badge component
│   │       ├── Button.tsx    # Accessible polymorphic button (button or link)
│   │       └── Container.tsx # Responsive container wrapper
│   ├── data/
│   │   ├── categories.ts     # Category registry (Chemicals initial, extensible)
│   │   ├── navigation.ts     # Main and footer navigation definitions
│   │   └── products.ts       # Structured product catalogue data
│   ├── lib/
│   │   ├── seo.ts            # Canonical URLs, Open Graph, and Schema.org builders
│   │   ├── site-config.ts    # Configurable site metadata and company profile
│   │   └── utils.ts          # Shared classname merger utility
│   └── types/
│       ├── navigation.ts     # Navigation interfaces
│       ├── product.ts        # ProductCategory, ProductItem, and Specification types
│       └── site.ts           # Site configuration and Contact interfaces
├── .gitignore                # Standard Next.js gitignore
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js config (Static export enabled)
├── package.json              # Dependencies and lifecycle scripts
├── README.md                 # Project architecture documentation
└── tsconfig.json             # TypeScript strict configuration
```

---

## 5. Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

---

## 6. Installation & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Quality & Type Checks
```bash
# Run ESLint
npm run lint

# Run TypeScript compiler checks
npm run typecheck
```

### 4. Build for Production & Static Export
```bash
npm run build
```
This generates the pre-rendered, static HTML, CSS, JavaScript, `sitemap.xml`, and `robots.txt` inside the `out/` directory.

---

## 7. Technical SEO Architecture

- **Metadata API**: Configured centrally via `src/lib/seo.ts` and `src/lib/site-config.ts`.
- **Canonical URLs**: Configurable production base URL via `NEXT_PUBLIC_SITE_URL` (defaults to `https://indusglobaltrade.com`).
- **Structured Data**: Injected automatically into the `<head>` on all pages:
  - `Schema.org/Organization`
  - `Schema.org/WebSite`
- **Dynamic Static Sitemap**: Automatically generates URLs for static routes and queries the active product categories registry.
- **Search Engine Directives**: Standard `robots.txt` generated automatically via `src/app/robots.ts`.
- **Semantic HTML**: Proper hierarchy with single `<h1>`, `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.

---

## 8. Static Deployment Considerations

The project uses Next.js static HTML export (`output: "export"` in `next.config.ts`). The resulting `out/` folder can be served by any static hosting platform or web server:

- **Cloudflare Pages / Vercel / Netlify**: Connect repository, set build command to `npm run build` and output directory to `out`.
- **AWS S3 + CloudFront**: Sync `out/` to an S3 bucket and configure CloudFront distribution with Default Root Object `index.html`.
- **Nginx / Apache**: Copy `out/` to the web root (e.g., `/var/www/html`).
- **Zero Server Overhead**: Requires no Node.js runtime on the hosting server, eliminating server maintenance, scaling bottlenecks, and security vulnerabilities associated with SSR runtimes.

---

## 9. Extending Product Categories & Data

Product data is strictly decoupled from presentation components:

1. **Adding a New Category**:
   - Open `src/data/categories.ts`.
   - Add a new entry to the `productCategories` array (e.g., `minerals`, `textiles`).
   - The navigation dropdown, sitemap, and category landing overview will automatically incorporate the new category without code changes to UI components.

2. **Adding Products**:
   - Open `src/data/products.ts`.
   - Add new `ProductItem` objects assigned to the category ID.
