import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@shared/schema";
import heroImage from "@assets/generated_images/modern_living_room_renovation.png";
import { useEffect, useRef } from "react";
interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  backgroundImage?: string;
  height?: "full" | "medium" | "small";
}

export function Hero({
  title = "White Wall Renovation",
  subtitle = "Your Premier House Renovation",
  description = "Transforming houses into homes across Ontario with quality craftsmanship, personalized service, and results that exceed expectations.",
  showCTA = true,
  backgroundImage = heroImage,
  height = "full",
}: HeroProps) {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  };

  // Parallax effect logic

  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
      aria-label="Hero section"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
        role="img"
        aria-label="Modern renovated home interior"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center will-change-transform"
      >
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <p className="text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
            Welcome to
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            {title}
          </h1>
          <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white/90 font-medium">
            {subtitle}
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="min-w-[200px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  data-testid="button-hero-quote"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold"
                  data-testid="button-hero-call"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {companyInfo.phoneFormatted}
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
