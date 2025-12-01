import { companyInfo } from "./schema";

export const BASE_URL = "https://whitewallrenovation.com";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  canonical?: string;
}

export const seoConfig: Record<string, SEOMetadata> = {
  home: {
    title: "White Wall Renovation | Ontario's Premier Home Renovation Experts",
    description:
      "Transform your home with White Wall Renovation. Expert basement renovation, flooring, tiling, deck construction, interior painting & more across Ontario. Get your free quote today!",
    keywords: [
      "home renovation Ontario",
      "basement renovation",
      "flooring installation",
      "tiling services",
      "deck construction",
      "interior painting",
      "drywall installation",
      "handyman services",
      "Toronto renovation",
    ],
    ogType: "website",
  },
  about: {
    title: "About Us | White Wall Renovation - Ontario Home Renovation Experts",
    description:
      "Learn about White Wall Renovation, Ontario's trusted home renovation company with 15+ years of experience. Our team delivers quality craftsmanship and personalized service.",
    keywords: [
      "about White Wall Renovation",
      "renovation company Ontario",
      "experienced contractors",
      "home renovation experts",
    ],
  },
  services: {
    title: "Our Services | White Wall Renovation - Basement, Flooring, Tiling & More",
    description:
      "Explore our comprehensive home renovation services: basement finishing, tiling, flooring, deck construction, interior painting, drywall, handyman services & more.",
    keywords: [
      "renovation services",
      "home improvement",
      "basement renovation",
      "flooring services",
      "tiling installation",
    ],
  },
  gallery: {
    title: "Project Gallery | White Wall Renovation - Before & After Transformations",
    description:
      "Browse our stunning gallery of home renovation projects. See before and after transformations of basements, bathrooms, kitchens, decks, and more across Ontario.",
    keywords: [
      "renovation gallery",
      "before after",
      "project portfolio",
      "home renovations",
    ],
  },
  contact: {
    title: "Contact Us | White Wall Renovation - Free Quote & Consultation",
    description:
      "Ready to transform your home? Contact White Wall Renovation for a free consultation and quote. Call (519) 731-6242 or fill out our contact form today.",
    keywords: [
      "contact renovation",
      "free quote",
      "consultation",
      "home renovation",
    ],
  },
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: `${BASE_URL}/images/logo.png`,
    description:
      "Ontario's premier home renovation company specializing in basement renovations, flooring, tiling, deck construction, and more.",
    url: BASE_URL,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ontario",
      addressCountry: "CA",
      addressRegion: "ON",
    },
    priceRange: "$$",
    areaServed: "ON",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "15",
    },
  };
}

export function generateServiceSchema(serviceTitle: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${serviceTitle} - White Wall Renovation`,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: companyInfo.name,
      url: BASE_URL,
    },
    areaServed: "ON",
    availableLanguage: "en-CA",
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
