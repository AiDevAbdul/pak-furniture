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

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main landing page (hero, features, collections, heritage, CTA, footer)
├── globals.css         # Global styles with Tailwind
└── favicon.ico

components/
├── FeaturesBar.tsx     # 4-column trust/features section with icons
├── CollectionsGrid.tsx # 5-card collections showcase
└── HeritageBanner.tsx  # Heritage story banner section

public/
├── hero/               # Hero section carousel images
└── products/           # Product images (organized by category)
```

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

## Removed Sections

- **Product Catalogue**: Entire products grid removed (was 177 products)
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
2. **Client Component**: Uses "use client" for hero image carousel interactivity
3. **Image Optimization**: Next.js Image component for automatic optimization
4. **Responsive Design**: Mobile-first approach using Tailwind breakpoints
5. **Story-Focused**: Emphasis on brand narrative and heritage over product display
6. **Reusable Components**: FeaturesBar, CollectionsGrid, HeritageBanner as separate components

## Important Notes

- Hero images located in `/public/hero/` directory
- Product images organized in `/public/products/` subdirectories (Featured, GardensProducts, normal, Premium)
- All links in footer and CTA sections are placeholders - connect to actual pages/sections as needed
- Customize colors in Tailwind classes if brand palette changes
- Test responsiveness on mobile, tablet, and desktop viewports
- Image carousel auto-advances every 5 seconds with 1000ms fade transitions

