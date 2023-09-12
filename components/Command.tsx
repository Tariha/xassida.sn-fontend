"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import useSWR from "swr"

import { fetcher, getXassida } from "@/lib/api"
import { unslugify } from "@/lib/utils"
import { useDebounce } from "@/hooks/useDebounce"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const SearchCommand = () => {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 1000)

  const key = debouncedSearch
    ? getXassida({ params: { search: debouncedSearch } })
    : null
  const { data, error, isLoading } = useSWR(key, fetcher)

  return (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder="Chercher un xassida"
        className="h-16"
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>Pas de résultat</CommandEmpty>
        {data?.map((sug: any) => (
          <CommandItem key={sug.id}>
            <div className="flex-1 cursor-pointer rounded-md p-2 hover:bg-vert">
              <Link
                className="flex items-center justify-between"
                href={`/xassida/${sug.id}`}
                passHref
              >
                {" "}
                <ArrowRight className="mr-2 h-4 w-4" />
                <div className="flex w-full items-center justify-between">
                  <span className="md:text-md text-sm font-bold capitalize">
                    {unslugify(sug.name)}
                  </span>
                  <span className="text-xs">{unslugify(sug.author.name)}</span>
                </div>
              </Link>
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}

export default React.memo(SearchCommand)
