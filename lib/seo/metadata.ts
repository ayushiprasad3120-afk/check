import type { Metadata } from "next";
import { seo } from "@/config/seo.config";
import { brand } from "@/config/brand.config";

interface PageMetadataInput {
  title?: string;
  description?: string;
  path: string; // e.g. "/insurance/auto"
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex = false,
}: PageMetadataInput): Metadata {
  const resolvedTitle = title ?? seo.defaultTitle;
  const resolvedDescription = description ?? seo.defaultDescription;
  const url = `${seo.siteUrl}${path}`;
  const image = ogImage ?? seo.ogImage;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(seo.siteUrl),
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: brand.brandName,
      images: [{ url: image }],
      locale: seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [image],
      site: seo.twitterHandle,
    },
  };
}
