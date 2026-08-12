import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { formatDate } from "@/lib/utils/format";

export function LegalPageLayout({
  title,
  lastUpdated,
  content,
  path,
}: {
  title: string;
  lastUpdated: string;
  content: string;
  path: string;
}) {
  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: title, path }]} />
      <div className="mx-auto max-w-2xl">
        <h1 className="text-display-sm balance">{title}</h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated {formatDate(lastUpdated)}</p>
        <div className="prose prose-sm mt-8 max-w-none leading-relaxed text-ink">
          {content.split("\n\n").map((para, i) => (
            <p key={i} className="mb-4 text-[0.95rem] leading-relaxed text-ink-muted">
              {para}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
