"use client";

import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  const animationClass = {
    up: "animate-slide-up",
    left: "animate-slide-in-left",
    right: "animate-slide-in-right",
    none: "animate-fade-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        hasIntersected && animationClass,
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
