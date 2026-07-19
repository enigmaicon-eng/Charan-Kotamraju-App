/**
 * Shared primitive types used across the codebase.
 * Domain-specific types live in their own files (content.ts, github.ts, seo.ts).
 */

export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;

/** A value that may or may not have resolved yet (async UI state). */
export type AsyncState<T, E = Error> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: E };

/** Narrow an object type to only the keys present in `K`. */
export type PickRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** ISO-8601 date string, kept distinct from `string` for intent clarity. */
export type ISODateString = string;

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}
