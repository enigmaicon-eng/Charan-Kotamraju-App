import type { ISODateString } from "./common";

/**
 * Generic MDX document shape shared by every Content Collections entry.
 * This is intentionally minimal — concrete content types (posts, notes,
 * projects, etc.) are an information-architecture decision left to the
 * product-specification phase, not the engineering foundation.
 */
export interface DocumentFrontmatter {
  title: string;
  description?: string;
  date: ISODateString;
  draft: boolean;
  tags: string[];
}

export interface Document extends DocumentFrontmatter {
  _meta: {
    filePath: string;
    fileName: string;
    directory: string;
    path: string;
  };
  content: string;
  mdx: string;
}
