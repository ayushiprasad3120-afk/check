export interface StateConfig {
  name: string;
  abbreviation: string;
  slug: string; // "texas"
  doiUrl: string; // Department of Insurance link
  servedCities: string[];
  legalNotes?: string;
}

/**
 * Only states with enough unique, useful content are included here —
 * city/state pages are gated on data completeness to avoid thin
 * programmatic SEO pages (see Part 1, Section 7).
 */
export const states: StateConfig[] = [
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    doiUrl: "https://www.tdi.texas.gov/",
    servedCities: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth"],
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    doiUrl: "https://www.floir.com/",
    servedCities: ["Miami", "Tampa", "Orlando", "Jacksonville"],
    legalNotes: "Florida homeowners policies commonly exclude flood damage; separate flood coverage is available through NFIP or private carriers.",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    slug: "ohio",
    doiUrl: "https://insurance.ohio.gov/",
    servedCities: ["Columbus", "Cleveland", "Cincinnati"],
  },
  {
    name: "California",
    abbreviation: "CA",
    slug: "california",
    doiUrl: "https://www.insurance.ca.gov/",
    servedCities: ["Los Angeles", "San Diego", "San Francisco", "Sacramento"],
    legalNotes: "California homeowners policies typically exclude earthquake damage; separate earthquake coverage is available through the CEA or private carriers.",
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    doiUrl: "https://www.dfs.ny.gov/",
    servedCities: ["New York City", "Buffalo", "Rochester", "Albany"],
  },
];

export function getStateBySlug(slug: string) {
  return states.find((s) => s.slug === slug);
}
