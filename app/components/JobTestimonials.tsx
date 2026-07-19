'use client';

import { useState, useEffect } from 'react';
import type { Testimonial } from '../data';

interface JobTestimonialsProps {
  testimonials: Testimonial[];
}

export default function JobTestimonials({ testimonials }: JobTestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const many = testimonials.length > 1;

  const goTo = (updater: (prev: number) => number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(updater);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    if (!many) return;
    const id = setInterval(() => {
      goTo((i) => (i + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(id);
  }, [many, testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[index];

  return (
    <div>
      <div className="border-l-[3px] border-[var(--c-accent)] bg-[var(--c-card-bg)] px-5 py-4 rounded-r-lg min-h-[150px]">
        <div className={`transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-[15px] leading-relaxed text-[var(--c-fg)] mb-3">&ldquo;{current.text}&rdquo;</p>
          <p className="font-code text-xs text-[var(--c-muted)]">{current.name}</p>
        </div>
      </div>

      {many && (
        <div className="flex gap-1.5 mt-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(() => i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-[var(--c-accent)] w-6'
                  : 'bg-[var(--c-border)] w-3 hover:bg-[var(--c-muted)]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
