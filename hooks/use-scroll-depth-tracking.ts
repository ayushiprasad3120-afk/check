"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Fires a `scroll_depth` analytics event once per threshold per page
 * view. Mount this once near the root (see components/shared/scroll-depth-tracker.tsx)
 * rather than per-section, so depth is measured against the whole document.
 */
export function useScrollDepthTracking() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percentScrolled = (scrollTop / docHeight) * 100;

      for (const threshold of THRESHOLDS) {
        if (percentScrolled >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackEvent({ name: "scroll_depth", percent: threshold });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
