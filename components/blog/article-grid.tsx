import { ArticleCard } from "@/components/blog/article-card";
import type { Article } from "@/types/blog";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <p className="py-12 text-center text-ink-muted">No articles found yet — check back soon.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
