import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { services, companyInfo } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Services | White Wall Renovation - Basement, Flooring, Tiling & More",
  description: "Explore our comprehensive home renovation services: basement finishing, tiling, flooring, deck construction, interior painting, drywall installation, and handyman services across Ontario.",
  keywords: [
    "renovation services Ontario",
    "basement renovation",
    "flooring installation",
    "tiling services",
    "deck construction",
    "interior painting",
    "drywall installation",
    "handyman services",
  ],
  openGraph: {
    title: "Our Services | White Wall Renovation",
    description: "Professional home renovation services tailored to your needs.",
    type: "website",
    url: "https://whitewallrenovation.com/services",
    images: [
      {
        url: `/images/modern_kitchen_renovation.png`,
        width: 1200,
        height: 630,
        alt: "White Wall Renovation Services",
      },
    ],
  },
  alternates: {
    canonical: "https://whitewallrenovation.com/services",
  },
};

export default function Services() {
  return (
    <main id="main-content">
      <PageHero
        title="White Wall Renovation"
        subtitle="Transforming Homes, One Project at a Time"
        backgroundImage="/images/modern_kitchen_renovation.png"
      />

      <section className="py-16 md:py-24 bg-background" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
            >
              Our Renovation Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Every home is different, and so are our clients&apos; renovation needs. That&apos;s 
              why White Wall Renovation is the go-to house renovation company for quality 
              craftsmanship, personal service, and fast delivery.
            </p>
          </div>
          <ServicesGrid services={services} columns={4} />
        </div>
      </section>

      <CTASection
        variant="image"
        backgroundImage="/images/home_exterior_renovation.png"
        title="Your Vision, Our Expertise"
        description="Every home is different, and so are our clients' renovation needs. That's why White Wall Renovation is the go-to house renovation company for quality craftsmanship, personal service, and fast delivery."
      />

      <section className="py-16 md:py-24 bg-muted" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h2
                id="contact-heading"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
              >
                Start Your Renovation Journey
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Ready to discuss your renovation project or have questions? Reach out to us 
                for a consultation. We look forward to hearing from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      data-testid="link-services-phone"
                    >
                      {companyInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    What to expect:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Free initial consultation",
                      "Detailed project assessment",
                      "Transparent pricing quote",
                      "Flexible scheduling options",
                      "Professional project management",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
