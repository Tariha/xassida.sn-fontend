"use client"

import React, { useState } from "react"

import { getXassida } from "@/lib/api"
import { TARIHA } from "@/lib/constants"
import InfiniteList from "@/components/InfiniteList"
import XassidaList from "@/components/XassidaList"

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
            setSelected={(val) =>
              setParams({ author__tariha: val, author: "" })
            }
          />
        </div>
      </div>
      <InfiniteList params={params} Component={XassidaList} type="xassida" />
    </div>
  )
}

export default React.memo(XassidaTab)
