import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { ArticleGrid } from "@/components/blog/article-grid";
import { getAllArticles } from "@/lib/blog/mdx";
import { paginate } from "@/lib/blog/pagination";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Insurance Guides & Education",
  description: "Plain-language guides on auto, health, home, and final expense insurance.",
});

export default function BlogIndexPage() {
  const { items, totalPages } = paginate(getAllArticles(), 1);

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <h1 className="text-display-sm balance mb-2">Insurance guides &amp; education</h1>
      <p className="mb-10 max-w-xl text-ink-muted">
        Plain-language explanations of how coverage actually works, written by licensed agents.
      </p>
      <ArticleGrid articles={items} />
      {totalPages > 1 && (
        <p className="mt-10 text-center text-sm text-ink-muted">Page 1 of {totalPages}</p>
      )}
    </SectionContainer>
  );
}
