import { z } from "zod";

export const insertContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export interface ContactSubmission extends InsertContact {
  id: string;
  createdAt: Date;
}

export const services = [
  {
    id: "basement-renovation",
    title: "Basement Renovation",
    shortDescription: "Transform your basement into a functional living space",
    description: "Maximize your living space with our expert basement renovation services. Whether you're envisioning a cozy family room, an entertainment area, or additional bedrooms, our team has the expertise to transform your basement into a functional and inviting part of your home.",
    features: [
      "Complete basement finishing",
      "Egress window installation",
      "Bathroom additions",
      "Home theater setup",
      "In-law suite conversions",
    ],
  },
  {
    id: "tiling-services",
    title: "Tiling Services",
    shortDescription: "Professional tile installation for any room",
    description: "Upgrade your home with our professional tiling services. From stunning backsplashes to elegant bathroom tiles, our skilled craftsmen ensure precision and attention to detail in every tile installation.",
    features: [
      "Kitchen backsplash installation",
      "Bathroom floor and wall tiling",
      "Shower and tub surrounds",
      "Custom mosaic designs",
      "Grout repair and replacement",
    ],
  },
  {
    id: "fence-installation",
    title: "Fence Installation",
    shortDescription: "Enhance privacy and curb appeal",
    description: "Enhance your property's privacy and curb appeal with our fence installation services. Choose from a variety of materials and styles to create a custom fence that suits your aesthetic preferences and practical needs.",
    features: [
      "Wood fence installation",
      "Vinyl and composite fencing",
      "Chain link fencing",
      "Privacy fence designs",
      "Gate installation and repair",
    ],
  },
  {
    id: "deck-construction",
    title: "Deck Construction",
    shortDescription: "Expand your outdoor living space",
    description: "Expand your outdoor living space with our deck construction services. Whether you desire a classic wooden deck or a modern composite design, our team can create a beautiful and durable outdoor space for relaxation and entertainment.",
    features: [
      "Custom deck design",
      "Wood and composite materials",
      "Multi-level decks",
      "Railing systems",
      "Deck staining and sealing",
    ],
  },
  {
    id: "flooring-installation",
    title: "Flooring Installation",
    shortDescription: "Transform your home with beautiful floors",
    description: "Transform your home with our comprehensive flooring installation services. Choose from a variety of options, including hardwood, vinyl, laminate, and more. Our skilled team ensures precise installation for a flawless finish.",
    features: [
      "Hardwood flooring",
      "Luxury vinyl plank (LVP)",
      "Laminate flooring",
      "Tile flooring",
      "Subfloor preparation",
    ],
  },
  {
    id: "interior-painting",
    title: "Interior Painting",
    shortDescription: "Refresh your living space with color",
    description: "Refresh your living space with our interior painting services. From selecting the perfect color palette to flawless execution, we bring a touch of creativity and professionalism to every painting project.",
    features: [
      "Wall and ceiling painting",
      "Trim and molding painting",
      "Cabinet refinishing",
      "Texture application",
      "Color consultation",
    ],
  },
  {
    id: "drywall-installation",
    title: "Drywall Installation/Repairs",
    shortDescription: "Smooth walls for a polished look",
    description: "Achieve a smooth and polished look with our drywall installation and repair services. Whether you need new drywall installed or repairs to existing walls, our team ensures a seamless finish that forms the foundation for a stunning interior.",
    features: [
      "New drywall installation",
      "Drywall repair and patching",
      "Texture matching",
      "Ceiling repairs",
      "Water damage restoration",
    ],
  },
  {
    id: "handyman-services",
    title: "Handyman Services",
    shortDescription: "Small repairs and miscellaneous projects",
    description: "From small repairs to miscellaneous projects, our handyman services cover a range of home improvement needs. Trust our skilled professionals to handle tasks with efficiency and precision.",
    features: [
      "Door and window repairs",
      "Light fixture installation",
      "Shelving and storage",
      "Minor plumbing fixes",
      "General home maintenance",
    ],
  },
] as const;

export type Service = typeof services[number];

export const testimonials = [
  {
    id: "1",
    name: "Liam MacKenzie",
    quote: "White Wall Renovation exceeded our expectations! From the initial consultation to the final brushstroke, their team showcased professionalism and dedication. The basement renovation was flawless, and the attention to detail in the tiling work was exceptional. We now have a space that not only meets our practical needs but also reflects our style. Thank you, White Wall Renovation, for turning our house into a home.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sophia Lavoie",
    quote: "The flooring installation by White Wall Renovation transformed the entire look and feel of my home. Their team's meticulous attention to detail during the hardwood installation and their efficient handling of the laminate flooring in other areas were impressive. The entire project was completed on schedule, and I am thrilled with the outcome. White Wall Renovation is now my go-to for any home improvement project!",
    rating: 5,
  },
  {
    id: "3",
    name: "Ava Thompson",
    quote: "Choosing White Wall Renovation for my deck construction was the best decision. The team's expertise in understanding my vision and recommending the right materials made the process smooth and stress-free. The end result is a stunning deck that has become the focal point of our outdoor gatherings. I highly recommend White Wall Renovation for their professionalism and exceptional craftsmanship.",
    rating: 5,
  },
  {
    id: "4",
    name: "Lisa J.",
    quote: "White Wall Renovation transformed my kitchen into a sleek and modern space. Their attention to detail and professionalism made the entire process seamless. I highly recommend their services for any renovation project.",
    rating: 5,
  },
  {
    id: "5",
    name: "Mark B.",
    quote: "Choosing White Wall Renovation for our basement project was a game-changer. Their team's dedication and expertise turned our basement into a functional and stylish area. Highly satisfied with the results.",
    rating: 5,
  },
] as const;

export type Testimonial = typeof testimonials[number];

export const faqs = [
  {
    question: "How do I get started with a renovation project?",
    answer: "Getting started is easy! Simply contact us through our website, and we'll schedule a consultation to discuss your ideas, budget, and timeline. Our team will guide you through the entire process from concept to completion.",
  },
  {
    question: "What types of renovations do you specialize in?",
    answer: "White Wall Renovation specializes in a variety of home renovations, including kitchen remodels, basement transformations, exterior renovations, flooring installations, interior painting, and more. Our team has the expertise to handle diverse projects, big or small.",
  },
  {
    question: "How long does a typical renovation project take?",
    answer: "The duration of a renovation project depends on factors such as the scope of work, size of the project, and any unforeseen challenges. During the consultation, we'll provide a realistic timeline based on your specific project, ensuring transparency and effective project management.",
  },
  {
    question: "Is White Wall Renovation licensed and insured?",
    answer: "Yes, White Wall Renovation is fully licensed and insured. Our team of professionals adheres to industry standards, and our insurance coverage provides peace of mind for both our clients and our team members. We prioritize safety and compliance in every project we undertake.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We offer free, no-obligation estimates for all renovation projects. Contact us to schedule a consultation, and we'll provide a detailed quote based on your specific needs and requirements.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve homeowners throughout Ontario, with a focus on the Greater Toronto Area and surrounding regions. Contact us to confirm service availability in your specific location.",
  },
] as const;

export type FAQ = typeof faqs[number];

export const companyInfo = {
  name: "White Wall Renovation",
  phone: "+1 519-731-6242",
  phoneFormatted: "(519) 731-6242",
  email: "whitewall.renovation@gmail.com",
  address: "Ontario, Canada",
  socialMedia: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
} as const;

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: "https://whitewallrenovation.com/images/logo.png",
    description:
      "Ontario's premier home renovation company specializing in basement renovations, flooring, tiling, deck construction, and more.",
    url: "https://whitewallrenovation.com",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
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
      url: "https://whitewallrenovation.com",
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
