import React from "react"
import TitleTile from "./components/core/TitleTile"
import { contribute } from "@/config/pages"
import DonationTile from "./components/contribution/DonationTile"

export default function contibutionPage() {
  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="flex gap-8 p-4">
          <div className="w-4/6 rounded-lg bg-muted px-4 py-8">
            <TitleTile title={contribute.title} subtitle={contribute.subtitle} />
            <DonationTile />
          </div>
          <div className="w-2/6 rounded-lg bg-muted p-4">
            Questions
          </div>
        </div>
      </div>
    </>
  )
}
