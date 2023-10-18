export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tennis counter",
  description:
    "Enhance your game with the ultimate tennis assistant. Record your matches, analyze your statistics, and elevate your on-court performance. Develop your winning strategy with our indispensable tennis tool.",
  domain: "https://tennis-counter-pi.vercel.app",
  color: "#011628",
  navItems: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
  },
};
