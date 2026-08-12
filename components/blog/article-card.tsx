import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils/format";
import { CategoryPill } from "@/components/blog/category-pill";
import type { Article } from "@/types/blog";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-shadow hover:shadow-card">
      <Link href={`/blog/${article.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-navy-50">
        <Image
          src={article.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <CategoryPill category={article.category} />
        <Link href={`/blog/${article.slug}`}>
          <h3 className="mt-3 font-display text-lg leading-snug text-navy-950 group-hover:text-royal-700">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-faint">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          {article.readingTime && <span>· {article.readingTime}</span>}
        </div>
      </div>
    </article>
  );
}
