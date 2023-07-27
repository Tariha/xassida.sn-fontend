"use client"

import React, { useState } from "react"

import { TARIHA } from "@/lib/constants"
import InfiniteList from "@/components/XassidaList/InfiniteList"

import { Filter, SubFilter } from "./MultiFilter"

const XassidaTab = () => {
  const [params, setParams] = useState({ author__tariha: "tidjan", author: "" })
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <SubFilter
            tariha={params.author__tariha}
            selected={params.author}
            setSelected={(val) => setParams({ ...params, author: val })}
          />
          <Filter
            name="Tariha"
            list={TARIHA}
            selected={params.author__tariha}
            setSelected={(val) => setParams({ ...params, author__tariha: val })}
          />
        </div>
      </div>
      <InfiniteList params={params} />
    </div>
  )
}

export default React.memo(XassidaTab)
