export interface TrackingConfig {
  defaultDID: string;
  campaignDIDs: Record<string, string>;
  sourceDIDs: Record<string, string>;
  serviceDIDs: Partial<Record<string, string>>;
}

export interface DIDResolutionParams {
  campaignSlug?: string | null;
  source?: string | null;
  service?: string | null;
}

export type CallSource =
  | "navbar"
  | "hero"
  | "sticky-call-bar"
  | "floating-call-button"
  | "cta-section"
  | "footer"
  | "service-page"
  | "campaign-page";
