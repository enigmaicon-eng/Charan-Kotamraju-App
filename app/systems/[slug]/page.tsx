import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXContent } from "@/components/mdx-content";
import { StatusBadge } from "@/components/status-badge";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllSystems, getSystemBySlug } from "@/lib/content";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSystems().map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) return {};
  return buildMetadata({
    title: system.title,
    description: system.oneLiner,
    path: `/systems/${system.slug}`,
  });
}

export default async function SystemPage({ params }: Params) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);
  if (!system) notFound();

  return (
    <article className="mx-auto max-w-[760px] px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/systems"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors duration-150"
      >
        <ArrowLeft className="size-4" /> All systems
      </Link>

      <header className="border-border mt-8 space-y-5 border-b pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={system.status} />
          <span className="text-muted-foreground font-mono text-xs tracking-wide">
            {system.domain}
          </span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          {system.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{system.oneLiner}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
          {system.repo ? (
            <a
              href={system.repo}
              target="_blank"
              rel="noreferrer"
              className="text-accent inline-flex items-center gap-1.5 font-mono text-sm hover:underline"
            >
              Repository <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <span className="text-muted-foreground font-mono text-sm">
              Repository in development
            </span>
          )}
          {system.site && (
            <a
              href={system.site}
              target="_blank"
              rel="noreferrer"
              className="text-accent inline-flex items-center gap-1.5 font-mono text-sm hover:underline"
            >
              Live site <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
        {system.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {system.stack.map((item) => (
              <span
                key={item}
                className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 font-mono text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="pt-10">
        <MDXContent code={system.mdx} />
      </div>
    </article>
  );
}
