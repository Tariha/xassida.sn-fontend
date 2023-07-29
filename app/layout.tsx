import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import {
  Amiri,
  Hafs,
  Lateef,
  Scheherazade,
  Warsh,
  fontSans,
  keania,
} from "@/lib/fonts"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  applicationName: "xassida.sn",
  category: "technology",
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: ["/icons/favicon-16x16.png", "/icons/favicon-32x32.png"],
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
        <head />
        <body
          // eslint-disable-next-line tailwindcss/classnames-order
          className={`
            font-sans text-sm
            ${fontSans.variable}
            ${keania.variable}
            ${Hafs.variable}
            ${Warsh.variable}
            ${Scheherazade.variable}
            ${Lateef.variable}
            ${Amiri.variable}
          `}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
