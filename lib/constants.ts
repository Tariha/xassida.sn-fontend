import { IDonation } from "@/types/donation"
import AuthorTab from "@/components/HomePage/Tabs/AuthorTab"
import FavoritesTab from "@/components/HomePage/Tabs/FavoritesTab"
import HistoryTab from "@/components/HomePage/Tabs/HistoryTab"
import ReciterTab from "@/components/HomePage/Tabs/ReciterTab"
import XassidaTab from "@/components/HomePage/Tabs/XassidaTab"

export const TABS = {
  top: {
    Historique: HistoryTab,
    Favories: FavoritesTab,
  },
  bottom: {
    Xassidas: XassidaTab,
    Auteurs: AuthorTab,
    Recitateurs: ReciterTab,
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

export const DONATIONS: IDonation = {
  types: [
    { value: "one-time", label: "Ponctuel", disabled: false },
    { value: "recurring", label: "Régulier", disabled: true },
  ],
  frequency: [
    { value: "monthly", label: "Chaque mois" },
    { value: "weekly", label: "Chaque Semaine" },
    { value: "yearly", label: "1 fois par An" },
  ],
  amounts: [
    { price: "500", label: "500 FCfa", ref: "mnt-1" },
    { price: "1000", label: "1 000 FCfa", ref: "mnt-2" },
    { price: "5000", label: "5 000 FCfa", ref: "mnt-3" },
    { price: "10000", label: "10 000 FCfa", ref: "mnt-4" },
  ],
}

export const PAYMENT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  API_KEY: process.env.NEXT_PUBLIC_API_KEY!,
  API_SECRET: process.env.NEXT_PUBLIC_API_SECRET!,
}
