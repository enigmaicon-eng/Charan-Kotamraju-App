import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedHeading } from "@/components/animated-heading";
import { FadeIn } from "@/components/fade-in";
import { Starfield } from "@/components/starfield";
import { Section } from "@/components/section";
import { SystemCard } from "@/components/system-card";
import { EssayListItem } from "@/components/essay-list-item";
import { person } from "@/config/site";
import { getAllEssays, getAllSystems } from "@/lib/content";

const proofPoints = [
  {
    value: "AI in production",
    label: "Shipped across JPMorgan Chase banking platforms",
  },
  {
    value: "~20%",
    label: "Targeted reduction in ATM cash replenishment cycles",
  },
  {
    value: "100K+ / 100%",
    label: "Mortgage records under HMDA compliance, zero-defect adherence",
  },
  {
    value: "6 systems",
    label: "Open operating layers, designed and built in public",
  },
];

const pillars = [
  {
    title: "Memory",
    body: "Context that compounds instead of resetting — persistent, structured, retrievable. The difference between an organization that learns and one that merely experiences.",
  },
  {
    title: "Orchestration",
    body: "Coordination that adapts as conditions change — across people, systems, and agents — instead of workflows frozen at design time.",
  },
  {
    title: "Governance",
    body: "Constraints embedded inside execution: bounded autonomy, auditability by construction, policy enforced at the moment of action.",
  },
];

export default function HomePage() {
  const systems = getAllSystems();
  const essays = getAllEssays().slice(0, 3);

  return (
    <div className="mx-auto max-w-[1120px] px-5 md:px-8">
      {/* Act I — the claim */}
      <section className="relative flex flex-col justify-center py-24 md:py-36">
        <Starfield className="pointer-events-none absolute -inset-x-5 inset-y-0 -z-10 h-full w-auto md:-inset-x-8" />
        <FadeIn>
          <p className="eyebrow mb-6">
            {person.fullName} · {person.role}
          </p>
        </FadeIn>
        <AnimatedHeading
          text="I build operating systems for intelligence."
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl"
        />
        <FadeIn delay={0.35}>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            {person.subline} One thesis, tested at six scales: intelligence compounds only when
            memory, orchestration, and governance become infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/systems"
              className="bg-accent text-accent-foreground inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity duration-150 hover:opacity-90"
            >
              Explore the systems <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/thesis"
              className="border-border hover:border-accent/40 inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors duration-150"
            >
              Read the thesis
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Proof strip */}
      <FadeIn>
        <div className="border-border bg-border grid grid-cols-2 gap-px overflow-hidden rounded-lg border md:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="bg-card p-6">
              <p className="text-accent font-mono text-lg font-semibold">{point.value}</p>
              <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{point.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* The pattern */}
      <Section eyebrow="The pattern" title="Every complex system needs the same three layers">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.06}>
              <div className="border-border bg-card h-full rounded-lg border p-6">
                <p className="text-accent font-mono text-sm font-semibold">
                  0{i + 1} · {pillar.title}
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Act II — the evidence */}
      <Section eyebrow="The systems" title="One architecture, six scales">
        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system, i) => (
            <FadeIn key={system.slug} delay={i * 0.05}>
              <SystemCard system={system} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Act III — the mind */}
      <Section eyebrow="Writing" title="Thinking, in public">
        <FadeIn>
          <div className="divide-border border-border divide-y rounded-lg border">
            {essays.map((essay) => (
              <EssayListItem key={essay.slug} essay={essay} />
            ))}
          </div>
          <Link
            href="/writing"
            className="text-accent mt-6 inline-flex items-center gap-2 text-sm hover:underline"
          >
            All writing <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </Section>

      {/* Doorway */}
      <Section className="border-border border-t">
        <FadeIn>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Building something that needs an operating layer?
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl">
                I&apos;m always interested in conversations about enterprise AI, orchestration,
                adaptive operations, and AI-native organizations.
              </p>
            </div>
            <a
              href={`mailto:${person.email}`}
              className="bg-accent text-accent-foreground inline-flex shrink-0 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity duration-150 hover:opacity-90"
            >
              Get in touch <ArrowRight className="size-4" />
            </a>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
