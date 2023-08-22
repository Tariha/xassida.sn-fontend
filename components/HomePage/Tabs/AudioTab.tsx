"use client"

import React, { useState } from "react"

import { TARIHA } from "@/lib/constants"
import AudioList from "@/components/AudioList"
import InfiniteList from "@/components/InfiniteList"

import { Filter } from "./MultiFilter"

const AudioTab = () => {
  const [tariha, setTariha] = useState("tidjan")
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <Filter
            name="Tariha"
            list={TARIHA}
            selected={tariha}
            setSelected={setTariha}
          />
        </div>
      </div>
      <InfiniteList
        params={{ reciter__tariha: tariha }}
        Component={AudioList}
        type="audio"
      />
    </div>
  )
}

export default React.memo(AudioTab)
