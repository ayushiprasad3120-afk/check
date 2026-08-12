import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getAllArticles } from "@/lib/blog/mdx";
import { buildMetadata } from "@/lib/seo/metadata";
import { BlogSearchClient } from "./search-client";

export const metadata: Metadata = buildMetadata({
  path: "/blog/search",
  title: "Search Insurance Guides",
  description: "Search InsureDirect's library of plain-language insurance guides.",
});

export default function BlogSearchPage() {
  const articles = getAllArticles();

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: "Search", path: "/blog/search" }]} />
      <h1 className="text-display-sm balance mb-6">Search articles</h1>
      <BlogSearchClient articles={articles} />
    </SectionContainer>
  );
}
