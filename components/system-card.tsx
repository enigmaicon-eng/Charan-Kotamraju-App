"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, AppWindow, Globe } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import type { System } from "@/lib/content";

/**
 * External quick links rendered above the card's stretched link (z-10),
 * so visitors can jump straight to the repo or live product without
 * opening the case study first.
 */
function QuickLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="border-border text-muted-foreground hover:border-accent/50 hover:text-accent relative z-10 inline-flex size-8 items-center justify-center rounded-md border transition-colors duration-150"
    >
      {children}
    </a>
  );
}

/* lucide-react dropped brand icons, so the GitHub mark is inlined. */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function SystemCard({ system }: { system: System }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -999, y: -999, visible: false });
  const reduceMotion = useReducedMotion();

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: event.clientX - rect.left, y: event.clientY - rect.top, visible: true });
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, visible: false }))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group border-border bg-card hover:border-accent/40 relative flex h-full flex-col justify-between overflow-hidden rounded-lg border p-6 transition-colors duration-200"
    >
      {/* Mouse-tracked spotlight wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.visible && !reduceMotion ? 1 : 0,
          background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, color-mix(in oklch, var(--accent) 9%, transparent), transparent 70%)`,
        }}
      />

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {/* Stretched link: the whole card navigates to the case study. */}
            <Link href={`/systems/${system.slug}`} className="focus-visible:outline-none">
              <span aria-hidden className="absolute inset-0" />
              {system.title}
            </Link>
          </h3>
          <ArrowUpRight className="text-muted-foreground group-hover:text-accent mt-1 size-4 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{system.oneLiner}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <StatusBadge status={system.status} />
          <span className="text-muted-foreground truncate font-mono text-[11px] tracking-wide">
            {system.domain}
          </span>
          {system.license && (
            <span className="border-accent/40 text-accent shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wide">
              {system.license}
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {system.repo && (
            <QuickLink href={system.repo} label={`${system.title} source on GitHub`}>
              <GithubIcon className="size-4" />
            </QuickLink>
          )}
          {system.site && (
            <QuickLink href={system.site} label={`${system.title} live site`}>
              <Globe className="size-4" />
            </QuickLink>
          )}
          {system.app && (
            <QuickLink href={system.app} label={`Open the ${system.title} app`}>
              <AppWindow className="size-4" />
            </QuickLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}
