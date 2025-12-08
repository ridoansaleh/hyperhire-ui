"use client";

import React from "react";
import clsx from "clsx";

type ArrowPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right";

interface TooltipProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  bgColor?: string;
  marginTop?: string;
  arrowPosition?: ArrowPosition;
}

export default function Tooltip({
  children,
  content,
  bgColor = "bg-[#000]",
  marginTop = "mt-4",
  arrowPosition = "bottom-left",
}: TooltipProps) {
  const borderColor = bgColor.match(/\[(.*?)\]/)?.[1] || "#000";

  const arrowClasses = clsx(
    "absolute w-0 h-0 border-[6px] border-transparent",
    {
      "-bottom-3 left-2": arrowPosition === "bottom-left",
      "-bottom-3 right-2": arrowPosition === "bottom-right",
      "-top-3 left-2": arrowPosition === "top-left",
      "-top-3 right-2": arrowPosition === "top-right",
    }
  );

  return (
    <div className={`relative inline-block ${marginTop}`}>
      {children}
      <div
        className={clsx(
          "absolute px-3 py-2 text-sm text-white rounded shadow-lg transition-opacity duration-200",
          bgColor,
          {
            "-top-14 left-0": arrowPosition.startsWith("bottom"),
            "top-14 left-0": arrowPosition.startsWith("top"),
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
      </div>
    </div>
  );
}
