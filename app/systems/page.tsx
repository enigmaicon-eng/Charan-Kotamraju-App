import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SystemCard } from "@/components/system-card";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllSystems } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Systems",
  description:
    "Six operating systems, one thesis — interview simulation, enterprise runtimes, cognitive workspaces, and knowledge universes built on memory, orchestration, and governance.",
  path: "/systems",
});

export default function SystemsPage() {
  const systems = getAllSystems();

  return (
    <div className="mx-auto max-w-[1120px] px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <p className="eyebrow mb-4">Systems</p>
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          These are not six projects. They are one idea at six scales.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
          An enterprise, a mind, a career, a civilization, a discipline — every complex system
          becomes more capable when it gains an operating layer: persistent memory, adaptive
          orchestration, runtime governance. Each system below applies that architecture to a
          different scale, and each is labeled honestly by its stage.
        </p>
      </FadeIn>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {systems.map((system, i) => (
          <FadeIn key={system.slug} delay={i * 0.05}>
            <SystemCard system={system} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
