import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedArticles } from "@/components/blog/related-articles";
import { CategoryPill } from "@/components/blog/category-pill";
import { TableOfContents, type TocHeading } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/marketing/cta-section";
import { articleJsonLd } from "@/lib/seo/json-ld";
import { getArticleSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/blog/mdx";
import { formatDate } from "@/lib/utils/format";
import { slugify } from "@/lib/utils/slugify";
import { buildMetadata } from "@/lib/seo/metadata";
import { services } from "@/config/services.config";
import fs from "node:fs";
import path from "node:path";
import type { Author } from "@/types/blog";

function getAuthor(slug: string): Author | null {
  const filePath = path.join(process.cwd(), "content", "authors", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const article = getArticleBySlug(p.slug);
  if (!article) return {};
  return buildMetadata({
    path: `/blog/${p.slug}`,
    title: article.title,
    description: article.description,
    ogImage: article.coverImage,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const article = getArticleBySlug(p.slug);
  if (!article) notFound();

  const author = getAuthor(article.authorSlug);
  const related = getRelatedArticles(article, 3);
  // Cross-links content back to the matching service vertical — the
  // internal-linking mechanism connecting blog -> services automatically,
  // driven by each article's `category` frontmatter field.
  const relatedService = services.find((s) => s.relatedBlogCategory === article.category);

  const blocks = article.content.split("\n\n");
  const headings: TocHeading[] = blocks
    .filter((block) => block.startsWith("## "))
    .map((block) => {
      const text = block.replace("## ", "");
      return { id: slugify(text), text, level: 2 as const };
    });

  return (
    <SectionContainer as="article">
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.description,
          slug: article.slug,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          authorName: author?.name ?? "InsureDirect Editorial",
          coverImage: article.coverImage,
        })}
      />
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: article.title, path: `/blog/${article.slug}` }]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <CategoryPill category={article.category} />
          <h1 className="text-display-sm balance mt-4">{article.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-ink-faint">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            {article.readingTime && <span>· {article.readingTime}</span>}
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-navy-50">
            <Image src={article.coverImage} alt="" fill sizes="(min-width: 768px) 700px, 100vw" className="object-cover" priority />
          </div>

          {/* Table of contents renders inline on mobile/tablet, since the sidebar column collapses below lg */}
          <div className="mt-8 lg:hidden">
            <TableOfContents headings={headings} />
          </div>

          <div className="prose prose-sm mt-8 max-w-none">
            {blocks.map((block, i) => {
              if (block.startsWith("## ")) {
                const text = block.replace("## ", "");
                return (
                  <h2 key={i} id={slugify(text)} className="mb-3 mt-8 scroll-mt-24 font-display text-2xl text-navy-950">
                    {text}
                  </h2>
                );
              }
              return (
                <p key={i} className="mb-4 text-[0.95rem] leading-relaxed text-ink-muted">
                  {block}
                </p>
              );
            })}
          </div>

          {relatedService && (
            <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="text-sm text-ink">
                Want to compare {relatedService.name.toLowerCase()} coverage directly?{" "}
                <a href={`/insurance/${relatedService.slug}`} className="font-semibold text-emerald-700 underline underline-offset-2">
                  Visit the {relatedService.name} guide
                </a>
                .
              </p>
            </div>
          )}

          {author && (
            <div className="mt-10">
              <AuthorBio author={author} />
            </div>
          )}

          <RelatedArticles articles={related} />
        </div>

        {/* Sticky sidebar TOC on desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      </div>

      <CTASection
        title="Ready to compare your coverage?"
        description="Talk to a licensed agent about the options that apply to your situation."
        service={relatedService?.slug}
        source="cta-section"
      />
    </SectionContainer>
  );
}
