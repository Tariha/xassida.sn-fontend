"use client"

import React, { Suspense } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CustomIcon from "@/components/icons"

import DonationCard from "./DonationCard"

const NavigationDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CustomIcon name="Menu" size={22} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent position="left" className="w-full md:max-w-sm">
        <SheetHeader>
          <SheetTitle className="font-keania">Xassida.sn</SheetTitle>
          <Separator />
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <DonationCard />
          <NavigationLinks />
        </div>
      </SheetContent>
    </Sheet>
  )
}

const NavigationLinks = () => (
  <div className="">
    <h3 className="mb-2 text-sm font-bold uppercase">Menu</h3>
    <Separator />
    <ul className="flex flex-col">
      {siteConfig.nav.map((link) => (
        <div key={link.href}>
          <Link href={link.href} passHref>
            <li className="flex cursor-pointer items-center space-x-3 py-2 hover:text-vert">
              {link.icon}
              <span>{link.title}</span>
            </li>
          </Link>
          <Separator />
        </div>
      ))}
    </ul>
  </div>
)

export default React.memo(NavigationDrawer)
