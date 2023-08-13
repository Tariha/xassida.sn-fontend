import React from "react"
import TitleTile from "./components/TitleTile"
import { contribute } from "@/config/pages"

export default function contibutionPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex gap-8 p-4">
          <div className="rounded-xl bg-muted p-4">
            <TitleTile title={contribute.title} subtitle={contribute.subtitle} />
            ContributionTile
          </div>
          <div className="w-64">
            Questions
          </div>
        </div>
      </div>
    </>
  )
}
