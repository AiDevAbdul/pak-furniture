# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page landing site showcasing handmade Pakistani wooden furniture. The site emphasizes craftsmanship, heritage, and the artisans behind each piece through high-quality imagery and compelling storytelling.

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
├── page.tsx            # Main landing page (all sections)
├── globals.css         # Global styles with Tailwind and animations
└── favicon.ico

public/
└── images/             # Product and artisan photos (add here)
```

## Design System

**Color Palette** (defined in globals.css):
- Cream: `#faf8f3` (background)
- Dark Wood: `#3d2817` (primary text/headings)
- Warm Brown: `#8b6f47` (secondary text)
- Sand: `#d4c5b9` (borders/accents)
- Accent Gold: `#c9a961` (highlights/CTAs)
- Text Dark: `#2a2420` (body text)

**Typography**:
- Display: Playfair Display (serif) - headings
- Body: Lora (serif) - body text
- Both imported from Google Fonts

**Animations**:
- `animate-fade-in-up` - fade in with upward movement
- `animate-slide-in-left/right` - slide in from sides
- `animate-glow` - subtle glow effect
- Stagger delays: `.stagger-1` through `.stagger-5` for sequential animations

## Key Architectural Decisions

1. **Single Page**: All content on one scrollable page for simplicity and fast load times
2. **Server Components**: Uses "use client" for interactivity (hover states on products)
3. **Image Optimization**: Next.js Image component for automatic optimization
4. **Responsive Design**: Mobile-first approach using Tailwind breakpoints
5. **Serif Typography**: Playfair Display + Lora for premium, artisanal feel

## Page Sections

1. **Navigation** - Fixed header with logo, links, and CTA button
2. **Hero** - Headline, subheading, CTAs, and featured image
3. **Story** - Artisan heritage section with stats
4. **Gallery** - 4-column product grid with hover effects
5. **Testimonials** - 3-column customer testimonials with ratings
6. **CTA** - Call-to-action section with dark background
7. **Footer** - Links organized by category

## Important Notes

- Replace placeholder images in `page.tsx` with real product photos
- Update product data in the `products` array with actual items
- Update testimonials with real customer feedback
- All links are currently placeholders - connect to actual pages/sections
- Customize colors in `globals.css` if needed
- Test responsiveness on mobile, tablet, and desktop viewports
- Font imports are from Google Fonts - ensure they load properly in production
