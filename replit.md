# White Wall Renovation Website

## Project Overview
A modern, high-performance Next.js 14 website for White Wall Renovation, Ontario's premier home renovation company. The site is optimized for local SEO, lead generation, and accessibility.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query v5
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Shadcn/ui

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx    # Dynamic service detail pages
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with mobile menu
│   │   └── Footer.tsx      # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx        # Full-height hero section
│   │   ├── PageHero.tsx    # Interior page headers
│   │   ├── ServiceCard.tsx # Service grid component
│   │   ├── TestimonialCarousel.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ProjectGallery.tsx  # Gallery with lightbox
│   │   ├── BeforeAfterSlider.tsx
│   │   └── WhyChooseUs.tsx
│   ├── ui/                 # Shadcn components
│   └── providers.tsx       # Query client provider
├── lib/
│   ├── schema.ts           # Data models, types, content
│   └── utils.ts            # Utility functions
public/
└── images/                 # Static images
```

## Key Features
- **Next.js App Router**: Server-side rendering and static generation
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML
- **Accessibility**: Skip links, ARIA labels, keyboard navigation
- **Performance**: Image optimization with next/image, lazy loading
- **Lead Generation**: Contact form with validation

## Pages
1. **Home**: Hero, services grid, testimonials, FAQ, CTA sections
2. **About**: Company story, values, team, testimonials
3. **Services**: All 8 services with individual detail pages
4. **Gallery**: Project portfolio with lightbox and before/after slider
5. **Contact**: Multi-field form with contact information

## Services Offered
- Basement Renovation
- Tiling Services
- Fence Installation
- Deck Construction
- Flooring Installation
- Interior Painting
- Drywall Installation/Repairs
- Handyman Services

## API Endpoints
- `POST /api/contact` - Submit contact form

## Design System
- **Colors**: Deep blue primary (#1e4b8f), amber accent
- **Typography**: Inter (body), Outfit (headings)
- **Spacing**: Tailwind scale (4, 6, 8, 12, 16, 20, 24)

## Development
The app runs on port 5000 with hot reload enabled via Next.js development server.

## Recent Changes
- Migrated from Express/Vite to Next.js 14 App Router
- Converted all pages to Next.js page components
- Implemented API routes for contact form
- Updated all components to use next/image and next/link
- Configured proper metadata for SEO
