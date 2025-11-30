"use client";

import { useState, useCallback } from "react";
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
  
  const servicesPerPage = 3;
  const totalPages = Math.ceil(allServices.length / servicesPerPage);
  const currentServices = allServices.slice(
    currentIndex * servicesPerPage,
    (currentIndex + 1) * servicesPerPage
  );

  const goToPage = useCallback((pageIndex: number) => {
    setCurrentIndex(pageIndex % totalPages);
  }, [totalPages]);

  return (
    <div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {currentServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-visible border border-border bg-card hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg relative">
                <Image
                  src={serviceImages[service.id] || "/images/basement_renovation_before-after.png"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-5">
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
                    data-testid={`button-related-${service.id}`}
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid={`button-service-dot-${index}`}
              aria-label={`Go to service page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
