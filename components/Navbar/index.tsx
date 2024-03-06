"use client"

import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { navbarSelector } from "@/zustand/slices/navbar"
import { useStore } from "@/zustand/store"
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs"
import { Github, Search } from "lucide-react"

import useRouteChanged from "@/hooks/useRouteChanged"
import useScrollDirection from "@/hooks/useScrollDirection"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Command from "@/components/Command"

import NavigationDrawer from "./NavigationDrawer"
import SettingDrawer from "./SettingDrawer"
import { UserAccount } from "./UserAccount"

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null)
  const [open, setOpen] = useState(false)
  const { setVisible, visible } = useStore(navbarSelector)
  const supabase = createClientComponentClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [supabase])

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
      } sticky inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-background px-4 shadow-md duration-200 animate-out slide-in-from-top dark:bg-muted`}
    >
      <div className="flex items-center space-x-2 text-xl font-bold">
        <NavigationDrawer />
        <Link href="/" passHref>
          <h2 className="font-keania">Xassida.sn</h2>
        </Link>
      </div>
      <div className="flex items-center space-x-4 text-xl font-bold">
        {user && <UserAccount user={user} />}
        <a
          target="_blank"
          href="https://github.com/orgs/Tariha/repositories"
          rel="noreferrer"
        >
          <Github className="size-5 md:size-6" />
        </a>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Search className="size-5 cursor-pointer md:size-6" />
          </DialogTrigger>
          <DialogContent className="p-0">
            <Command />
          </DialogContent>
        </Dialog>
        <SettingDrawer />
      </div>
    </div>
  )
}

export default React.memo(Navbar)
