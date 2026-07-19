import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { getEssayBySlug } from "@/lib/content";
import { person } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "The Thesis",
  description:
    "The Operating Layer — why intelligence doesn't scale through more capability, but through memory, orchestration, and governance becoming infrastructure.",
  path: "/thesis",
});

/**
 * The thesis is the flagship essay, given its own designed reading route.
 * The canonical source lives in the writing collection so it also appears
 * in feeds and the writing index.
 */
export default function ThesisPage() {
  const essay = getEssayBySlug("the-operating-layer");
  if (!essay) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-5 py-16 md:px-8 md:py-24">
      <header className="border-border space-y-5 border-b pb-10">
        <p className="eyebrow">The thesis</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          The Operating Layer
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{essay.summary}</p>
        <p className="text-muted-foreground font-mono text-xs">
          {person.fullName} · {essay.readingTime} min read
        </p>
      </header>
      <div className="pt-10">
        <MDXContent code={essay.mdx} />
      </div>
    </article>
  );
}
