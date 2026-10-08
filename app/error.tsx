"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[85vh] flex items-center justify-center pt-24">
      <div className="container-editorial text-center max-w-lg">
        <p className="eyebrow mb-4">Something went wrong</p>
        <h1 className="font-display text-3xl md:text-4xl text-charcoal dark:text-cream">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 text-charcoal/65 dark:text-cream/65">
          Our team has been notified. Please try again, or head back to the homepage.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-full bg-wine text-cream px-6 py-3.5 text-sm font-medium hover:bg-burgundy transition-colors"
          >
            Try Again
          </button>
          <Button href="/" variant="secondary">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
