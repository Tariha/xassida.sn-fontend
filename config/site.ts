import CustomIcon from "@/components/icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Xassida.sn",
  description: "Lire et écouter les xassidas des différentes confréries",
  nav: [
    {
      title: "Accueil",
      href: "/",
      icon: CustomIcon({ name: "Home", size: 16, className: "text-vert" }),
    },
    {
      title: "À Propos",
      href: "/about",
      icon: CustomIcon({ name: "Info", size: 18, className: "text-vert" }),
    },
    {
      title: "Connexion",
      href: "/login",
      icon: CustomIcon({ name: "LogIn", size: 18, className: "text-vert" }),
    },
    {
      title: "Tableau de bord",
      href: "/dashboard",
      icon: CustomIcon({ name: "Settings2", size: 18, className: "text-vert" }),
    },
  ],
}
