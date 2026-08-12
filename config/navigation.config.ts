import { services } from "./services.config";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const primaryNav: NavLink[] = [
  {
    label: "Insurance",
    href: "/insurance",
    description: "Browse coverage by category",
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const insuranceMenu: NavLink[] = services.map((s) => ({
  label: s.name,
  href: `/insurance/${s.slug}`,
  description: s.tagline,
}));

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Insurance",
    links: services.map((s) => ({ label: s.name, href: `/insurance/${s.slug}` })),
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Insurance Guides", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Cookie Policy", href: "/legal/cookie-policy" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Accessibility", href: "/legal/accessibility-statement" },
    ],
  },
];
