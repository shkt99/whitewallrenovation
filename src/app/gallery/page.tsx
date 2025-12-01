import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery | White Wall Renovation - Before & After Transformations",
  description: "Browse our gallery of stunning home renovation projects. See before and after transformations of basements, bathrooms, kitchens, decks, and more across Ontario.",
};

export default function Gallery() {
  return (
    <main id="main-content">
      <PageHero
        title="Gallery"
        subtitle="Transformative Renovations by White Wall Renovation"
        backgroundImage="/images/modern_living_room_renovation.png"
      />

      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="gallery-intro"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              Welcome to our Gallery, where we showcase the stunning
              transformations achieved by White Wall Renovation. Our commitment
              to quality craftsmanship, innovative design, and personalized
              service is evident in every project we undertake. Take a visual
              journey through our portfolio of homes we&apos;ve had the privilege of
              renovating.
            </p>
          </div>
          <ProjectGallery showFilters={true} />
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-muted"
        aria-labelledby="before-after-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Before & After
            </span>
            <h2
              id="before-after-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
            >
              See the Transformation
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Drag the slider to see the dramatic before and after
              transformations of our renovation projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/drywall_installation_work.png"
              afterImage="/images/after.png"
              beforeLabel="Before"
              afterLabel="After"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
          >
            Ready to Start Your Own Transformation?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Your dream home is just a conversation away. Contact us today to
            discuss your renovation project and get a free quote.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-gallery-quote">
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection
        variant="primary"
        title="Let's Create Something Beautiful Together"
        description="Contact White Wall Renovation today and let's bring your vision to life."
      />
    </main>
  );
}
