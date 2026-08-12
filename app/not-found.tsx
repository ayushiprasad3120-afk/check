import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services.config";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <SearchX className="h-12 w-12 text-navy-300" aria-hidden="true" />
      <h1 className="mt-6 text-display-md balance">We couldn't find that page</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you're looking for may have moved or no longer exists. Here are a few places to try instead.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary" size="lg">
          Return Home
        </Button>
        <Button href="/blog" variant="secondary" size="lg">
          Browse Guides
        </Button>
      </div>
      <nav aria-label="Helpful links" className="mt-10 flex flex-wrap justify-center gap-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/insurance/${s.slug}`}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-navy-950 hover:border-navy-950"
          >
            {s.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
