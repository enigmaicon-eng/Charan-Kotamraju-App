/**
 * Narrow, typed shapes for the subset of the GitHub REST API this project
 * consumes. Deliberately not a re-export of `@octokit/openapi-types` in
 * full — only the fields the integration layer actually reads.
 */

export interface GithubRepoSummary {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  stargazersCount: number;
  forksCount: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
  pushedAt: string;
  archived: boolean;
  fork: boolean;
}

export interface GithubUserSummary {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export interface GithubContributionDay {
  date: string;
  count: number;
}
