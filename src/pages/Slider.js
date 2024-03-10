import React, { useState, useEffect, useCallback } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = useCallback(() => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleNextSlide]);

  return (
    <div id="default-carousel" className="relative max-w-7xl mx-auto mt-7" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 brightness-50">
        {slides.map((slide, index) => (
          <div key={index} className={`${currentSlide === index ? '' : 'hidden'} duration-700 ease-in-out transition-opacity`} data-carousel-item>
            <img src={slide} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrevSlide}>
        <GrFormPrevious className="w-10 h-10 text-cyan-50" />
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextSlide}>
        <GrFormNext className="w-10 h-10 text-cyan-50" />
      </button>
    </div>
  );
};

// Array of image URLs for slides
const slides = [
  'https://source.unsplash.com/random?spidermans',
  'https://source.unsplash.com/random/1600x800?cyberpunk',
  'https://source.unsplash.com/random/1600x800?marvels',
  'https://source.unsplash.com/random/1600x800?thor',
];









