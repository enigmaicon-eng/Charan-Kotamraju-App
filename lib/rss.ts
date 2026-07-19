import { Feed } from "feed";
import { siteConfig } from "@/config/site";
import type { Document } from "@/types/content";

/**
 * Builds an RSS/Atom/JSON feed from a list of documents. Generic over any
 * `Document`-shaped collection so it isn't tied to a specific content type
 * (posts vs. notes vs. changelog) — callers pass whichever collection they
 * want published as a feed.
 */
export function buildFeed(docs: Document[]): Feed {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: "en",
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.name}`,
    feedLinks: {
      rss: `${siteConfig.url}/feed.xml`,
    },
  });

  for (const doc of docs) {
    const url = new URL(doc._meta.path, siteConfig.url).toString();
    feed.addItem({
      title: doc.title,
      id: url,
      link: url,
      description: doc.description,
      date: new Date(doc.date),
    });
  }

  return feed;
}
