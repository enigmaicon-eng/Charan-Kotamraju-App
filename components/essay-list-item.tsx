import Link from "next/link";
import type { Essay } from "@/lib/content";

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function EssayListItem({ essay }: { essay: Essay }) {
  return (
    <Link
      href={`/writing/${essay.slug}`}
      className="group hover:border-border hover:bg-card block rounded-lg border border-transparent px-4 py-5 transition-colors duration-150"
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="group-hover:text-accent font-semibold tracking-tight transition-colors duration-150">
            {essay.title}
          </h3>
          <span className="text-muted-foreground shrink-0 font-mono text-xs">
            {formatDate(essay.date)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{essay.summary}</p>
        <span className="text-muted-foreground mt-1 font-mono text-[11px]">
          {essay.readingTime} min read
        </span>
      </div>
    </Link>
  );
}
