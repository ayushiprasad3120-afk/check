/**
 * Central analytics event layer so every tracked interaction across
 * the site funnels through one typed function instead of scattering
 * `window.dataLayer.push` calls through components. In production
 * this dispatches to GTM's dataLayer, which GA4, Google Ads
 * conversion tracking, and Meta Pixel (via GTM tags) all read from;
 * it's a safe no-op on the server and before GTM has loaded.
 */
type AnalyticsEvent =
  | { name: "call_click"; source: string; phone: string }
  | { name: "lead_submit"; service: string }
  | { name: "quote_start"; service: string }
  | { name: "form_submit"; formName: string }
  | { name: "faq_expand"; question: string }
  | { name: "nav_click"; label: string; href: string }
  | { name: "outbound_link"; href: string }
  | { name: "download_click"; fileName: string }
  | { name: "scroll_depth"; percent: 25 | 50 | 75 | 100 };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: event.name, ...event });
}
