"use client"

import React, { useState } from "react"

import { getAuthor } from "@/lib/api"
import { TARIHA } from "@/lib/constants"
import AuthorList from "@/components/AuthorList"
import InfiniteList from "@/components/InfiniteList"

import { Filter } from "./MultiFilter"

const AuthorTab = () => {
  const [tariha, setTariha] = useState("tidjan")
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <Filter
            name="Confréries"
            list={TARIHA}
            selected={tariha}
            setSelected={setTariha}
          />
        </div>
      </div>
      <InfiniteList params={{ tariha }} Component={AuthorList} type="author" />
    </div>
  )
}

export default React.memo(AuthorTab)
