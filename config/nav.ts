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
  { title: "Projects", href: "/#projects" },
  { title: "Thesis", href: "/thesis" },
  { title: "Experience", href: "/#experience" },
  { title: "Writing", href: "/#insights" },
  { title: "About", href: "/#about" },
];

export const footerNav: NavItem[] = [...primaryNav, { title: "RSS", href: "/feed.xml" }];
