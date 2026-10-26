# Indus Global Trade — Web Platform Architecture

Professional, responsive, accessible, and SEO-optimized static website architecture for **Indus Global Trade**, an international export enterprise.

---

## 1. Project Overview

- **Business Name**: Indus Global Trade
- **Business Type**: Export / International Trading Company
- **Current Portfolio**: Commercial and Industrial Chemicals (Refined Glycerin, Menthol, Monosodium Glutamate)
- **Tagline**: International Export & Supply Partner
- **Purpose**: Present commercial export capabilities to prospective international B2B buyers with clean navigation, high-speed performance, transparent specifications, inquiry routing, and strong technical SEO.
- **Architecture**: Next.js App Router with Static HTML Export (`output: "export"`). Requires zero runtime Node.js servers, zero database dependencies, and scales globally across CDNs.

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 (Server Components by default; Client Components used strictly for interactivity like form validation and navigation drawers)
- **Language**: TypeScript 5 (Strict Mode enabled)
- **Styling**: Tailwind CSS v4 with bespoke brand design tokens
- **Code Quality**: ESLint 9
- **Deployment Format**: Fully Static HTML/CSS/JS export (`out/`)

---

## 3. Brand Design System

Consistent brand tokens are configured in `src/app/globals.css` using Tailwind CSS theme variables:

| Token | Hex Code | Purpose |
|---|---|---|
| **Navy Blue** (`--color-navy`) | `#16324F` | Primary brand color, headers, primary buttons, footers |
| **Muted Teal** (`--color-teal`) | `#2A817A` | Accent color, secondary highlights, active badges, links |
| **Light Grey** (`--color-light-grey`) | `#F3F5F7` | Neutral surface backgrounds, subtle card fills, borders |
| **White** (`--brand-white`) | `#FFFFFF` | Core card surfaces, clean page canvas |

---

## 4. Route Architecture

The platform provides clean, lowercase, semantic URL paths:

| Route | Page Name | Primary Focus | Canonical URL |
|---|---|---|---|
| `/` | Home | Company overview, export capabilities, active categories | `https://indusglobaltrade.com/` |
| `/about-us` | About Us | Company background, trade approach, export standards | `https://indusglobaltrade.com/about-us` |
| `/products` | Products Overview | Scalable category directory & active product cards | `https://indusglobaltrade.com/products` |
| `/products/chemicals` | Chemicals Category | Verified chemical specifications & quote requests | `https://indusglobaltrade.com/products/chemicals` |
| `/contact-us` | Contact Us | Inquiry desk, trade channels & preselected quote form | `https://indusglobaltrade.com/contact-us` |
| `/*` (404) | Not Found | Clean fallback with links to Home, Products & Contact | — |

*Note: Inquiry query parameters such as `/contact-us?product=refined-glycerin` automatically preselect the target product in the form and canonicalize cleanly to `/contact-us` to prevent duplicate search indexing.*

---

## 5. Technical SEO & Metadata Architecture

- **Unique Page Metadata**: Every route declares a unique title, meta description, canonical URL, Open Graph card, and Twitter card via `src/lib/seo.ts`.
- **Structured Data (JSON-LD)**: Schema.org `Organization` and `WebSite` metadata are injected into the `<head>` of all pages using only verified company profile data.
- **Sitemap**: `/sitemap.xml` is generated statically at build time via `src/app/sitemap.ts`, listing all indexable public pages.
- **Robots Directives**: `/robots.txt` is generated statically via `src/app/robots.ts`, granting access to search crawlers and referencing the canonical sitemap.
- **Semantic Hierarchy**: Each page enforces exactly one primary `<h1>` element, followed by logical `<h2>` section titles and `<h3>` card headers without skipped levels.
- **Image SEO**: All imagery includes descriptive, non-stuffed alt text, explicit dimensions/aspect ratios, and priority loading for above-the-fold hero imagery.

---

## 6. Environment Configuration

Copy `.env.example` to `.env.local` to configure environment variables:

```bash
cp .env.example .env.local
```

### Supported Variables

| Variable | Description | Default / Example |
|---|---|---|
| `NEXT_SITE_URL` | Production website base URL used for canonical URLs, sitemaps, and Open Graph assets. | `https://indusglobaltrade.com` |
| `NEXT_PUBLIC_INQUIRY_ENDPOINT` | Third-party form submission webhook (e.g., Formspree, Basin, Web3Forms, AWS API Gateway). | *(Empty = static demo mode)* |

> **Security Notice**: Only prefix variables with `NEXT_PUBLIC_` if they are safe to be exposed to the browser. Never commit secrets, SMTP credentials, or private API keys to `.env.example` or version control.

---

## 7. Inquiry Form Integration

The inquiry form on `/contact-us` includes:
- Real-time client-side field validation (Name, Company, Business Email, Country, Product, Message).
- Anti-spam honeypot trap (`botField`) hidden from human visitors.
- Seamless preselection based on product query strings (`?product=slug`).
- Double-submission prevention with animated loading state.
- Graceful fallback: If `NEXT_PUBLIC_INQUIRY_ENDPOINT` is not configured, the form simulates a successful submission with a notice in the developer console.

### Connecting to a Live Form Provider

To connect the form to an external submission provider without writing backend code:
1. Register a form with a static form endpoint provider such as [Formspree](https://formspree.io), [Basin](https://usebasin.com), or [Web3Forms](https://web3forms.com).
2. Set `NEXT_PUBLIC_INQUIRY_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID` in your production deployment settings.
3. The existing service in `src/lib/inquiry-service.ts` will automatically send the inquiry payload via `fetch` POST.

---

## 8. Development & Build Commands

### Prerequisites
- Node.js `v20.x` or `v22.x` (LTS)
- npm `v10.x` or higher

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application with Hot Module Replacement.

### Run Code Quality & Type Checks
```bash
# Run ESLint
npm run lint

# Run TypeScript compilation checks
npm run typecheck
```

### Build for Production (Static Export)
```bash
npm run build
```
This builds the application and outputs fully pre-rendered static HTML, CSS, JavaScript, and asset files to the `out/` folder.

---

## 9. Static Deployment Guide

The generated `out/` directory can be deployed to any static hosting provider or CDN:

### Cloudflare Pages
1. Connect your Git repository.
2. Build command: `npm run build`
3. Output directory: `out`
4. Add environment variables: `NEXT_SITE_URL` and `NEXT_PUBLIC_INQUIRY_ENDPOINT`.

### Vercel / Netlify
1. Connect your Git repository.
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `out`

### AWS S3 + CloudFront
1. Build locally or in CI/CD: `npm run build`
2. Sync `out/` to your target S3 bucket: `aws s3 sync out/ s3://your-bucket-name --delete`
3. In CloudFront, configure the Default Root Object to `index.html` and map 404 errors to `/404.html`.

---

## 10. Pre-Launch Business Checklist

Before public launch, the business owner must provide and configure the following assets:

1. **Company Domain**: Point DNS to the static hosting provider and update `NEXT_SITE_URL`.
2. **Real Business Identity**: Replace placeholders in `src/lib/site-config.ts` (`YOUR_BUSINESS_EMAIL`, `YOUR_INQUIRY_EMAIL`, `YOUR_BUSINESS_PHONE`, `YOUR_WHATSAPP_NUMBER`, `YOUR_BUSINESS_ADDRESS`).
3. **Official Corporate Logo**: Provide official high-resolution vector logo to replace the temporary monogram emblem.
4. **Product Photography**: Replace generated sample imagery in `public/images/` and `public/images/products/` with verified company-owned or manufacturer-approved photography.
5. **Form Endpoint**: Configure `NEXT_PUBLIC_INQUIRY_ENDPOINT` with a live email forwarding service.
