import type { MetadataRoute } from "next";
import { seo } from "@/config/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Campaign landing pages are intentionally excluded from
        // crawling to protect Google Ads message-match and avoid
        // duplicate-content conflicts with the equivalent organic
        // vertical/state page (see Part 1, Section 7).
        disallow: ["/api/", "/campaign/"],
      },
    ],
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
