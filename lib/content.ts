import { allDocs, allSystems, allWritings } from "content-collections";
import type { Document } from "@/types/content";

/**
 * Thin wrapper over the generated Content Collections output. Routes/
 * components should import from here rather than `content-collections`
 * directly, so the generated-code dependency stays confined to one file.
 */
export type System = (typeof allSystems)[number];
export type Essay = (typeof allWritings)[number];

export function getAllSystems(): System[] {
  return [...allSystems].sort((a, b) => a.order - b.order);
}

export function getSystemBySlug(slug: string): System | undefined {
  return allSystems.find((system) => system.slug === slug);
}

export function getAllEssays(): Essay[] {
  return allWritings
    .filter((essay) => !essay.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEssayBySlug(slug: string): Essay | undefined {
  return getAllEssays().find((essay) => essay.slug === slug);
}

export function getAllDocs(): Document[] {
  return allDocs.filter((doc) => !doc.draft || process.env.NODE_ENV !== "production");
}

export function getDocByPath(path: string): Document | undefined {
  return getAllDocs().find((doc) => doc._meta.path === path);
}
