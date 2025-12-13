"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeInUpProps {
  id?: string;
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function FadeInUp({
  id,
  children,
  className = "",
  duration = 500,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all duration-${duration} ease-out 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
