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

export const imageUrl =
  "https://ahvinsybpljgkcomlksn.supabase.co/storage/v1/object/public/images/"

export const audioUrl =
  "https://ahvinsybpljgkcomlksn.supabase.co/storage/v1/object/public/audios/"
