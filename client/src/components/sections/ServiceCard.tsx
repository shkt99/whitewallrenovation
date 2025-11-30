import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@shared/schema";

import basementImage from "@assets/generated_images/basement_renovation_before-after.png";
import tilingImage from "@assets/generated_images/professional_bathroom_tiling.png";
import fenceImage from "@assets/generated_images/modern_fence_installation.png";
import deckImage from "@assets/generated_images/deck_construction_outdoor.png";
import flooringImage from "@assets/generated_images/hardwood_flooring_installation.png";
import paintingImage from "@assets/generated_images/interior_painting_service.png";
import drywallImage from "@assets/generated_images/drywall_installation_work.png";
import handymanImage from "@assets/generated_images/handyman_tools_organized.png";

const serviceImages: Record<string, string> = {
  "basement-renovation": basementImage,
  "tiling-services": tilingImage,
  "fence-installation": fenceImage,
  "deck-construction": deckImage,
  "flooring-installation": flooringImage,
  "interior-painting": paintingImage,
  "drywall-installation": drywallImage,
  "handyman-services": handymanImage,
};

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

export function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  const image = serviceImages[service.id] || basementImage;

  return (
    <Card className="group overflow-visible border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={`${service.title} - White Wall Renovation`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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
              className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent group/btn"
              data-testid={`button-service-${service.id}`}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
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

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
