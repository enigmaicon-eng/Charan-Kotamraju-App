import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import type { System } from "@/lib/content";

export function SystemCard({ system }: { system: System }) {
  return (
    <Link
      href={`/systems/${system.slug}`}
      className="group border-border bg-card hover:border-accent/40 flex flex-col justify-between rounded-lg border p-6 transition-all duration-150 hover:-translate-y-0.5"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{system.title}</h3>
          <ArrowUpRight className="text-muted-foreground group-hover:text-accent mt-1 size-4 shrink-0 transition-colors duration-150" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{system.oneLiner}</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <StatusBadge status={system.status} />
        <span className="text-muted-foreground font-mono text-[11px] tracking-wide">
          {system.domain}
        </span>
      </div>
    </Link>
  );
}
