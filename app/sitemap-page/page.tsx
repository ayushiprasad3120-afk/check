import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { services } from "@/config/services.config";
import { states } from "@/config/states.config";
import { footerColumns } from "@/config/navigation.config";
import { getAllArticles } from "@/lib/blog/mdx";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/sitemap-page",
  title: "Sitemap",
  description: "Browse every page on InsureDirect.",
});

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-3 font-display text-base text-navy-950">{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-muted hover:text-navy-950">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const articles = getAllArticles();

  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Sitemap", path: "/sitemap-page" }]} />
      <h1 className="text-display-sm balance mb-10">Sitemap</h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <LinkColumn
          title="Insurance"
          links={services.flatMap((s) => [
            { label: s.name, href: `/insurance/${s.slug}` },
            ...states.map((st) => ({ label: `${s.name} in ${st.name}`, href: `/insurance/${s.slug}/${st.slug}` })),
          ])}
        />
        {footerColumns
          .filter((c) => c.title !== "Insurance")
          .map((col) => (
            <LinkColumn key={col.title} title={col.title} links={col.links} />
          ))}
        <LinkColumn title="Blog Articles" links={articles.map((a) => ({ label: a.title, href: `/blog/${a.slug}` }))} />
      </div>
    </SectionContainer>
  );
}
