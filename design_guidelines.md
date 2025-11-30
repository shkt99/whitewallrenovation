# Whitewall Renovation - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern contractor and architecture portfolio sites that emphasize craftsmanship, trust, and visual storytelling. The design should convey professionalism, quality workmanship, and reliability while making it effortless for visitors to request quotes.

## Core Design Principles

1. **Trust Through Transparency**: Showcase real work prominently with high-quality project photography
2. **Conversion-Focused**: Every page guides users toward quote requests with clear, accessible CTAs
3. **Visual Craftsmanship**: Design reflects the quality of renovation work through attention to detail
4. **Mobile-First Approachability**: Clean, uncluttered layouts that work beautifully on all devices

## Typography

**Font Families** (Google Fonts via CDN):
- **Headings**: Inter or Outfit (Bold 700, Semibold 600) - modern, professional, clean
- **Body**: Inter (Regular 400, Medium 500) - excellent readability
- **Accents**: Same family for consistency

**Type Scale**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl (bold)
- Section Headers: text-3xl md:text-4xl (semibold)
- Subsection Titles: text-xl md:text-2xl (semibold)
- Body Text: text-base md:text-lg (regular)
- Small/Meta: text-sm (medium)

**Line Height**: Leading-tight for headlines, leading-relaxed for body copy

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (as in p-4, gap-8, mt-12, py-20, etc.)

**Container Strategy**:
- Max-width wrapper: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content sections: py-16 md:py-20 lg:py-24
- Tight sections: py-12 md:py-16

**Grid Patterns**:
- Services: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
- Gallery: Masonry-style with varying heights, 2-4 columns based on viewport
- Testimonials: Single column on mobile, 2-3 columns on desktop

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, navigation center/right, CTA button (phone/quote) prominent
- Mobile: Hamburger menu with slide-in drawer
- Quick access to phone number in header (clickable tel: link)

### Hero Sections
**Home Hero**: Full-viewport height (min-h-screen) with large background image showing completed renovation work
- Overlaid headline + subheadline + dual CTAs (primary: "Get Free Quote", secondary: "View Our Work")
- Subtle gradient overlay for text readability
- Buttons with backdrop-blur-md background

**Interior Page Heroes**: 60-70vh height with relevant imagery, concise headline, breadcrumb navigation

### Service Cards
- Image thumbnail at top (aspect-square or aspect-video)
- Service title (text-xl font-semibold)
- Brief description (2-3 lines, text-base)
- "Learn More" link/button
- Subtle border, rounded corners (rounded-lg), hover lift effect (hover:-translate-y-1 transition)

### Testimonial Components
- Card layout with quote, client name, and photo
- 5-star rating display
- Carousel for multiple testimonials (3-5 visible quotes)
- Auto-advance optional, manual navigation always available

### Gallery/Portfolio
- Masonry grid or uniform grid with hover overlay showing project type
- Lightbox modal for full-size images
- Category filter tabs (All, Basements, Kitchens, Bathrooms, Flooring, etc.)
- Before/After slider component: Split-screen with draggable divider

### Contact/Quote Forms
- Multi-step or single-page form
- Fields: Name (First/Last), Email, Phone, Service Interest (dropdown), Project Details (textarea)
- Prominent submit button
- Inline validation, clear error states
- Success confirmation page/modal

### Call-to-Action Sections
- Full-width sections between content blocks
- Dual-column layout: Text content left, contact info/form right
- Background treatment: Subtle gradient or image with overlay
- Multiple CTAs throughout (phone, quote form, email)

### Footer
- Multi-column layout: Company info, Quick Links, Services, Contact
- Social media icons
- Business hours, phone, email
- Newsletter signup (optional)
- Copyright, Privacy Policy links

## Images

**Hero Image**: Yes - Large, high-quality hero image showing a stunning completed renovation (living room, kitchen, or full home exterior). Should convey quality craftsmanship and modern design.

**Image Placement**:
- Home hero: Full-screen background image
- About page: Team photo or workspace image
- Services page: Each service gets a representative image (basement, tiling work, deck, etc.)
- Gallery page: 40-60 project photos showing variety of work
- Testimonials: Customer headshots (3-4 photos)
- Contact page: Split layout with form on one side, professional company photo on other

**Image Treatment**: All images use next/image with responsive sizes, lazy loading. Consistent aspect ratios within sections (16:9 for services, 1:1 for testimonials, varying for gallery).

## Accessibility

- Semantic HTML5 (header, nav, main, section, article, footer)
- Skip-to-content link at top
- ARIA labels on all interactive elements
- Keyboard navigation support for all components (carousel, lightbox, mobile menu)
- Color contrast ratio ≥ 4.5:1 for all text
- Focus indicators visible and distinct
- Form labels properly associated
- Alt text for all images (descriptive project details)

## Performance Considerations

- Hero images: Prioritize loading (priority prop on next/image)
- Gallery images: Lazy load, use placeholder blur
- Minimal animations - only purposeful micro-interactions (button hovers, card lifts)
- No auto-playing videos
- Icon fonts loaded via CDN with font-display: swap

## Page-Specific Notes

**Home**: 6-7 sections - Hero, Services Grid (8 services), Why Choose Us (3-4 value props), Project Showcase (6-image gallery preview), Testimonials Carousel, FAQ Accordion, Final CTA/Contact

**Services**: Individual service pages with hero image, detailed description, related project photos (4-6), process steps, CTA to quote

**Gallery**: Masonry grid, category filtering, lightbox modal, potential for before/after slider component integration

**Contact**: Split layout - form on left (60%), contact information + map on right (40%). Include phone, email, hours, and embedded Google Maps

**Critical**: Every page includes at least one clear path to quote form and phone number always visible in header.