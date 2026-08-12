export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-surface p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">On this page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
            <a href={`#${h.id}`} className="text-ink-muted hover:text-navy-950">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
