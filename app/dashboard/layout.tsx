import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"

import { SidebarNav } from "./components/SideNav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Interface des administrateurs",
}

const sidebarNavItems = [
  {
    title: "Recitateurs",
    href: "/dashboard",
  },
  {
    title: "Audios",
    href: "/dashboard/audios",
  },
  {
    title: "Xassidas",
    href: "/dashboard/xassidas",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="block space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
