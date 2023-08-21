import React from "react"

import { contribute } from "@/config/pages"

import DonationForm from "./components/contribution/DonationForm"
import TitleTile from "./components/core/TitleTile"

export default function contibutionPage() {
  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 rounded-lg bg-muted px-4 py-8 md:col-span-4">
            <TitleTile
              title={contribute.title}
              subtitle={contribute.subtitle}
            />
            <DonationForm />
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="rounded-lg bg-muted  p-4">Questions</div>
          </div>
        </div>
      </div>
    </>
  )
}
