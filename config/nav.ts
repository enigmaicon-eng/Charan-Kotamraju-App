/**
 * Site navigation — config-driven so the IA can evolve without touching
 * layout components. Order mirrors the storytelling arc: evidence →
 * thesis → operator → thinking → human.
 */
export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export const primaryNav: NavItem[] = [
  { title: "Systems", href: "/systems" },
  { title: "Thesis", href: "/thesis" },
  { title: "Journey", href: "/journey" },
  { title: "Writing", href: "/writing" },
  { title: "About", href: "/about" },
];

export const footerNav: NavItem[] = [...primaryNav, { title: "RSS", href: "/feed.xml" }];
