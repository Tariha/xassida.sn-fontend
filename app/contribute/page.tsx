import React from "react"
import TitleTile from "./components/TitleTile"

export default function contibutionPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex gap-8 p-4">
          <div className="rounded-xl bg-muted p-4">
          <TitleTile
            title="The Quran transforms lives. Help us spread its light."
            subtitle="Alhamdulillah, with your support, Quran.com has grown by 75% since last Ramadan, reaching 4 million monthly users. Your donation will empower us to reach more people, continue to improve user experience, leverage AI, grow scholarly content and enable community reflection."
          />
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
