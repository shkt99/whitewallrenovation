"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/schema";

interface ServiceCarouselProps {
  services: Service[];
  serviceImages: Record<string, string>;
  currentServiceId: string;
}

export function ServiceCarousel({ services, serviceImages, currentServiceId }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allServices = services.filter((s) => s.id !== currentServiceId);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index % allServices.length);
  }, [allServices.length]);

  return (
    <div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-all"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {allServices.map((service) => (
              <div key={service.id} className="min-w-full px-4">
                <Card className="overflow-visible border border-border bg-card">
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <Image
                      src={serviceImages[service.id] || "/images/basement_renovation_before-after.png"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <Link href={`/services/${service.id}`}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent"
                        data-testid={`button-carousel-${service.id}`}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {allServices.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            data-testid={`button-service-dot-${index}`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
