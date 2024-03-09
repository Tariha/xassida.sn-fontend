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
import AudioPlayer from "@/components/AudioPlayer"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import RamadanButton from "@/components/Navbar/RamadanButton"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  applicationName: "xassida.sn",
  category: "technology",
  manifest: "/manifest.json",
  description: siteConfig.description,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `%s - ${siteConfig.name}`,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
  },
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

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
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
            <div className="relative flex min-h-screen flex-col pb-12">
              <div className="flex justify-center py-2 md:hidden md:py-0">
                <RamadanButton />
              </div>
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
            <AudioPlayer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
