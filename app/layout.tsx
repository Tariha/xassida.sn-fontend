import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import {
  Amiri,
  Hafs,
  Lateef,
  Scheherazade,
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
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
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
            min-h-screen bg-background
            font-sans
            antialiased
            ${fontSans.variable}
            ${keania.variable}
            ${Hafs.variable}
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
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
