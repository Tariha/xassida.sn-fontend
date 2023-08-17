"use client"

import React, { useCallback, useState } from "react"
import Link from "next/link"
import { navbarSelector } from "@/zustand/slices/navbar"
import { useStore } from "@/zustand/store"
import { Github, Search } from "lucide-react"

import useRouteChanged from "@/hooks/useRouteChanged"
import useScrollDirection from "@/hooks/useScrollDirection"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Command from "@/components/Command"

import NavigationDrawer from "./NavigationDrawer"
import SettingDrawer from "./SettingDrawer"
import { AccountNavProps, UserAccount } from "./UserAccount"

const Navbar = ({ user }: AccountNavProps) => {
  const [open, setOpen] = useState(false)
  const { setVisible, visible } = useStore(navbarSelector)

  useRouteChanged(() => {
    setOpen(false)
    setVisible(true)
  })

  const onDirectionChange = useCallback(
    (direction: string, newYPosition: number) => {
      if (newYPosition > 80 && direction === "down") setVisible(false)
      else if (newYPosition >= 5 && direction === "up") setVisible(true)
    },
    [setVisible]
  )

  useScrollDirection(onDirectionChange)

  return (
    <div
      className={`${
        visible ? "translate-y-0" : "-translate-y-full"
      } sticky inset-x-0 top-0 z-10 flex items-center justify-between bg-background p-4 shadow-md animate-out slide-in-from-top duration-200 dark:bg-muted`}
    >
      <div className="flex items-center space-x-2 text-xl font-bold">
        <NavigationDrawer />
        <Link href="/" passHref>
          <h2 className="font-keania">Xassida.sn</h2>
        </Link>
      </div>
      <div className="flex items-center space-x-4 text-xl font-bold">
        <a
          target="_blank"
          href="https://github.com/orgs/Tariha/repositories"
          rel="noreferrer"
        >
          <Github className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Search className="h-5 w-5 cursor-pointer md:h-6 md:w-6" />
          </DialogTrigger>
          <DialogContent className="p-0">
            <Command />
          </DialogContent>
        </Dialog>
        <SettingDrawer />
        {user && <UserAccount user={user} />}
      </div>
    </div>
  )
}

export default React.memo(Navbar)
