"use client"

import React, { useState } from "react"

import { TARIHA } from "@/lib/constants"
import InfiniteList from "@/components/InfiniteList"
import ReciterList from "@/components/ReciterList"

import { Filter } from "./MultiFilter"

const ReciterTab = () => {
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
        params={{ tariha }}
        Component={ReciterList}
        type="reciter"
      />
    </div>
  )
}

export default React.memo(ReciterTab)
