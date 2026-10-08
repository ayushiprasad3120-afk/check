import type { Metadata } from "next";

export const siteConfig = {
  name: "VisionovaHQ",
  tagline: "Connecting Advertisers with High-Quality Traffic Worldwide.",
  description:
    "VisionovaHQ is a global performance advertising network connecting advertisers with premium, fraud-verified traffic and publishers with exclusive, high-payout campaigns.",
  url: "https://www.visionovahq.com",
  email: "info@visionovahq.com",
  ogImage: "/images/og-cover.svg",
};

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
