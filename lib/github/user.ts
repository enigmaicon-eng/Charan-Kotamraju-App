import { githubClient } from "@/lib/github/client";
import type { GithubUserSummary } from "@/types/github";

export async function getGithubUser(username: string): Promise<GithubUserSummary> {
  const { data } = await githubClient.rest.users.getByUsername({ username });

  return {
    login: data.login,
    name: data.name ?? null,
    avatarUrl: data.avatar_url,
    bio: data.bio ?? null,
    htmlUrl: data.html_url,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
  };
}
