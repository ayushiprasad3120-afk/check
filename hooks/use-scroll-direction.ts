"use client";

import { useEffect, useState } from "react";

const THRESHOLD_PX = 80;

/**
 * Used by layout chrome (e.g. Navbar's hide-on-scroll-down behavior).
 * Returns "up" | "down", but ignores movement in the first
 * THRESHOLD_PX of scroll so the header never flickers away right at
 * the top of a page — only after the user has committed to scrolling.
 */
export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < THRESHOLD_PX) {
        setDirection("up");
      } else if (Math.abs(y - lastY) > 4) {
        setDirection(y > lastY ? "down" : "up");
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}
