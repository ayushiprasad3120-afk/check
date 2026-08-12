"use client";

import { useScrollDepthTracking } from "@/hooks/use-scroll-depth-tracking";

/** Invisible — mounted once in the root layout to wire up scroll_depth events site-wide. */
export function ScrollDepthTracker() {
  useScrollDepthTracking();
  return null;
}
