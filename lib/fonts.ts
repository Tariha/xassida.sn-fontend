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

const Scheherazade = localFont({
  src: "../public/fonts/Scheherazade.ttf",
  variable: "--font-scheherazade",
  display: "swap",
})

const Amiri = localFont({
  src: "../public/fonts/amiri.ttf",
  variable: "--font-amiri",
  display: "swap",
})

const Lateef = localFont({
  src: "../public/fonts/lateef.ttf",
  variable: "--font-lateef",
  display: "swap",
})

export { keania, fontSans, Hafs, Scheherazade, Amiri, Lateef }
