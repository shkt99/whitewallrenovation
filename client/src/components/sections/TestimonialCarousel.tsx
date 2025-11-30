import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials, type Testimonial } from "@shared/schema";

import avatar1 from "@assets/stock_images/professional_headsho_9af1b732.jpg";
import avatar2 from "@assets/stock_images/professional_headsho_c43475da.jpg";
import avatar3 from "@assets/stock_images/professional_headsho_890c8a51.jpg";
import avatar4 from "@assets/stock_images/professional_headsho_ea345bbb.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar1];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <Card className="h-full border border-border bg-card">
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        
        <Quote className="w-8 h-8 text-primary/20 mb-4" />
        
        <blockquote className="flex-1 text-muted-foreground text-sm md:text-base leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatars[index % avatars.length]} alt={testimonial.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {testimonial.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">Verified Customer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          aria-label="Previous testimonial"
          data-testid="button-testimonial-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-testimonial-dot-${index}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          aria-label="Next testimonial"
          data-testid="button-testimonial-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
