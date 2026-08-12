import type { LucideIcon } from "lucide-react";

export type ServiceSlug = "auto" | "health" | "home" | "final-expense";

export interface CoverageOption {
  name: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceConfig {
  slug: ServiceSlug;
  name: string; // e.g. "Auto Insurance"
  shortName: string; // e.g. "Auto"
  icon: LucideIcon;
  tagline: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  howItWorks: { title: string; description: string }[];
  eligibilityNotes: string[];
  coverageOptions: CoverageOption[];
  faqs: ServiceFaqItem[];
  relatedBlogCategory: string;
  metaTitle: string;
  metaDescription: string;
}
