"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials, type Testimonial } from "@/lib/schema";

const avatars = [
  "/images/professional_headsho_9af1b732.jpg",
  "/images/professional_headsho_c43475da.jpg",
  "/images/professional_headsho_890c8a51.jpg",
  "/images/professional_headsho_ea345bbb.jpg",
  "/images/professional_headsho_9af1b732.jpg",
];

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
          &quot;{testimonial.quote}&quot;
        </blockquote>
        
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Avatar className="w-12 h-12">
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
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setItemsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerView}%` }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </motion.div>
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
