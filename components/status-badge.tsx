import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Production: "text-emerald-500 border-emerald-500/30",
  Active: "text-accent border-accent/30",
  Template: "text-sky-500 border-sky-500/30",
  Vision: "text-muted-foreground border-border",
};

/** Truthful status labeling is a brand feature — see STRATEGY.md §28. */
export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide",
        statusStyles[status] ?? statusStyles.Vision,
      )}
    >
      {status}
    </span>
  );
}
