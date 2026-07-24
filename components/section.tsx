import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Standard page section: eyebrow (uppercase mono label) + title + body,
 * carrying the site's vertical rhythm. See docs/STRATEGY.md §17.
 */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-24", className)}>
      {(eyebrow || title) && (
        <div className="mb-10 space-y-3">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
