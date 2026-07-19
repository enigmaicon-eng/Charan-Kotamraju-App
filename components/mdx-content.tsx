import { MDXContent as ContentCollectionsMDX } from "@content-collections/mdx/react";
import Link from "next/link";
import type { ComponentProps } from "react";

/** Internal links route through next/link; external links open safely. */
function MdxLink({ href = "", ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }
  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }
  return <a href={href} target="_blank" rel="noreferrer" {...props} />;
}

/**
 * Renders compiled MDX inside the site's prose styles. The typography
 * plugin handles rhythm; tokens keep it on-brand in both themes.
 */
export function MDXContent({ code }: { code: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:font-mono prose-pre:border prose-pre:border-border [&_:is(h1,h2,h3,h4)>a]:text-foreground max-w-none [&_:is(h1,h2,h3,h4)>a]:no-underline">
      <ContentCollectionsMDX code={code} components={{ a: MdxLink }} />
    </div>
  );
}
