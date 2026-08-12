"use client";

import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { ArticleGrid } from "@/components/blog/article-grid";
import { searchArticles } from "@/lib/blog/search";
import type { Article } from "@/types/blog";

/** Filters in the browser via lib/blog/search.ts — swappable for a hosted search service later without touching this UI. */
export function BlogSearchClient({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => (query ? searchArticles(articles, query) : []), [articles, query]);

  return (
    <>
      <div className="relative mx-auto mb-10 max-w-lg">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides — e.g. 'liability minimums'"
          aria-label="Search articles"
          className="w-full rounded-full border border-border-strong bg-white py-3 pl-11 pr-4 text-sm focus:border-royal-500 focus:outline-none"
        />
      </div>
      {query ? (
        <ArticleGrid articles={results} />
      ) : (
        <p className="text-center text-ink-muted">Start typing to search our insurance guides.</p>
      )}
    </>
  );
}
