"use client";

import React from "react";
import clsx from "clsx";
import FadeInUp from "@/components/atoms/animations/FadeInUp";
import { useDeviceType } from "@/hooks/useDeviceType";

type ArrowPosition =
  | "bottom-left"
  | "bottom-right"
  | "bottom-center"
  | "top-left"
  | "top-right";

interface TooltipProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  display?: boolean;
  bgColor?: string;
  arrowPosition?: ArrowPosition;
  delayClass?: string;
}

export default function Tooltip({
  children,
  content,
  display = true,
  bgColor = "bg-[#000]",
  arrowPosition = "bottom-left",
  delayClass = ""
}: TooltipProps) {
  const { isMobile } = useDeviceType();

  const borderColorMobile =
    (bgColor.split(" ")[0] || "").match(/\[(.*?)\]/)?.[1] || "#000";
  const borderColorDesktop =
    (bgColor.split(" ")[1] || "").match(/\[(.*?)\]/)?.[1] || borderColorMobile;
  const borderColor = isMobile ? borderColorMobile : borderColorDesktop;

  const arrowClasses = clsx(
    "absolute w-0 h-0 border-[6px] border-transparent",
    {
      "-bottom-3 left-2": arrowPosition === "bottom-left",
      "-bottom-3 right-2": arrowPosition === "bottom-right",
      "-bottom-3 left-1/2 -translate-x-1/2": arrowPosition === "bottom-center",
      "-top-3 left-2": arrowPosition === "top-left",
      "-top-3 right-2": arrowPosition === "top-right",
    }
  );

  return (
    <div className="relative inline-block">
      {children}
      <FadeInUp
        className={clsx(
          "absolute min-w-max px-3 py-2 text-sm text-white rounded shadow-lg transition-opacity duration-200",
          bgColor,
          {
            "-top-14 left-0": arrowPosition.startsWith("bottom"),
            "-top-14 left-1/2 -translate-x-1/2":
              arrowPosition === "bottom-center",
            "top-14 left-0": arrowPosition.startsWith("top"),
            hidden: !display,
            [`${delayClass}`]: !!delayClass
          }
        )}
      >
        {content}

        {/* Arrow */}
        <span
          style={
            arrowPosition.includes("bottom")
              ? { borderTopColor: borderColor }
              : arrowPosition.includes("top")
              ? { borderBottomColor: borderColor }
              : {}
          }
          className={arrowClasses}
        />
      </FadeInUp>
    </div>
  );
}
