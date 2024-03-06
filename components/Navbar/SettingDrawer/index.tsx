"use client"

import React from "react"
import { Settings } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import ArabFont from "./ArabFont"
import ThemeToggle from "./ThemeToggle"
import VerseSetting from "./VerseSetting"

const SettingDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Settings className="size-5 md:size-6" />
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-sm">
        <SheetHeader>
          <SheetTitle>Paramètres</SheetTitle>
          <Separator />
        </SheetHeader>
        <div>
          <ThemeToggle />
          <ArabFont />
          <Separator />
          <VerseSetting />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default React.memo(SettingDrawer)
