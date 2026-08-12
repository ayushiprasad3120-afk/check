import type { ConsentCategory } from "@/config/consent.config";

const STORAGE_KEY = "id_consent";

export type ConsentState = Record<ConsentCategory, boolean>;

export const defaultConsentState: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * Architecture-only consent persistence (localStorage, not a cookie,
 * so it never collides with the `id_src` attribution cookie). Swap
 * this module's implementation for a CMP vendor (OneTrust, Cookiebot,
 * Osano) later without touching any component — every consumer goes
 * through readConsent()/writeConsent(), never localStorage directly.
 */
export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return { ...defaultConsentState, ...JSON.parse(raw) };
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("id_consent_change", { detail: state }));
}

export function hasConsentFor(category: ConsentCategory): boolean {
  const state = readConsent();
  if (!state) return category === "necessary";
  return state[category];
}
