"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/schema";

const serviceImages: Record<string, string> = {
  "basement-renovation": "/images/basement_renovation_before-after.png",
  "tiling-services": "/images/professional_bathroom_tiling.png",
  "bathroom-remodelling": "/images/bathroom_remodelling.png",
  "deck-construction": "/images/deck_construction_outdoor.png",
  "flooring-installation": "/images/hardwood_flooring_installation.png",
  "interior-painting": "/images/interior_painting_service.png",
  "drywall-installation": "/images/drywall_installation_work.png",
  "handyman-services": "/images/handyman_tools_organized.png",
};

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  const image = serviceImages[service.id] || "/images/basement_renovation_before-after.png";

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-visible border border-border bg-card transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden rounded-t-lg relative">
        <Image
          src={image}
          alt={`${service.title} - White Wall Renovation`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-5 md:p-6">
        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {service.shortDescription}
        </p>
        {showLearnMore && (
          <Link href={`/services/${service.id}`}>
            <Button
              variant="ghost"
              className="p-0 h-auto font-medium text-accent hover:text-accent/80 hover:bg-transparent group/btn"
              data-testid={`button-service-${service.id}`}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        )}
      </CardContent>
      </Card>
    </motion.div>
  );
}

interface ServicesGridProps {
  services: readonly Service[];
  columns?: 2 | 3 | 4;
}

export function ServicesGrid({ services, columns = 3 }: ServicesGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      className={`grid ${gridCols[columns]} gap-6 md:gap-8`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
}
