import React from "react"
import Image from "next/image"

import Bismillah from "@/components/Bismillah"

import SearchCommand from "./Search"

const Banner = () => {
  return (
    <div className="bg-norepeat flex h-[380px] flex-col items-center bg-bismillah bg-cover p-2">
      <div className="relative">
        <Bismillah width={350} height={250} className="fill-white" />
      </div>
      <SearchCommand />
    </div>
  )
}

export default React.memo(Banner)
