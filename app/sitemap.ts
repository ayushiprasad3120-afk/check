import type { MetadataRoute } from "next";
import { seo } from "@/config/seo.config";
import { services } from "@/config/services.config";
import { states } from "@/config/states.config";
import { getArticleSlugs } from "@/lib/blog/mdx";

const STATIC_ROUTES = [
  "",
  "/insurance",
  "/how-it-works",
  "/about",
  "/contact",
  "/faq",
  "/blog",
  "/blog/search",
  "/quote",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/cookie-policy",
  "/legal/disclaimer",
  "/legal/accessibility-statement",
];

/**
 * Enumerates every static page, every vertical x state (and city)
 * combination, and every blog article — all sourced from the same
 * config/content that drives the routes themselves, so a sitemap
 * entry can never drift out of sync with what actually exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${seo.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${seo.siteUrl}/insurance/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const stateEntries: MetadataRoute.Sitemap = services.flatMap((s) =>
    states.map((st) => ({
      url: `${seo.siteUrl}/insurance/${s.slug}/${st.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const cityEntries: MetadataRoute.Sitemap = services.flatMap((s) =>
    states.flatMap((st) =>
      st.servedCities.map((city) => ({
        url: `${seo.siteUrl}/insurance/${s.slug}/${st.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
    )
  );

  const articleEntries: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${seo.siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...stateEntries, ...cityEntries, ...articleEntries];
}
