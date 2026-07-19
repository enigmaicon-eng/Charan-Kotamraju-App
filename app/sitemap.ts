import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllEssays, getAllSystems } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/systems", "/thesis", "/journey", "/writing", "/about"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );

  const systems = getAllSystems().map((system) => ({
    url: `${siteConfig.url}/systems/${system.slug}`,
    lastModified: new Date(),
  }));

  const essays = getAllEssays().map((essay) => ({
    url: `${siteConfig.url}/writing/${essay.slug}`,
    lastModified: new Date(essay.date),
  }));

  return [...staticRoutes, ...systems, ...essays];
}
