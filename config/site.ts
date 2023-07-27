import CustomIcon from "@/components/icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Xassida.sn",
  description: "Lire et ecouter les xassidas des differents tariha",
  nav: [
    {
      title: "Acceuil",
      href: "/",
      icon: CustomIcon({ name: "Home", size: 20, className: "text-vert" }),
    },
    {
      title: "A Propos",
      href: "/about",
      icon: CustomIcon({ name: "Info", size: 20, className: "text-vert" }),
    },
  ],
}
