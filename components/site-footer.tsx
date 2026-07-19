import Link from "next/link";
import { footerNav } from "@/config/nav";
import { person } from "@/config/site";

const socialLinks = [
  { title: "GitHub", href: person.links.github },
  { title: "LinkedIn", href: person.links.linkedin },
  { title: "X", href: person.links.x },
  { title: "Email", href: `mailto:${person.email}` },
];

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="space-y-2">
            <p className="font-mono text-sm font-semibold">
              charan<span className="text-accent">.os</span>{" "}
              <span className="text-muted-foreground font-normal">v1</span>
            </p>
            <p className="text-muted-foreground max-w-sm text-sm">
              Operating systems for intelligence — enterprises, operators, and learners.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-2">
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-150"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-150"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-muted-foreground font-mono text-xs">
          © {new Date().getFullYear()} {person.fullName} · {person.location} · Built in public
        </p>
      </div>
    </footer>
  );
}
