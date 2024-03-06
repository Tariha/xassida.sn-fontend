"use client"

import React, { useState } from "react"

import { TARIHA } from "@/lib/constants"
import InfiniteList from "@/components/InfiniteList"
import XassidaList from "@/components/XassidaList"

import { Filter, SubFilter } from "./MultiFilter"

const XassidaTab = () => {
  const [params, setParams] = useState({
    "author.tariha": "tidjan",
    "author.id": "",
  })
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <SubFilter
            tariha={params["author.tariha"]}
            selected={params["author.id"]}
            setSelected={(val) => setParams({ ...params, "author.id": val })}
          />
          <Filter
            name="Confréries"
            list={TARIHA}
            selected={params["author.tariha"]}
            setSelected={(val) =>
              setParams({ "author.tariha": val, "author.id": "" })
            }
          />
        </div>
      </div>
      <InfiniteList params={params} Component={XassidaList} type="xassida" />
    </div>
  )
}

export default React.memo(XassidaTab)
