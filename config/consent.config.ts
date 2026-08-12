export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentCategoryDefinition {
  id: ConsentCategory;
  label: string;
  description: string;
  required: boolean; // true = cannot be disabled (e.g. "necessary")
}

export const consentCategories: ConsentCategoryDefinition[] = [
  {
    id: "necessary",
    label: "Necessary",
    description:
      "Required for core site functionality — call routing, form submission, and security. Cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Helps us understand how visitors use the site (GA4, Microsoft Clarity) so we can improve it.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Used for ad measurement and conversion tracking (Google Ads, Meta Pixel) across campaigns.",
    required: false,
  },
];
