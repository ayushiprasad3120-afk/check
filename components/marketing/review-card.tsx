import { Star } from "lucide-react";
import type { Testimonial } from "@/config/testimonials.config";

export function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-soft">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? "fill-emerald-500 text-emerald-500" : "text-border-strong"}`}
          />
        ))}
      </div>
      <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-navy-950">{testimonial.name}</span>
        <span className="text-ink-muted"> · {testimonial.location}</span>
      </figcaption>
    </figure>
  );
}
