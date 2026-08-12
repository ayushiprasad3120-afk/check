import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { ArticleGrid } from "@/components/blog/article-grid";
import { getAllArticles } from "@/lib/blog/mdx";
import { paginate } from "@/lib/blog/pagination";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ pageNumber: string }> }): Promise<Metadata> {
  const p = await params;
  return buildMetadata({ path: `/blog/page/${p.pageNumber}`, title: `Blog — Page ${p.pageNumber}` });
}

export default async function BlogPaginatedPage({ params }: { params: Promise<{ pageNumber: string }> }) {
  const p = await params;
  const pageNumber = Number(p.pageNumber);
  if (!Number.isFinite(pageNumber) || pageNumber < 1) notFound();

  const { items, currentPage, totalPages } = paginate(getAllArticles(), pageNumber);
  if (pageNumber > totalPages) notFound();

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: `Page ${currentPage}`, path: `/blog/page/${currentPage}` }]} />
      <ArticleGrid articles={items} />
      <p className="mt-10 text-center text-sm text-ink-muted">
        Page {currentPage} of {totalPages}
      </p>
    </SectionContainer>
  );
}
