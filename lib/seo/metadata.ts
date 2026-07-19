import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageSeoInput } from "@/types/seo";

/**
 * Builds a Next.js `Metadata` object from a small, opinionated input shape
 * so every route gets consistent title templating, canonical URLs, and
 * OpenGraph/Twitter tags without repeating boilerplate.
 */
export function buildMetadata(input: PageSeoInput): Metadata {
  const url = input.path ? new URL(input.path, siteConfig.url).toString() : siteConfig.url;
  const image = input.image ?? siteConfig.ogImage;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
    },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      type: input.type ?? "website",
      ...(input.type === "article"
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime,
            tags: input.tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

/** Base metadata shared by the root layout; page-level metadata extends this. */
export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s · ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
  };
}
