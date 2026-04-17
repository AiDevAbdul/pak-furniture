# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page landing site showcasing handmade Pakistani wooden furniture. The site emphasizes craftsmanship, heritage, and the artisans behind each piece through high-quality imagery and compelling storytelling.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Build/Dev**: npm/yarn

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
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Hero.tsx            # Hero section with featured image
│   ├── Story.tsx           # Artisan story section
│   ├── Gallery.tsx         # Product showcase/gallery
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer with links
└── public/
    └── images/             # Product and artisan photos
```

## Key Architectural Decisions

1. **Single Page**: All content on one scrollable page for simplicity and fast load times
2. **Server Components**: Use Next.js Server Components by default for better performance
3. **Image Optimization**: Leverage Next.js Image component for automatic optimization
4. **Tailwind v4**: CSS-first configuration with modern utilities and dark mode support
5. **Responsive Design**: Mobile-first approach using Tailwind breakpoints

## Design Principles

- **Warm, Natural Palette**: Earth tones, rich woods, warm whites reflecting the furniture aesthetic
- **Authentic Imagery**: High-quality photos of furniture and craftspeople at work
- **Subtle Animations**: Smooth scrolling and transitions to enhance premium feel
- **Clear Hierarchy**: Strong visual hierarchy guiding users through the story
- **Accessibility**: WCAG-compliant color contrast, semantic HTML, keyboard navigation

## Important Notes

- Images should be optimized before adding to `/public/images/` (use Next.js Image component)
- Keep component files focused and reusable
- Use Tailwind utilities for styling; avoid custom CSS unless necessary
- Ensure all text content is SEO-friendly and descriptive
- Test responsiveness on mobile, tablet, and desktop viewports
