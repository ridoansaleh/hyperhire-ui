"use client";

import { useEffect, useRef, useState } from "react";
import FeatureItem from "@/components/molecules/FeatureItem";
import type { Feature } from "@/types/Feature";

interface FeatureSliderProps {
  items: Feature[];
  interval?: number;
  itemWidth?: number;
}

export default function FeatureSlider({
  items,
  interval = 5000,
  itemWidth = 210,
}: FeatureSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Clone the items so we can loop smoothly
  const loopItems = [...items, ...items];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const total = items.length;

    // Smooth transition
    sliderRef.current.style.transition = "transform 0.5s ease";
    // 16 => 16px coming from 'gap-4' class of the slider
    sliderRef.current.style.transform = `translateX(-${
      index * (itemWidth + 16)
    }px)`;

    // When reaching second half => jump back silently
    if (index === total) {
      setTimeout(() => {
        if (!sliderRef.current) return;

        sliderRef.current.style.transition = "none"; // no animation
        sliderRef.current.style.transform = `translateX(0px)`;
        setIndex(0);
      }, 500); // wait the animation duration
    }
  }, [index, itemWidth, items.length]);

  return (
    <div className="flex overflow-x-auto whitespace-nowrap">
      <div ref={sliderRef} className="flex gap-4">
        {loopItems.map((p, i) => (
          <FeatureItem key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
