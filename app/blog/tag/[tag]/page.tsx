import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { ArticleGrid } from "@/components/blog/article-grid";
import { getArticlesByTag } from "@/lib/blog/mdx";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const p = await params;
  return buildMetadata({ path: `/blog/tag/${p.tag}`, title: `#${p.tag} articles` });
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const p = await params;
  const articles = getArticlesByTag(p.tag);

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: `#${p.tag}`, path: `/blog/tag/${p.tag}` }]} />
      <h1 className="text-display-sm balance mb-8">#{p.tag}</h1>
      <ArticleGrid articles={articles} />
    </SectionContainer>
  );
}
