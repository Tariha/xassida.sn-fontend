import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Interface des administrateurs",
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="block space-y-6 p-4 pb-16 md:p-8 lg:p-10">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Separator className="my-6" />
      {children}
    </div>
  )
}
