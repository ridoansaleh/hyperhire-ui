"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProfileCard from "../ProfileCard";
import Tooltip from "@/components/atoms/Tooltip";
import type { Profile } from "@/types/Profile";

interface CardSliderProps {
  profiles: Profile[];
}

export default function CardSlider({ profiles }: CardSliderProps) {
  const [items, setItems] = useState<Profile[]>(() =>
    profiles.slice()
  );

  // rotateRight should produce: [last, 0, 1, 2, ...]
  const rotateRight = () => {
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  };

  // rotateLeft should produce: [1, 2, ..., 0]
  const rotateLeft = () => {
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };

  // We style the center item as active — for 3 items, center index is 1
  return (
    <div className="relative flex items-center justify-center">
      <ChevronLeft
        className="h-6 w-6 lg:h-10 lg:w-10 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 left-[-5px] lg:left-[-20px]"
        onClick={rotateLeft}
      />
      <ChevronRight
        className="h-6 w-6 lg:h-10 lg:w-10 cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 right-[-5px] lg:right-[-20px]"
        onClick={rotateRight}
      />

      <div className="flex transition-all duration-500 items-center justify-center px-6">
        {/* Render first three items — with circular rotation this reflects the visible carousel */}
        {items.slice(0, 3).map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className={`transition-all duration-500 transform ${
              i === 1 /* active */
                ? "scale-120 opacity-100 z-30 relative"
                : `${
                    i === 0
                      ? "-z-10 -mr-[160px] lg:-mr-[156px]"
                      : "z-0 -ml-[160px] lg:-ml-[156px]"
                  } scale-90 opacity-80 z-0 relative`
            }`}
          >
            <Tooltip
              display={i === 1}
              bgColor="bg-[#E9F7EF]"
              content={
                <div className="flex items-center text-[#00C696] font-bold">
                  <Image
                    src="/images/dollar-sign.png"
                    alt="Dollar sign"
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                  />{" "}
                  <span>월 ${p.monthlyIncome}만원</span>
                </div>
              }
              arrowPosition="bottom-center"
            >
              <div className="bg-white rounded-3xl p-0">
                <ProfileCard {...p} />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
