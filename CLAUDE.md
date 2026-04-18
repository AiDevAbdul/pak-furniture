# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page landing site showcasing handmade Pakistani wooden furniture. The site emphasizes craftsmanship, heritage, and the artisans behind each piece through high-quality imagery and compelling storytelling. Focus is on brand narrative rather than product catalogue.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Build/Dev**: npm

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

**Note**: Do not run `npm run dev` via Claude Code. Run it manually in your terminal to avoid blocking execution.

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata and SEO
├── page.tsx            # Main landing page (hero, features, collections, heritage, CTA, footer)
├── globals.css         # Global styles with Tailwind v4
└── favicon.ico

components/
├── FeaturesBar.tsx     # 4-column trust/features section with lucide-react icons
├── CollectionsGrid.tsx # 5-card collections showcase with hover effects
└── HeritageBanner.tsx  # Heritage story banner section

public/
├── hero/               # Hero section carousel images (4 images)
└── products/           # Product images (organized by category: Featured, GardensProducts, normal, Premium)
```

## Architecture Notes

- **Single Page App**: All content rendered on one scrollable page (`app/page.tsx`)
- **Client Components**: Hero carousel uses `"use client"` for interactivity; components use client-side state for image rotation
- **Image Optimization**: Uses Next.js `Image` component with automatic optimization and responsive sizing
- **Component Pattern**: Reusable components imported into main page; each component is self-contained with its own styling
- **Tailwind v4**: CSS-first configuration with custom color tokens (amber, gray, dark green, gold)

## Page Sections (Current)

1. **Hero** - 2-column layout with left content (tagline, heading, description, CTAs) and right image carousel
   - Auto-rotating image slider with 4 hero images
   - Manual navigation with chevron buttons
   - Dot indicators for slide selection
   - Responsive: stacks on mobile, side-by-side on desktop

2. **FeaturesBar** - 4-column trust messaging section
   - Icons: Leaf, Hammer, Shield, Globe
   - Features: Solid Sheesham Wood, Handmade by Artisans, Built to Last, Global Delivery
   - Light beige background (amber-50)

3. **CollectionsGrid** - 5-card collections showcase
   - Cards: Dining Room, Bedroom, Living Room, Accents, Storage
   - Hover effects with gradient overlay and arrow icons

4. **HeritageBanner** - Full-width heritage story section
   - Dark wood background with white text overlay
   - Tagline: "Our Promise"
   - Heading: "Heritage. Craftsmanship. Quality."
   - CTA button: "Learn More About Us →"

5. **CTA Section** - Call-to-action with dark background
   - Heading: "Ready to Own a Masterpiece?"
   - Description and two buttons: "Start Shopping" and "Contact Us"

6. **Footer** - 4-column footer with links
   - Sections: About, Shop, Support, Connect
   - Copyright notice

## Removed Sections & Files

- **Product Catalogue**: Entire products grid removed (was 177 products)
  - Deleted: `components/ProductCatalogue.tsx` component
  - Deleted: `app/api/products/route.ts` API endpoint for product management
  - Deleted: `public/organize.js` utility script
  - Deleted: All product images in `public/products/` subdirectories

- **Admin Controls**: Admin login, product deletion, and management features removed
- **Wishlist**: Wishlist functionality removed

## Color Palette

- White: `#FFFFFF` (backgrounds)
- Gray-900: `#111827` (primary text/headings)
- Gray-700: `#374151` (secondary text)
- Amber-700: `#B45309` (accents/taglines)
- Amber-50: `#FFFBEB` (light backgrounds)
- Dark Green: `#1B2B21` (CTA sections)
- Gold: `#C9A961` (highlights)

## Key Architectural Decisions

1. **Single Page**: All content on one scrollable page for simplicity and fast load times
2. **Client Components**: Hero carousel uses `"use client"` for image rotation state management
3. **Image Optimization**: Next.js Image component with automatic optimization and responsive sizing
4. **Responsive Design**: Mobile-first approach using Tailwind breakpoints (stacks on mobile, side-by-side on desktop)
5. **Story-Focused**: Emphasis on brand narrative and heritage over product display
6. **Reusable Components**: FeaturesBar, CollectionsGrid, HeritageBanner as separate, self-contained components
7. **Lucide React Icons**: Used for feature icons (Leaf, Hammer, Shield, Globe) in FeaturesBar

## Important Implementation Details

- **Hero Carousel**: Auto-rotates every 5 seconds with 1000ms fade transitions; manual navigation via chevron buttons and dot indicators
- **Collections Grid**: 5 fixed collections (Dining Room, Bedroom, Living Room, Accents, Storage) with hover scale effect and gradient overlay
- **Image Paths**: Hero images in `/public/hero/`; product images in `/public/products/` subdirectories
- **Color System**: Uses Tailwind classes with custom hex values (amber-700, gray-900, dark green #1B2B21, gold #C9A961)
- **Typography**: Serif font for headings, sans-serif for body text
- **SEO**: Metadata configured in `layout.tsx` with title, description, keywords, and Open Graph tags

## Important Notes

- Hero images located in `/public/hero/` directory (4 images: IMG_7473.JPG, IMG_7504.JPG, product_051.jpeg, product_057.jpeg)
- Product images organized in `/public/products/` subdirectories (Featured, GardensProducts, normal, Premium)
- All footer and CTA links are placeholders—connect to actual pages/sections as needed
- Image filenames with spaces are converted to hyphens in code (e.g., `product03 (101).jpeg`)
- Test responsiveness on mobile, tablet, and desktop viewports
- Carousel uses `setInterval` for auto-rotation; cleanup via `useEffect` return function
- Collections component is client-side for potential future interactivity

