"use client"

import React, { useState } from "react"
import Link from "next/link"
import { searchXassida } from "@/actions/api/client"
import { ArrowRight } from "lucide-react"
import useSWR from "swr"

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
  const key = debouncedSearch ? `xas_${debouncedSearch}` : null

  const { data } = useSWR(key, () => searchXassida(debouncedSearch))

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
                <ArrowRight className="mr-2 size-4" />
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
