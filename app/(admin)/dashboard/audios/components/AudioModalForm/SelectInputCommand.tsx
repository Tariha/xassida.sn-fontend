"use client"

import React, { useState } from "react"
import { CheckIcon } from "lucide-react"
import useSWR from "swr"

import { fetcher } from "@/lib/api"
import { cn, unslugify } from "@/lib/utils"
import { useDebounce } from "@/hooks/useDebounce"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface Props {
  placeholder: string
  field: any
  getFunction: (params: any) => string | null
}

const SelectInputCommand: React.FC<Props> = ({
  placeholder,
  field,
  getFunction,
}) => {
  const [search, setSearch] = useState<string>("")
  const debouncedSearch = useDebounce(search, 1000)

  const key = debouncedSearch
    ? getFunction({ params: { search: debouncedSearch } })
    : null
  const { data, error, isLoading } = useSWR(key, fetcher)

  return (
    <Command shouldFilter={false}>
      <CommandInput
        placeholder={placeholder}
        className="h-12"
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty className="text-center text-sm">
          Pas de résultat
        </CommandEmpty>
        {data?.map((res: any) => (
          <CommandItem
            value={res.id}
            key={res.id}
            onSelect={() => field.onChange(res.id)}
            className="m-0 p-0 text-xs"
          >
            <div className="flex flex-1 items-center rounded-md p-2 hover:bg-background">
              <span className="mr-2">{unslugify(res.name)}</span>
              <span className="italic">{res.author?.tariha}</span>
              <CheckIcon
                className={cn(
                  "ml-auto h-4 w-4",
                  res.id === field.value ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}

export default SelectInputCommand
