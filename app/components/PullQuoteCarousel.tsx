'use client';

import { useState, useEffect } from 'react';
import type { PullQuote } from '../data';

interface PullQuoteCarouselProps {
  pullQuotes: PullQuote[];
}

export default function PullQuoteCarousel({ pullQuotes }: PullQuoteCarouselProps) {
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
    <section className="flex justify-center bg-[var(--c-bg-alt)] px-10 py-24">
      <div className="max-w-3xl w-full text-center relative">
        <div className="font-code text-xs tracking-[0.1em] uppercase text-[var(--c-accent)] mb-10">
          What people say
        </div>
        <div
          className="overflow-hidden relative touch-pan-y min-h-[220px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
          >
            <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed text-[var(--c-fg)] mb-8">
              &ldquo;{currentQuote.text}&rdquo;
            </blockquote>
            <cite className="font-code text-[13px] not-italic text-[var(--c-muted)]">
              {currentQuote.name} · {currentQuote.position}
            </cite>
          </div>
        </div>

        {pullQuotes.length > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {pullQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  transitionToIndex((prevIndex) => (prevIndex === index ? prevIndex : index));
                }}
                className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--c-accent)] w-6'
                    : 'bg-[var(--c-border)] w-3 hover:bg-[var(--c-muted)]'
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
