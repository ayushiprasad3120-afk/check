import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/services",
  "/advertisers",
  "/publishers",
  "/traffic-sources",
  "/verticals",
  "/why-us",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
