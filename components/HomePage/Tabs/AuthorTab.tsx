"use client"

import React, { useState } from "react"
import { Author } from "@/types"
import useSWRImmutable from "swr/immutable"

import { fetcher, getAuthor } from "@/lib/api"
import { TARIHA } from "@/lib/constants"

import AuthorCard from "../AuthorCard"
import { Filter, SubFilter } from "./MultiFilter"

const AuthorTab = () => {
  const [tariha, setTariha] = useState("tidjan")
  const key = getAuthor({ params: { tariha } })
  const { data, error, isLoading } = useSWRImmutable(key, fetcher)
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
      <div className="scrollbar-hide grid grid-cols-2 gap-4 overflow-x-scroll px-1 py-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:px-2">
        {data &&
          data.map((author: Author) => (
            <AuthorCard data={author} key={author.id} />
          ))}
      </div>
    </div>
  )
}

export default React.memo(AuthorTab)
