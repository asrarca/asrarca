"use client";

import { useEffect, useState } from "react";

type CarouselProps = {
  items: string[];
  speed?: number
};

export default function Carousel({items, speed}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  if (!speed) {
    speed = 5000;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 500); // match fade duration
    }, speed); // time per item
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden">
      <ul className="relative h-full w-full text-2xl">
        {items.map((item, i) => {
          const isActive = i === index;
          return (
            <li
              key={i}
              className={`absolute text-gray-400 py-4 inset-0 flex items-center justify-left transition-all duration-500 ease-in-out
                ${isActive && !isAnimating ? "opacity-100 translate-y-0" : ""}
                ${isActive && isAnimating ? "opacity-0 -translate-y-full" : ""}
                ${!isActive && !isAnimating ? "opacity-0 translate-y-full" : ""}
                ${!isActive && isAnimating && i === (index + 1) % items.length ? "opacity-100 translate-y-0" : ""}
              `}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
