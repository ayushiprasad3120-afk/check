import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

export interface BreadcrumbTrailItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbTrailItem[] }) {
  const trail: BreadcrumbTrailItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-navy-950">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-navy-950 flex items-center gap-1">
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
