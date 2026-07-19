import type { Metadata } from "next";

/**
 * Input contract for `buildMetadata()` in lib/seo/metadata.ts.
 * Keeping this separate from `next`'s `Metadata` type lets callers pass a
 * small, opinionated subset instead of the entire Next.js metadata surface.
 */
export interface PageSeoInput {
  title: string;
  description: string;
  path?: string;
  /** Relative or absolute URL to an OpenGraph/Twitter image. */
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export type PageMetadata = Metadata;

export interface OgImageInput {
  title: string;
  subtitle?: string;
}
