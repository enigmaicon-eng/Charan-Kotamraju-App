import { getAllEssays } from "@/lib/content";
import { buildFeed } from "@/lib/rss";
import type { Document } from "@/types/content";

export const dynamic = "force-static";

export async function GET() {
  // Essays are adapted to the generic Document shape the feed builder expects.
  const docs = getAllEssays().map((essay) => ({
    title: essay.title,
    description: essay.summary,
    date: essay.date,
    draft: essay.draft,
    tags: essay.tags,
    content: essay.summary,
    mdx: essay.mdx,
    _meta: { ...essay._meta, path: `writing/${essay.slug}` },
  })) satisfies Document[];

  const feed = buildFeed(docs);

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
