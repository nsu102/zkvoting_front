import { useState } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function useCarousel({
  totalSlides,
  autoPlay = false,
  autoPlayInterval = 3000
}: UseCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
