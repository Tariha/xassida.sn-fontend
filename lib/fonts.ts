import { Inter as FontSans, Keania_One } from "next/font/google"
import localFont from "next/font/local"

const keania = Keania_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-keania",
  display: "swap",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const Hafs = localFont({
  src: "../public/fonts/Hafs.ttf",
  variable: "--font-hafs",
  display: "swap",
})

const Warsh = localFont({
  src: "../public/fonts/Warsh.otf",
  variable: "--font-warsh",
  display: "swap",
})

const Scheherazade = localFont({
  src: "../public/fonts/Scheherazade.ttf",
  variable: "--font-scheherazade",
  display: "swap",
})

const Amiri = localFont({
  src: "../public/fonts/Amiri.ttf",
  variable: "--font-amiri",
  display: "swap",
})

const Lateef = localFont({
  src: "../public/fonts/Lateef.ttf",
  variable: "--font-lateef",
  display: "swap",
})

export { keania, fontSans, Hafs, Warsh, Scheherazade, Amiri, Lateef }
