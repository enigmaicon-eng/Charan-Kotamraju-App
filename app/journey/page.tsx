import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { buildMetadata } from "@/lib/seo/metadata";
import { person } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Journey",
  description:
    "Fourteen years across enterprise systems, hypergrowth operations, transformation consulting, and AI product leadership at JPMorgan Chase — a career read as a systems narrative.",
  path: "/journey",
});

interface TimelineEntry {
  years: string;
  role: string;
  org: string;
  location?: string;
  points: string[];
  lesson: string;
}

const timeline: TimelineEntry[] = [
  {
    years: "2023 — Present",
    role: "Product Manager",
    org: "JPMorgan Chase & Co.",
    location: "Hyderabad, India",
    points: [
      "Independently identified, incubated, and drove multiple AI/ML products from concept to production across ATM Channel and Home Lending platforms, securing executive sponsorship and cross-functional alignment.",
      "Piloted AI-driven resiliency and operational intelligence across the ATM estate — anomaly detection, predictive operations, and service continuity at enterprise scale.",
      "Piloted an AI-powered cash optimization platform targeting a ~20% reduction in unnecessary replenishment cycles and multi-million-dollar annual savings through predictive demand intelligence.",
      "Owned enterprise regulatory delivery for HMDA compliance across 100,000+ annual mortgage records at 100% adherence, while improving reporting efficiency.",
      "Led cloud modernization and platform delivery across multiple engineering teams supporting millions of customer interactions.",
    ],
    lesson:
      "What it taught the thesis: governance is not a phase — in a bank, it must live inside execution, or nothing ships.",
  },
  {
    years: "2021 — 2023",
    role: "Management Consultant",
    org: "Accenture",
    location: "Hyderabad, India",
    points: [
      "Led large-scale enterprise transformation across Telecom and Media clients: cloud modernization, analytics, digital operations, and platform optimization.",
      "Managed cross-functional product and technology delivery across distributed engineering, QA, operations, and business teams.",
      "Partnered with client leadership on roadmaps, governance structures, and enterprise execution strategy in heavily matrixed environments.",
    ],
    lesson:
      "What it taught the thesis: transformation fails not from lack of technology but from fragmented workflows and context that never compounds.",
  },
  {
    years: "2018 — 2021",
    role: "Digital Consulting & Business Analysis",
    org: "Wipro Limited",
    location: "Pune, India",
    points: [
      "Delivered enterprise software across Telecom platforms — large-scale operational and customer-facing systems.",
      "Worked end-to-end across the SDLC: requirements, development coordination, testing, deployment, and production support in high-volume environments.",
    ],
    lesson:
      "What it taught the thesis: operational systems are living things — stability is a property of process design, not luck.",
  },
  {
    years: "2016 — 2018",
    role: "Head of Business Development ← BD Manager",
    org: "OYO",
    location: "Gujarat & Hyderabad, India",
    points: [
      "Led a five-person team expanding supply across four cities — 5x business growth and 3x market-share growth in eight months.",
      "Managed 100+ property accounts, demand forecasting, and operations metrics; drove a 150% reduction in customer-service escalations.",
      "Negotiated exclusive branding, full inventory control, and revenue-share models with high-potential properties.",
    ],
    lesson:
      "What it taught the thesis: hypergrowth is an orchestration problem — coordination breaks long before ambition does.",
  },
  {
    years: "2016",
    role: "Brand Manager",
    org: "Amura Marketing Technologies",
    points: [
      "Formulated brand growth strategy and built the inbound content pipeline across teams in a matrix structure.",
    ],
    lesson:
      "What it taught the thesis: narrative is an interface — positioning is how strategy becomes legible.",
  },
  {
    years: "2014 — 2016",
    role: "Master's, Marketing & Digital Marketing",
    org: "MICA",
    points: [
      "Published research: 'Examining the use of Animated Spokes-Characters for Brand Endorsements — a study of the Indian scenario.'",
    ],
    lesson:
      "What it taught the thesis: rigorous storytelling and rigorous systems are the same discipline applied to different materials.",
  },
  {
    years: "2012 — 2014",
    role: "SAP Functional Lead",
    org: "Accenture",
    points: [
      "SAP ERP, materials management, and finance consulting for a global automobile client — requirements through development, reporting, and system support.",
    ],
    lesson:
      "What it taught the thesis: the ERP era already proved it — enterprises run on their operating layer, not on their org chart.",
  },
  {
    years: "2007 — 2011",
    role: "B.E., Electronics & Communications Engineering",
    org: "CVSR College of Engineering",
    points: [],
    lesson: "Where systems thinking started.",
  },
];

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-[820px] px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <p className="eyebrow mb-4">Journey</p>
        <h1 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Fourteen years inside complex systems
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
          SAP backbones, brand strategy, hypergrowth operations, enterprise transformation, and AI
          product leadership inside one of the world&apos;s largest banks. An unusual path — and the
          point: the thesis was found by meeting the same failure everywhere.
        </p>
      </FadeIn>

      <ol className="mt-16 space-y-0">
        {timeline.map((entry, i) => (
          <FadeIn key={`${entry.org}-${entry.years}`} delay={Math.min(i * 0.04, 0.2)}>
            <li className="border-border relative border-l pb-14 pl-8 last:pb-0">
              <span
                className="border-accent bg-background absolute top-1.5 -left-[5px] size-[9px] rounded-full border"
                aria-hidden
              />
              <p className="text-accent font-mono text-xs tracking-wide">{entry.years}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{entry.role}</h2>
              <p className="text-muted-foreground text-sm">
                {entry.org}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>
              {entry.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="text-muted-foreground text-sm leading-relaxed">
                      — {point}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-4 text-sm leading-relaxed italic">{entry.lesson}</p>
            </li>
          </FadeIn>
        ))}
      </ol>

      <FadeIn className="border-border mt-20 border-t pt-10">
        <h2 className="text-lg font-semibold tracking-tight">Certifications</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {person.certifications.map((cert) => (
            <li
              key={cert}
              className="border-border text-muted-foreground rounded-full border px-3 py-1 font-mono text-xs"
            >
              {cert}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-8 text-sm">
          A formal resume is available on request —{" "}
          <a
            href={`mailto:${person.email}?subject=Resume%20request`}
            className="text-accent hover:underline"
          >
            {person.email}
          </a>
          .
        </p>
      </FadeIn>
    </div>
  );
}
