import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { EssayListItem } from "@/components/essay-list-item";
import { buildMetadata } from "@/lib/seo/metadata";
import { getAllEssays } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Writing",
  description:
    "Essays on enterprise AI, operating layers, memory, orchestration, and governance — arguments, not tutorials.",
  path: "/writing",
});

export default function WritingPage() {
  const essays = getAllEssays();

  return (
    <div className="mx-auto max-w-[760px] px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <p className="eyebrow mb-4">Writing</p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-5xl">
          Thinking, in public
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
          Essays on operating layers for intelligence — enterprise AI, memory, orchestration, and
          governance. Arguments, not tutorials.
        </p>
      </FadeIn>
      <FadeIn className="mt-12">
        <div className="divide-border border-border divide-y rounded-lg border">
          {essays.map((essay) => (
            <EssayListItem key={essay.slug} essay={essay} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
