import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { services, companyInfo } from "@/lib/schema";

const serviceImages: Record<string, string> = {
  "basement-renovation": "/images/basement_renovation_before-after.png",
  "tiling-services": "/images/professional_bathroom_tiling.png",
  "fence-installation": "/images/modern_fence_installation.png",
  "deck-construction": "/images/deck_construction_outdoor.png",
  "flooring-installation": "/images/hardwood_flooring_installation.png",
  "interior-painting": "/images/interior_painting_service.png",
  "drywall-installation": "/images/drywall_installation_work.png",
  "handyman-services": "/images/handyman_tools_organized.png",
};

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We start with a detailed discussion of your vision, needs, and budget.",
  },
  {
    step: 2,
    title: "Project Planning",
    description: "Our team creates a comprehensive plan with timeline and material selections.",
  },
  {
    step: 3,
    title: "Expert Execution",
    description: "Skilled craftsmen bring your vision to life with attention to every detail.",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description: "We ensure everything meets your expectations before project completion.",
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);
  if (!service) {
    return {
      title: "Service Not Found | White Wall Renovation",
    };
  }
  return {
    title: `${service.title} | White Wall Renovation - Ontario`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} services by White Wall Renovation in Ontario. Get a free quote today!`,
  };
}

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const heroImage = serviceImages[service.id] || "/images/basement_renovation_before-after.png";

  return (
    <main id="main-content">
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-background" aria-labelledby="service-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2
                id="service-heading"
                className="font-heading font-bold text-3xl md:text-4xl mb-6"
              >
                {service.title}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mb-12">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  What&apos;s Included:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="font-heading font-semibold text-xl mb-6">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 p-4 rounded-lg border border-border bg-card"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={heroImage}
                  alt={`${service.title} project example`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ContactForm />

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-4">
                      Quick Contact
                    </h3>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center gap-3 p-4 rounded-lg bg-primary text-primary-foreground font-medium"
                      data-testid="link-service-phone"
                    >
                      <Phone className="w-5 h-5" />
                      {companyInfo.phoneFormatted}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="related-heading"
              className="font-heading font-bold text-2xl md:text-3xl"
            >
              Other Services You Might Like
            </h2>
          </div>

          <ServiceCarousel 
            services={services} 
            serviceImages={serviceImages}
            currentServiceId={service.id}
          />
        </div>
      </section>

      <CTASection
        variant="primary"
        title={`Ready to Get Started with ${service.title}?`}
        description="Contact us today for a free consultation and quote."
      />
    </main>
  );
}
