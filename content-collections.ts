import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: "wrap" }],
    [rehypePrettyCode, { theme: "github-dark" }],
  ],
  // compileMDX's option types are narrower than the plugin tuple form.
} as Parameters<typeof compileMDX>[2];

/**
 * `systems` — case studies for the operating systems Charan builds.
 * Frontmatter is the contract: invalid metadata fails the build.
 */
const systems = defineCollection({
  name: "systems",
  directory: "content/systems",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    domain: z.string(),
    status: z.enum(["Production", "Active", "Template", "Vision"]),
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(),
    site: z.string().optional(),
    app: z.string().optional(),
    license: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(true),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);
    return { ...document, mdx, slug: document._meta.path };
  },
});

/** `writing` — long-form essays. */
const writing = defineCollection({
  name: "writing",
  directory: "content/writing",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);
    const words = document.content.split(/\s+/).length;
    return {
      ...document,
      mdx,
      slug: document._meta.path,
      readingTime: Math.max(1, Math.round(words / 220)),
    };
  },
});

/** Minimal generic docs collection retained for internal documents. */
const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);
    return { ...document, mdx };
  },
});

export default defineConfig({
  content: [systems, writing, docs],
});
