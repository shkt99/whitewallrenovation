# White Wall Renovation Website

## Project Overview
A modern, high-performance Next.js-style website rebuilt for White Wall Renovation, Ontario's premier home renovation company. The site is optimized for local SEO, lead generation, and accessibility.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter
- **State Management**: TanStack Query v5
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Shadcn/ui
- **Backend**: Express.js with TypeScript
- **Database**: In-memory storage (can be upgraded to PostgreSQL)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky header with mobile menu
│   │   │   └── Footer.tsx      # Multi-column footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Full-height hero section
│   │   │   ├── PageHero.tsx        # Interior page headers
│   │   │   ├── ServiceCard.tsx     # Service grid component
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ProjectGallery.tsx  # Gallery with lightbox
│   │   │   ├── BeforeAfterSlider.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── ui/                 # Shadcn components
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── not-found.tsx
│   ├── App.tsx
│   └── index.css           # Tailwind + design tokens
├── public/
│   └── favicon.png
shared/
├── schema.ts               # Data models, types, content
server/
├── routes.ts               # API endpoints
├── storage.ts              # Data persistence
└── index.ts
```

## Key Features
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML
- **Accessibility**: Skip links, ARIA labels, keyboard navigation
- **Performance**: Lazy loading, optimized images
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

## Environment Variables
- `SESSION_SECRET` - Session secret for authentication (if needed)
- SMTP configuration for email sending (to be configured)

## Development
The app runs on port 5000 with hot reload enabled.

## Recent Changes
- Initial build with all frontend components and pages
- Implemented dark mode toggle
- Created responsive header with mobile navigation
- Built project gallery with lightbox functionality
- Implemented contact form with validation
