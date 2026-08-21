import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';
import './HeroCarousel.css';

// Create a 3x repeated array for seamless infinite looping
const TRIPLE_SLIDES = [...heroSlides, ...heroSlides, ...heroSlides];
const REAL_COUNT = heroSlides.length; // 3
const INITIAL_INDEX = REAL_COUNT; // 3 (first item of middle set)

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Get real slide index (0, 1, 2)
  const realSlideIndex = activeIndex % REAL_COUNT;

  const goToIndex = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setActiveIndex(newIndex);
  }, []);

  const nextSlide = useCallback(() => {
    goToIndex(activeIndex + 1);
  }, [activeIndex, goToIndex]);

  const prevSlide = useCallback(() => {
    goToIndex(activeIndex - 1);
  }, [activeIndex, goToIndex]);

  // Handle seamless wrap-around jump when reaching edges of triple array
  const handleTransitionEnd = () => {
    if (activeIndex >= REAL_COUNT * 2) {
      // Reached end of middle set, jump seamlessly back to middle set
      setIsTransitioning(false);
      setActiveIndex(activeIndex - REAL_COUNT);
    } else if (activeIndex < REAL_COUNT) {
      // Reached start of middle set, jump seamlessly forward to middle set
      setIsTransitioning(false);
      setActiveIndex(activeIndex + REAL_COUNT);
    }
  };

  // Auto-advance continuously (faster 3000ms speed)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section
      className="hero-carousel-section"
      aria-label="Featured collections carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="hero-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={`hero-slides-track ${isTransitioning ? 'track-transition' : ''}`}
          style={{
            transform: `translateX(calc(50% - (${activeIndex} * (var(--hero-slide-width) + var(--hero-slide-gap)) + var(--hero-slide-width) / 2)))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {TRIPLE_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={`${slide.id}-${index}`}
                className={`hero-slide-item ${isActive ? 'hero-slide-active' : 'hero-slide-peek'}`}
                onClick={() => !isActive && goToIndex(index)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${(index % REAL_COUNT) + 1} of ${REAL_COUNT}: ${slide.title}`}
              >
                <div className="hero-slide-card">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-slide-image"
                    loading={index === INITIAL_INDEX ? 'eager' : 'lazy'}
                  />
                  <div
                    className={`hero-slide-overlay ${isActive ? 'overlay-active' : 'overlay-peek'}`}
                  />
                  {isActive && (
                    <div className="hero-slide-content">
                      <h1 className="hero-title">{slide.title}</h1>
                      <p className="hero-subtitle">
                        {slide.subtitle.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i > 0 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Indicators */}
      <div className="hero-indicators" role="tablist" aria-label="Slide navigation">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-indicator ${index === realSlideIndex ? 'hero-indicator-active' : ''}`}
            onClick={() => goToIndex(INITIAL_INDEX + index)}
            role="tab"
            aria-selected={index === realSlideIndex}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
