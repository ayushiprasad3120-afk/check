import { TRACKED_PARAMS } from "../config/campaign";

const STORAGE_KEY = "insuredirect_tracking_params";

export type TrackingParams = Partial<Record<(typeof TRACKED_PARAMS)[number], string>>;

/**
 * Reads tracking parameters from the current URL, merges them with any
 * previously captured values in sessionStorage (so attribution survives
 * navigation within the site), and persists the result.
 */
export function captureTrackingParams(): TrackingParams {
  const existing = getStoredTrackingParams();

  if (typeof window === "undefined") return existing;

  const url = new URL(window.location.href);
  const captured: TrackingParams = { ...existing };

  TRACKED_PARAMS.forEach((param) => {
    const value = url.searchParams.get(param);
    if (value) {
      captured[param] = value;
    }
  });

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — fail silently,
    // tracking is not critical to core site function.
  }

  return captured;
}

export function getStoredTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as TrackingParams) : {};
  } catch {
    return {};
  }
}
