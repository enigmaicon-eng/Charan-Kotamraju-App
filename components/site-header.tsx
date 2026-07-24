"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/config/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-foreground font-mono text-sm font-semibold tracking-tight">
          charan<span className="text-accent">.os</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {primaryNav.map((item) => {
            const active = !item.href.startsWith("/#") && pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] transition-colors duration-150 sm:px-4 sm:text-sm",
                  active
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.title}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
