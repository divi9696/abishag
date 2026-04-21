'use client';

import { useState, useEffect } from 'react';

interface SlideshowProps {
  images?: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Slideshow({
  images = [],
  autoPlay = true,
  interval = 5000
}: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // Default placeholder images if none provided
  const slides = images.length > 0 ? images : [
    'placeholder-1',
    'placeholder-2',
    'placeholder-3',
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Slideshow Container */}
      <div className="relative w-full h-96 md:h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden shadow-lg">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl mb-4">
                  {index === 0 && '👥'}
                  {index === 1 && '❤️'}
                  {index === 2 && '😊'}
                </div>
                <p className="text-gray-600 text-lg font-semibold">
                  {slide === 'placeholder-1' && 'Photo Gallery 1'}
                  {slide === 'placeholder-2' && 'Photo Gallery 2'}
                  {slide === 'placeholder-3' && 'Photo Gallery 3'}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Your photos will appear here when client provides them
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 left-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center gap-2"
          aria-label="Toggle autoplay"
        >
          {isAutoPlay ? (
            <>
              <span>⏸</span>
              <span className="hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <span>▶</span>
              <span className="hidden sm:inline">Play</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
