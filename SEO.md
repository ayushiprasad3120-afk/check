# SEO Guide

## Adding a Blog Post

1. Create a new `.mdx` file in `content/blog/`, e.g. `content/blog/my-new-guide.mdx`.
2. Add frontmatter matching `types/blog.d.ts`'s `ArticleFrontmatter`:
   ```yaml
   ---
   title: "..."
   description: "..."
   category: "auto-insurance"   # must match a service's relatedBlogCategory to cross-link
   tags: ["tag-one", "tag-two"]
   authorSlug: "jane-doe"        # must match a file in content/authors/
   publishedAt: "2026-06-01"
   coverImage: "/images/blog/my-image.jpg"
   ---
   ```
3. Write the body in plain paragraphs, using `## Heading` for section breaks (the article template splits
   on blank lines and treats `## ` lines as H2s — see `app/blog/[slug]/page.tsx`).
4. The article is automatically picked up by `getAllArticles()`, appears on `/blog`, its category and tag
   pages, its author page, the RSS feed, and the sitemap — no route or config file needs to change.
5. If `category` matches a service's `relatedBlogCategory` (set in `config/services.config.ts`), the
   article automatically appears in that service page's "Related guides" section, and the article page
   automatically links back to that service.

## Adding an Author

Add a JSON file to `content/authors/<slug>.json` matching `types/blog.d.ts`'s `Author` shape. Reference the
same slug in an article's `authorSlug` frontmatter field.

## Adding a State Page

Add an entry to the `states` array in `config/states.config.ts`. Required: `name`, `abbreviation`, `slug`,
`doiUrl`. Recommended: `servedCities` and/or `legalNotes` — state pages are gated on having genuinely
unique content precisely to avoid thin/duplicate programmatic SEO pages, so an entry with neither is
low-value and should generally include at least one.

Adding a state automatically generates `/insurance/<vertical>/<state-slug>` for **all four** verticals (the
same `states.config.ts` entry drives auto, health, home, and final-expense state pages via
`components/services/state-page-template.tsx`) — you do not need to duplicate the entry per vertical.

## Adding a City Page

Add the city name to that state's `servedCities` array in `config/states.config.ts`. City pages are
generated at `/insurance/<vertical>/<state-slug>/<city-slug>` for all four verticals automatically via
`components/services/city-page-template.tsx` and `generateStaticParams()` in each vertical's
`[state]/[city]/page.tsx`.

## Updating Structured Data (Schema)

All JSON-LD builders live in `lib/seo/json-ld.ts`:

- `organizationJsonLd()` — Organization/InsuranceAgency + AggregateRating, rendered once in the root layout.
- `faqJsonLd(items)` — FAQPage, rendered by `components/marketing/faq-accordion.tsx`'s `FaqSection`
  wherever it's used.
- `breadcrumbJsonLd(items)` — BreadcrumbList, rendered by `components/layout/breadcrumbs.tsx`.
- `articleJsonLd(article)` — Article, rendered on `/blog/[slug]`.

To change what fields are included in any schema type, edit the relevant builder function — every page
using that builder updates automatically.

## Metadata / Canonical URLs

`lib/seo/metadata.ts`'s `buildMetadata()` is the single function every route calls to generate its
`Metadata` object (title, description, canonical, Open Graph, Twitter Card). Pass `noindex: true` to exclude
a route from indexing (used by campaign pages).

## Sitemap & Robots

- `app/sitemap.ts` — the native Next.js sitemap route, enumerating static pages, every vertical × state ×
  city combination, and every blog article directly from config/content (see `SEO.md`'s "Adding" sections
  above — nothing needs to be added here manually).
- `app/robots.ts` — disallows `/api/` and `/campaign/` (ads landing pages), allows everything else, and
  points to the sitemap.
- `next-sitemap.config.js` — companion config for the `next-sitemap` package (runs as a `postbuild` step)
  for environments that prefer a static `sitemap.xml` file alongside the native route.

## RSS Feed

`app/blog/rss.xml/route.ts` generates a standard RSS 2.0 feed from `getAllArticles()` — no configuration
needed beyond adding blog posts as described above.
