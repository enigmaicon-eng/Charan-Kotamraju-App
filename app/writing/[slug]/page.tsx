import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@/components/mdx-content";
import { formatDate } from "@/components/essay-list-item";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllEssays, getEssayBySlug } from "@/lib/content";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return buildMetadata({
    title: essay.title,
    description: essay.summary,
    path: `/writing/${essay.slug}`,
    type: "article",
    publishedTime: essay.date,
    tags: essay.tags,
  });
}

export default async function EssayPage({ params }: Params) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/writing"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors duration-150"
      >
        <ArrowLeft className="size-4" /> All writing
      </Link>
      <header className="border-border mt-8 space-y-4 border-b pb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          {essay.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{essay.summary}</p>
        <p className="text-muted-foreground font-mono text-xs">
          {formatDate(essay.date)} · {essay.readingTime} min read
        </p>
      </header>
      <div className="pt-10">
        <MDXContent code={essay.mdx} />
      </div>
    </article>
  );
}
