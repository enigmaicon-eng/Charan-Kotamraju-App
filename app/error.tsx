"use client";

import { useEffect } from "react";

/**
 * Route-level error boundary (Next.js file convention). Catches errors
 * thrown while rendering a route segment or its children. Kept minimal and
 * unbranded — copy/styling is a product-specification decision.
 */
export default function GlobalError({
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
    <div
      role="alert"
      className="flex min-h-svh flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md text-sm">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        onClick={reset}
        className="border-border hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
