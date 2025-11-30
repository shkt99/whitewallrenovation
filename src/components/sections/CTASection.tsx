import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/schema";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "primary" | "image";
  backgroundImage?: string;
}

export function CTASection({
  title = "Ready to Transform Your Home?",
  description = "Contact us today to discuss your renovation project. Our team is ready to bring your vision to life with quality craftsmanship and personalized service.",
  variant = "default",
  backgroundImage,
}: CTASectionProps) {
  if (variant === "image" && backgroundImage) {
    return (
      <motion.section 
        className="relative py-20 md:py-28 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <motion.h2 
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-white/80 text-base md:text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  data-testid="button-cta-quote"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold"
                  data-testid="button-cta-call"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {companyInfo.phoneFormatted}
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    );
  }

  if (variant === "primary") {
    return (
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px] font-semibold"
                data-testid="button-cta-quote"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold"
                data-testid="button-cta-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
              {title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="min-w-[180px] font-semibold"
                data-testid="button-cta-quote"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={`tel:${companyInfo.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] font-semibold"
                data-testid="button-cta-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
