import { ArticleGrid } from "@/components/blog/article-grid";
import type { Article } from "@/types/blog";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-10">
      <h2 className="mb-6 font-display text-2xl text-navy-950">Related guides</h2>
      <ArticleGrid articles={articles} />
    </div>
  );
}
