import { z } from "zod";

/**
 * Validates `process.env` once at module load so misconfiguration fails
 * fast (build time / server start) instead of surfacing as a runtime
 * `undefined` deep in a component tree.
 *
 * Server-only variables must NOT be prefixed `NEXT_PUBLIC_`; anything the
 * client needs must be. See .env.example for the full list.
 */
const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  GITHUB_TOKEN: z.string().min(1).optional(),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("https://charan-kotamraju-app.vercel.app"),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).default("Charan Kotamraju"),
  NEXT_PUBLIC_SITE_DESCRIPTION: z
    .string()
    .min(1)
    .default(
      "Product leader building operating systems for intelligence — enterprise AI, orchestration, governance, and memory-native systems.",
    ),
  NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1).default("enigmaicon-eng"),
});

const envSchema = serverEnvSchema.merge(clientEnvSchema);

export type Env = z.infer<typeof envSchema>;

function parseEnv(): Env {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid environment variables:\n${issues}`);
  }

  return parsed.data;
}

export const env = parseEnv();
