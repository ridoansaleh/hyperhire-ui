"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ChildItem {
  label: string;
  href: string;
}

interface MobileNavItemProps {
  label: string;
  childrenItems?: ChildItem[];
  onNavigate: () => void;
}

export default function MobileNavItem({
  label,
  childrenItems,
  onNavigate,
}: MobileNavItemProps) {
  const [open, setOpen] = useState(false);

  if (!childrenItems) {
    return (
      <Link href="/services" onClick={onNavigate} className="text-lg">
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-lg"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-4 ml-4 flex flex-col gap-3">
          {childrenItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="text-base"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
