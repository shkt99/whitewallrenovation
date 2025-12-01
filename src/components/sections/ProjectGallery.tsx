"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const galleryProjects = [
  {
    id: 1,
    image: "/images/modern_living_room_renovation.png",
    title: "Modern Living Room",
    category: "Interior",
  },
  {
    id: 2,
    image: "/images/modern_kitchen_renovation.png",
    title: "Kitchen Renovation",
    category: "Kitchen",
  },
  {
    id: 3,
    image: "/images/basement_renovation_before-after.png",
    title: "Basement Transformation",
    category: "Basement",
  },
  {
    id: 4,
    image: "/images/luxury_bathroom_renovation.png",
    title: "Luxury Bathroom",
    category: "Bathroom",
  },
  {
    id: 5,
    image: "/images/hardwood_flooring_installation.png",
    title: "Hardwood Flooring",
    category: "Flooring",
  },
  {
    id: 6,
    image: "/images/professional_bathroom_tiling.png",
    title: "Professional Tiling",
    category: "Bathroom",
  },
  {
    id: 7,
    image: "/images/deck_construction_outdoor.png",
    title: "Deck Construction",
    category: "Outdoor",
  },
  {
    id: 8,
    image: "/images/home_exterior_renovation.png",
    title: "Home Exterior",
    category: "Outdoor",
  },
  {
    id: 9,
    image: "/images/modern_fence_installation.png",
    title: "Modern Fence",
    category: "Outdoor",
  },
  {
    id: 10,
    image: "/images/interior_painting_service.png",
    title: "Interior Painting",
    category: "Interior",
  },
  {
    id: 11,
    image: "/images/elegant_dining_room_remodel.png",
    title: "Elegant Dining Room",
    category: "Interior",
  },
  {
    id: 12,
    image: "/images/contemporary_bedroom_design.png",
    title: "Contemporary Bedroom",
    category: "Interior",
  },
  {
    id: 13,
    image: "/images/sleek_kitchen_island.png",
    title: "Sleek Kitchen Island",
    category: "Kitchen",
  },
  {
    id: 14,
    image: "/images/custom_cabinetry_kitchen.png",
    title: "Custom Cabinetry",
    category: "Kitchen",
  },
  {
    id: 15,
    image: "/images/gourmet_kitchen_layout.png",
    title: "Gourmet Kitchen Layout",
    category: "Kitchen",
  },
  {
    id: 16,
    image: "/images/spa_style_bathroom.png",
    title: "Spa Style Bathroom",
    category: "Bathroom",
  },
  {
    id: 17,
    image: "/images/modern_shower_enclosure.png",
    title: "Modern Shower Enclosure",
    category: "Bathroom",
  },
  {
    id: 18,
    image: "/images/marble_bathroom_vanity.png",
    title: "Marble Bathroom Vanity",
    category: "Bathroom",
  },
  {
    id: 19,
    image: "/images/finished_basement_living_space.png",
    title: "Finished Basement Living Space",
    category: "Basement",
  },
  {
    id: 20,
    image: "/images/basement_entertainment_room.png",
    title: "Basement Entertainment Room",
    category: "Basement",
  },
  {
    id: 21,
    image: "/images/polished_concrete_flooring.png",
    title: "Polished Concrete Flooring",
    category: "Flooring",
  },
  {
    id: 22,
    image: "/images/laminate_flooring_installation.png",
    title: "Laminate Flooring Installation",
    category: "Flooring",
  },
  {
    id: 23,
    image: "/images/luxury_vinyl_plank_flooring.png",
    title: "Luxury Vinyl Plank",
    category: "Flooring",
  },
  {
    id: 24,
    image: "/images/patio_expansion_outdoor.png",
    title: "Patio Expansion",
    category: "Outdoor",
  },
  {
    id: 25,
    image: "/images/landscape_design_outdoor.png",
    title: "Landscape Design",
    category: "Outdoor",
  },
  {
    id: 26,
    image: "/images/pergola_installation_outdoor.png",
    title: "Pergola Installation",
    category: "Outdoor",
  },
];

const categories = [
  "All",
  "Interior",
  "Kitchen",
  "Bathroom",
  "Basement",
  "Flooring",
  "Outdoor",
];

interface ProjectGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export function ProjectGallery({
  limit,
  showFilters = true,
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects = galleryProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const displayProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayProjects.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? displayProjects.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            data-testid={`gallery-item-${project.id}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-8 h-8 text-white mb-2" />
              <p className="text-white font-semibold text-lg">
                {project.title}
              </p>
              <Badge
                variant="secondary"
                className="mt-2 bg-white/20 text-white border-0"
              >
                {project.category}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent
          className="max-w-5xl w-full p-0 bg-black/95 border-0"
          aria-describedby={undefined}
        >
          <VisuallyHidden>
            <DialogTitle>
              {selectedImage !== null
                ? displayProjects[selectedImage].title
                : "Gallery Image"}
            </DialogTitle>
          </VisuallyHidden>
          <div className="abosolute">
            <Button
              variant="ghost"
              size="icon"
              className=" border-2 h-8 w-8 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              data-testid="button-close-lightbox"
            >
              <X className="w-6 h-6" />
            </Button>

            {selectedImage !== null && (
              <>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={displayProjects[selectedImage].image}
                    alt={displayProjects[selectedImage].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-semibold text-lg">
                    {displayProjects[selectedImage].title}
                  </p>
                  <p className="text-white/70 text-sm">
                    {displayProjects[selectedImage].category}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={goToPrev}
                  aria-label="Previous image"
                  data-testid="button-lightbox-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={goToNext}
                  aria-label="Next image"
                  data-testid="button-lightbox-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
