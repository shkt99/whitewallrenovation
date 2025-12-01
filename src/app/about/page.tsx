import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { CoreValues, WhyChooseReasons } from "@/components/sections/WhyChooseUs";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | White Wall Renovation - Ontario Home Renovation Experts",
  description: "Learn about White Wall Renovation, Ontario's trusted home renovation company. Our experienced team delivers quality craftsmanship and personalized service for every project.",
};

export default function About() {
  return (
    <main id="main-content">
      <PageHero
        title="Your Trusted Partner in House Renovation"
        subtitle="Learn more about White Wall Renovation and our commitment to excellence"
        backgroundImage="/images/luxury_bathroom_renovation.png"
      />

      <section className="py-16 md:py-24 bg-background" aria-labelledby="about-intro">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/modern_kitchen_renovation.png"
                alt="White Wall Renovation team at work"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About
              </span>
              <h2
                id="about-intro"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-6"
              >
                About White Wall Renovation
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                White Wall Renovation is your one-stop shop for all your home renovation 
                needs. As the leading house renovation company, we pride ourselves on our 
                commitment to quality, integrity and unbeatable results.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                At White Wall Renovation, we are more than just renovators; we are your 
                partners in creating the home you&apos;ve always envisioned. Our journey began 
                with a passion for turning houses into homes, and over the years, we have 
                honed our skills, built a team of dedicated professionals, and garnered a 
                reputation for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2
              id="values-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2"
            >
              Our Core Values
            </h2>
          </div>
          <CoreValues />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Us
              </span>
              <h2
                id="why-heading"
                className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-6"
              >
                Why Choose White Wall Renovation?
              </h2>
              <WhyChooseReasons />
            </div>
            <div className="lg:sticky lg:top-24 relative aspect-[4/3]">
              <Image
                src="/images/hardwood_flooring_installation.png"
                alt="Quality craftsmanship by White Wall Renovation"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" aria-labelledby="promise-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Promise
            </span>
            <h2
              id="promise-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2"
            >
              What We Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Prioritize Your Vision",
                description:
                  "Your vision is our guide. We work closely with you to understand your goals and bring your dream home to life.",
              },
              {
                title: "Deliver Quality Craftsmanship",
                description:
                  "From the first nail to the final coat of paint, we take pride in delivering craftsmanship that stands the test of time.",
              },
              {
                title: "Ensure a Smooth Experience",
                description:
                  "Renovations can be daunting, but with White Wall Renovation, it's a seamless journey. We manage every aspect of the project, keeping you informed and involved at every step.",
              },
            ].map((promise, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 md:p-8 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading font-bold text-3xl md:text-4xl mt-2"
            >
              What Our Clients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
          >
            Join Hands with White Wall Renovation
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            We invite you to explore our portfolio, read testimonials from satisfied clients, 
            and envision the possibilities for your home. Whether it&apos;s a kitchen makeover, 
            a bathroom remodel, or a complete home transformation, White Wall Renovation is 
            your dedicated partner in creating spaces that inspire and endure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/gallery">
              <Button size="lg" variant="outline" data-testid="button-view-portfolio">
                View Our Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-in-touch">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="primary"
        title="Ready to Transform Your Home?"
        description="Contact us today for a free consultation and quote."
      />
    </main>
  );
}
