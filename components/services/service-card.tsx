import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceConfig } from "@/types/service";

export function ServiceCard({ service }: { service: ServiceConfig }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/insurance/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-900 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-lg text-navy-950">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{service.tagline}</p>
      <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-navy-950 group-hover:text-emerald-700">
        Explore coverage
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
