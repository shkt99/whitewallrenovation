import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import basementImage from "@assets/generated_images/basement_renovation_before-after.png";
import tilingImage from "@assets/generated_images/professional_bathroom_tiling.png";
import deckImage from "@assets/generated_images/deck_construction_outdoor.png";
import flooringImage from "@assets/generated_images/hardwood_flooring_installation.png";
import paintingImage from "@assets/generated_images/interior_painting_service.png";
import kitchenImage from "@assets/generated_images/modern_kitchen_renovation.png";
import bathroomImage from "@assets/generated_images/luxury_bathroom_renovation.png";
import exteriorImage from "@assets/generated_images/home_exterior_renovation.png";
import fenceImage from "@assets/generated_images/modern_fence_installation.png";
import livingRoomImage from "@assets/generated_images/modern_living_room_renovation.png";

const galleryProjects = [
  { id: 1, image: livingRoomImage, title: "Modern Living Room", category: "Interior" },
  { id: 2, image: kitchenImage, title: "Kitchen Renovation", category: "Kitchen" },
  { id: 3, image: basementImage, title: "Basement Transformation", category: "Basement" },
  { id: 4, image: bathroomImage, title: "Luxury Bathroom", category: "Bathroom" },
  { id: 5, image: flooringImage, title: "Hardwood Flooring", category: "Flooring" },
  { id: 6, image: tilingImage, title: "Professional Tiling", category: "Bathroom" },
  { id: 7, image: deckImage, title: "Deck Construction", category: "Outdoor" },
  { id: 8, image: exteriorImage, title: "Home Exterior", category: "Outdoor" },
  { id: 9, image: fenceImage, title: "Modern Fence", category: "Outdoor" },
  { id: 10, image: paintingImage, title: "Interior Painting", category: "Interior" },
];

const categories = ["All", "Interior", "Kitchen", "Bathroom", "Basement", "Flooring", "Outdoor"];

interface ProjectGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export function ProjectGallery({ limit, showFilters = true }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects = galleryProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

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
          <div
            key={project.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            data-testid={`gallery-item-${project.id}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="w-8 h-8 text-white mb-2" />
              <p className="text-white font-semibold text-lg">{project.title}</p>
              <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-0">
                {project.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-0" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>
              {selectedImage !== null ? displayProjects[selectedImage].title : "Gallery Image"}
            </DialogTitle>
          </VisuallyHidden>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              data-testid="button-close-lightbox"
            >
              <X className="w-6 h-6" />
            </Button>

            {selectedImage !== null && (
              <>
                <img
                  src={displayProjects[selectedImage].image}
                  alt={displayProjects[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
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
