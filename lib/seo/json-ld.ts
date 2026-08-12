import { brand } from "@/config/brand.config";
import { seo } from "@/config/seo.config";
import { aggregateRating } from "@/config/reviews.config";

interface FaqLikeItem {
  question: string;
  answer: string;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: brand.brandName,
    legalName: brand.brandLegalName,
    url: seo.siteUrl,
    logo: `${seo.siteUrl}${brand.brandLogo.icon}`,
    telephone: brand.brandPhone,
    email: brand.brandEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.brandAddress.street,
      addressLocality: brand.brandAddress.city,
      addressRegion: brand.brandAddress.state,
      postalCode: brand.brandAddress.zip,
      addressCountry: "US",
    },
    sameAs: Object.values(brand.socialLinks).filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
  };
}

export function faqJsonLd(items: FaqLikeItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seo.siteUrl}${item.path}`,
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  coverImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${seo.siteUrl}${article.coverImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@type": "Person", name: article.authorName },
    publisher: {
      "@type": "Organization",
      name: brand.brandName,
      logo: { "@type": "ImageObject", url: `${seo.siteUrl}${brand.brandLogo.icon}` },
    },
    mainEntityOfPage: `${seo.siteUrl}/blog/${article.slug}`,
  };
}
