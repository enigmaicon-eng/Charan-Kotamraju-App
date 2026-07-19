import { Octokit } from "@octokit/rest";
import { env } from "@/config/env";

/**
 * Single shared Octokit instance for the whole app. Authenticated when
 * `GITHUB_TOKEN` is set (higher rate limit, access to private data the
 * token is scoped for); falls back to unauthenticated requests otherwise,
 * which is sufficient for public read-only usage during development.
 */
export const githubClient = new Octokit({
  auth: env.GITHUB_TOKEN,
  userAgent: `${env.NEXT_PUBLIC_SITE_NAME}`,
});
