"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Root error boundary — Next.js renders this for any uncaught
 * rendering/server error (the "500 page"). Must be a Client Component.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production: forward `error` to an error-monitoring service (e.g. Sentry).
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <AlertTriangle className="h-12 w-12 text-royal-500" aria-hidden="true" />
      <h1 className="mt-6 text-display-md balance">Something went wrong</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        We hit an unexpected error loading this page. You can try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset} variant="primary" size="lg">
          Try Again
        </Button>
        <Button href="/" variant="secondary" size="lg">
          Return Home
        </Button>
      </div>
    </div>
  );
}
