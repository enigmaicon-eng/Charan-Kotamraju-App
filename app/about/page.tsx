import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { buildMetadata } from "@/lib/seo/metadata";
import { person } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Charan Kotamraju — product leader at JPMorgan Chase building AI across enterprise banking platforms, and designer of open operating systems for intelligence.",
  path: "/about",
});

const contactLinks = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "GitHub", value: "enigmaicon-eng", href: person.links.github },
  {
    label: "LinkedIn",
    value: "sai-sri-charan-kotamraju",
    href: person.links.linkedin,
  },
  { label: "X", value: "@frivolous_rants", href: person.links.x },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="shrink-0">
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${person.fullName}`}
              width={208}
              height={260}
              priority
              className="border-border rounded-lg border object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">About</p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {person.fullName}{" "}
              <span className="text-muted-foreground align-middle font-mono text-sm font-normal">
                {person.credential}
              </span>
            </h1>
            <p className="text-muted-foreground mt-1">{person.role}</p>
            <div className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
              <p>
                I&apos;m a product manager with experience building AI/ML, cloud, analytics, and
                enterprise platforms across financial services, telecom, and media. At JPMorgan
                Chase I&apos;ve led and shipped AI-driven products across ATM Channel and Home
                Lending platforms — resiliency intelligence, cash optimization, automated
                qualification, and enterprise compliance workflows operating at significant scale.
              </p>
              <p>
                What interests me isn&apos;t just AI capability, but how enterprises themselves
                evolve in the AI era. Organizations still run on fragmented workflows and static
                operational models; as AI becomes adaptive, they&apos;ll need a fundamentally
                different operational layer — one that combines orchestration, governance, memory,
                and organizational intelligence. I explore that direction in public through the{" "}
                <Link href="/systems" className="text-accent hover:underline">
                  systems
                </Link>{" "}
                I build.
              </p>
              <p>
                Before this: enterprise transformation at Accenture, telecom platforms at Wipro,
                hypergrowth operations at OYO, brand strategy after a marketing master&apos;s at
                MICA, and SAP consulting where it all began. Based in {person.location}. Languages:{" "}
                {person.languages.join(", ")}.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="mt-16">
        <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
        <div className="border-border bg-border mt-5 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group bg-card hover:bg-secondary flex items-center justify-between p-5 transition-colors duration-150"
            >
              <div>
                <p className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                  {link.label}
                </p>
                <p className="mt-1 text-sm">{link.value}</p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-accent size-4 transition-colors duration-150" />
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
