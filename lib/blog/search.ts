import type { Article } from "@/types/blog";

/**
 * Lightweight substring/fuzzy-ish search over article frontmatter + excerpt.
 * Architected as a standalone function so it can be swapped for a hosted
 * search service later without changing the search UI component.
 */
export function searchArticles(articles: Article[], query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return articles.filter((article) => {
    const haystack = [
      article.title,
      article.description,
      article.category,
      ...article.tags,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
