import AuthorTab from "@/components/HomePage/Tabs/AuthorTab"
import FavoritesTab from "@/components/HomePage/Tabs/FavoritesTab"
import HistoryTab from "@/components/HomePage/Tabs/HistoryTab"
import XassidaTab from "@/components/HomePage/Tabs/XassidaTab"
import { IDonation } from "@/types/donation"

export const TABS = {
  top: {
    Historique: HistoryTab,
    Favories: FavoritesTab,
  },
  bottom: {
    Xassidas: XassidaTab,
    Auteurs: AuthorTab,
    Recitateurs: "div",
  },
}

export const TARIHA = [
  { id: "tidjan", value: "tidjan" },
  { id: "mouride", value: "mouride" },
  { id: "niassene", value: "niassene" },
  { id: "layenne", value: "layenne" },
  { id: "khadre", value: "khadre" },
]

export const FONTS = [
  { value: "font-hafs", label: "Hafs" },
  { value: "font-warsh", label: "Warsh" },
  { value: "font-scheherazade", label: "Scheherazade" },
  { value: "font-amiri", label: "Amiri" },
  { value: "font-lateef", label: "Lateef" },
]

export const LANG = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
]


export const DONATIONS:IDonation = {
  types: [
    { value: "one-time", label: "Ponctuel" },
    { value: "recurring", label: "Régulier" },
  ],
  frequency: [
    { value: "monthly", label: "Chaque mois" },
    { value: "weekly", label: "Chaque Semaine" },
    { value: "yearly", label: "1 fois par An" },
  ],
  amounts: [
    { price: 500, label: "500 FCfa", ref: "DNR_1" },
    { price: 1000, label: "1 000 FCfa", ref: "DNR_2" },
    { price: 5000, label: "5 000 FCfa", ref: "DNR_3" },
    { price: 10000, label: "10 000 FCfa", ref: "DNR_4" },
  ]
}
