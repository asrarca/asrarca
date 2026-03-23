'use client';

import { useState, useEffect } from 'react';

interface PullQuote {
  text: string;
  name: string;
  position: string;
}

interface PullQuoteCarouselProps {
  pullQuotes: PullQuote[];
  fontClassName: string;
}

export default function PullQuoteCarousel({ pullQuotes, fontClassName }: PullQuoteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const transitionToIndex = (indexUpdater: (prevIndex: number) => number) => {
    if (isTransitioning || pullQuotes.length <= 1) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = indexUpdater(prevIndex);
        return nextIndex;
      });
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    transitionToIndex((prevIndex) => (prevIndex + 1) % pullQuotes.length);
  };

  const goToPrevious = () => {
    transitionToIndex((prevIndex) => (prevIndex - 1 + pullQuotes.length) % pullQuotes.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    if (pullQuotes.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pullQuotes.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [pullQuotes.length]);

  if (!pullQuotes || pullQuotes.length === 0) {
    return null;
  }

  const currentQuote = pullQuotes[currentIndex];

  return (
    <section className="flex justify-center py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 min-h-[480px]">
      <div className="max-w-4xl w-full text-center relative">
        <div
          className="overflow-hidden relative touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <svg className="absolute -top-4 left-0 w-18 h-18 text-gray-300 dark:text-gray-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z"/>
          </svg>

          <div
            className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
          >
            <blockquote className={`text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed ${fontClassName}`}>
              &ldquo;{currentQuote.text}&rdquo;
            </blockquote>
            <cite className="text-lg md:text-xl text-gray-700 dark:text-gray-300 not-italic">
              — {currentQuote.name}
              <div className="text-md text-gray-500 dark:text-gray-400">{currentQuote.position}</div>
            </cite>
          </div>

          <svg className="absolute -bottom-4 right-0 w-18 h-18 text-gray-300 dark:text-gray-600 opacity-50 rotate-180" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z"/>
          </svg>
        </div>

        {/* Carousel Indicators */}
        {pullQuotes.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-8">
            {pullQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  transitionToIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
                }}
                className={`w-4 h-4 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gray-600 dark:bg-gray-300 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
