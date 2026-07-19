/**
 * Route-level Suspense fallback (Next.js file convention), shown while a
 * route segment streams in. Deliberately generic — a spinner/skeleton with
 * real visual design is a product-specification decision.
 */
export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="flex min-h-svh items-center justify-center">
      <div className="border-muted-foreground/30 border-t-foreground size-6 animate-spin rounded-full border-2" />
    </div>
  );
}
