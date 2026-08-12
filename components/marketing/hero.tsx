import { ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/shared/call-button";
import { CoverageArc } from "@/components/shared/coverage-arc";
import { aggregateRating } from "@/config/reviews.config";
import { brand } from "@/config/brand.config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <CoverageArc
        variant="hero"
        className="right-[-160px] top-[-120px] h-[600px] w-[600px] text-white sm:right-[-60px]"
      />
      <div className="container relative py-20 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
              Licensed in {brand.licensing.statesLicensed.length} states
            </div>

            <h1 className="text-display-lg balance text-white">
              Insurance, explained before it's sold to you.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Compare auto, health, home, and final expense coverage in plain language,
              then talk to a licensed agent when you're ready — not before.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="emerald" size="lg">
                Compare Coverage Options
              </Button>
              <CallButton source="hero" variant="outlineLight" size="lg" />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-emerald-300 text-emerald-300" aria-hidden="true" />
                <span>
                  {aggregateRating.ratingValue}/5 from{" "}
                  {aggregateRating.reviewCount.toLocaleString()}+ consumers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" aria-hidden="true" />
                <span>Connected with licensed agents, not call centers</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lifted backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Today's coverage snapshot
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { label: "Auto liability minimums", value: "State-by-state" },
                  { label: "ACA metal tiers", value: "Bronze – Platinum" },
                  { label: "Home dwelling coverage", value: "Replacement cost" },
                  { label: "Final expense issue types", value: "Simplified / Guaranteed" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm text-white/60">{row.label}</span>
                    <span className="text-sm font-semibold text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
