import CustomIcon from "@/components/icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Xassida.sn",
  description: "Lire et écouter les xassidas des differents confréries",
  nav: [
    {
      title: "Acceuil",
      href: "/",
      icon: CustomIcon({ name: "Home", size: 16, className: "text-vert" }),
    },
    {
      title: "A Propos",
      href: "/about",
      icon: CustomIcon({ name: "Info", size: 18, className: "text-vert" }),
    },
    {
      title: "Connexion",
      href: "/login",
      icon: CustomIcon({ name: "LogIn", size: 18, className: "text-vert" }),
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: CustomIcon({ name: "Settings2", size: 18, className: "text-vert" }),
    },
  ],
}
