import { env } from "@/config/env";

/**
 * Central site + identity configuration. Structural values come from the
 * environment (config/env.ts); brand copy and identity facts live here so
 * every page pulls from one source of truth.
 */
export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
  url: env.NEXT_PUBLIC_SITE_URL,
  githubUsername: env.NEXT_PUBLIC_GITHUB_USERNAME ?? null,
  ogImage: "/og.png",
  links: {
    github: env.NEXT_PUBLIC_GITHUB_USERNAME
      ? `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}`
      : null,
  },
} as const;

/** Identity facts used across pages — the single source of personal truth. */
export const person = {
  fullName: "Charan Kotamraju",
  credential: "PMP®",
  role: "Product Manager, JPMorgan Chase & Co.",
  headline: "I build operating systems for intelligence.",
  subline:
    "Product leader shipping AI across enterprise banking platforms at JPMorgan Chase — and designing open operating layers for enterprises, operators, and learners.",
  location: "Hyderabad, India",
  email: "charan.kotamraju@gmail.com",
  languages: ["English", "Hindi", "Telugu"],
  links: {
    github: "https://github.com/enigmaicon-eng",
    linkedin: "https://www.linkedin.com/in/sai-sri-charan-kotamraju/",
    x: "https://x.com/frivolous_rants",
  },
  certifications: [
    "Project Management Professional (PMP)®",
    "Professional Scrum Product Owner I",
    "Business Transformation with Google Cloud",
    "Agile Meets Design Thinking",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
