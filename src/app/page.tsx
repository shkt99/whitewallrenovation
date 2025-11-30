import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ContactForm } from "@/components/sections/ContactForm";
import { services } from "@/lib/schema";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />

      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2
                id="about-heading"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-6"
              >
                Upgrade Your Living Space with White Wall Renovation
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Are you dreaming of a home that reflects your style, meets your
                needs, and stands the test of time? At White Wall Renovation, we
                turn your vision into reality. As Ontario&apos;s trusted house
                renovation experts, we bring a perfect blend of craftsmanship,
                innovation, and personalized service to every project.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  data-testid="button-about-learn-more"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/modern_living_room_renovation.png"
                  alt="Modern home renovation by White Wall Renovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        <AnimatedCounter
                          end={500}
                          duration={2000}
                          isNumber={true}
                        />
                        +
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Projects Completed
                      </p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        <AnimatedCounter
                          end={15}
                          duration={2000}
                          isNumber={true}
                        />
                        +
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Years Experience
                      </p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        <AnimatedCounter
                          end={100}
                          duration={2000}
                          isNumber={false}
                        />
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-muted"
        aria-labelledby="why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2
              id="why-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2"
            >
              Why Choose White Wall Renovation?
            </h2>
          </div>
          <WhyChooseUs />
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
            >
              Our Comprehensive Renovation Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              From basement transformations to beautiful outdoor spaces, we
              offer a complete range of renovation services tailored to your
              needs.
            </p>
          </div>
          <ServicesGrid services={services} columns={4} />
          <div className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-muted"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2
              id="gallery-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
            >
              Transforming Houses Into Homes
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Transforming houses into homes is not just a job for us; it&apos;s a
              commitment to crafting living spaces that echo the unique stories
              and aspirations of our clients.
            </p>
          </div>
          <ProjectGallery limit={6} showFilters={false} />
          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-view-gallery"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="image"
        backgroundImage="/images/home_exterior_renovation.png"
        title="Explore Our Renovation Services"
        description="Are you prepared to take a trip to alter your house? Discover how White Wall Renovation can help you realise your dream house."
      />

      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
            >
              What Our Clients Are Saying
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied
              customers have to say about their experience with White Wall
              Renovation.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-muted"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-4"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Have questions about our renovation services? We&apos;ve got answers.
                If you don&apos;t see your question here, feel free to contact us
                directly.
              </p>
              <FAQAccordion />
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="primary"
        title="Ready to Start Your Renovation Project?"
        description="Contact us today for a free consultation and let's bring your vision to life."
      />
    </main>
  );
}
