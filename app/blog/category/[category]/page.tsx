import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { ArticleGrid } from "@/components/blog/article-grid";
import { getArticlesByCategory } from "@/lib/blog/mdx";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const p = await params;
  return buildMetadata({
    path: `/blog/category/${p.category}`,
    title: `${p.category.replace(/-/g, " ")} articles`,
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const p = await params;
  const articles = getArticlesByCategory(p.category);

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: p.category.replace(/-/g, " "), path: `/blog/category/${p.category}` }]} />
      <h1 className="text-display-sm balance mb-8 capitalize">{p.category.replace(/-/g, " ")}</h1>
      <ArticleGrid articles={articles} />
    </SectionContainer>
  );
}
