import { useEffect } from "react";
import { companyInfo } from "@shared/schema";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}

export function SEO({
  title = "White Wall Renovation | Ontario's Premier Home Renovation Experts",
  description = "White Wall Renovation transforms houses into homes across Ontario. Expert basement renovation, flooring, tiling, deck construction, and more. Get your free quote today!",
  path = "/",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://www.whitewallrenovation.ca${path}`);
    }
  }, [title, description, path]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.whitewallrenovation.ca",
    "name": companyInfo.name,
    "description": "Ontario's premier home renovation company specializing in basement renovation, flooring, tiling, deck construction, interior painting, and more.",
    "url": "https://www.whitewallrenovation.ca",
    "telephone": companyInfo.phone,
    "email": companyInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "image": "https://www.whitewallrenovation.ca/og-image.jpg",
    "sameAs": [],
    "areaServed": {
      "@type": "State",
      "name": "Ontario"
    },
    "serviceType": [
      "Basement Renovation",
      "Tiling Services",
      "Fence Installation",
      "Deck Construction",
      "Flooring Installation",
      "Interior Painting",
      "Drywall Installation",
      "Handyman Services"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "500"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
