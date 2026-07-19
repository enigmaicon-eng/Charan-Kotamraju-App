import { githubClient } from "@/lib/github/client";
import type { GithubRepoSummary } from "@/types/github";

/**
 * Fetches public, non-fork repositories for a GitHub user and maps them to
 * the app's narrow `GithubRepoSummary` shape. Sorted by most recently
 * pushed. Consumers decide filtering/presentation (e.g. hiding archived
 * repos) — this layer only normalizes the API response.
 */
export async function listUserRepos(username: string): Promise<GithubRepoSummary[]> {
  const { data } = await githubClient.rest.repos.listForUser({
    username,
    type: "owner",
    sort: "pushed",
    per_page: 100,
  });

  return data.map((repo): GithubRepoSummary => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage ?? null,
    stargazersCount: repo.stargazers_count ?? 0,
    forksCount: repo.forks_count ?? 0,
    language: repo.language ?? null,
    topics: repo.topics ?? [],
    updatedAt: repo.updated_at ?? repo.created_at ?? "",
    pushedAt: repo.pushed_at ?? repo.created_at ?? "",
    archived: repo.archived ?? false,
    fork: repo.fork,
  }));
}
