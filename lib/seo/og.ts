import type { OgImageInput } from "@/types/seo";

/**
 * Shared constants for the dynamic OpenGraph image route
 * (app/opengraph-image.tsx, added once real branding exists).
 * Kept separate from metadata.ts so the image-generation route can import
 * just this, not the full metadata builder.
 */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_CONTENT_TYPE = "image/png" as const;

export function ogImageAlt(input: OgImageInput): string {
  return input.subtitle ? `${input.title} — ${input.subtitle}` : input.title;
}
