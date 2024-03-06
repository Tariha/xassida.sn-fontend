"use client"

import React, { useState } from "react"
import { CheckIcon } from "lucide-react"
import useSWR from "swr"

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
  key: string
  field: any
  getter: (params?: any) => Promise<any>
  placeholder: string
}

const SelectInputCommand: React.FC<Props> = ({
  key,
  field,
  getter,
  placeholder,
}) => {
  const [search, setSearch] = useState<string>("")
  const debouncedSearch = useDebounce(search, 1000)

  const { data } = useSWR(`${key}_${debouncedSearch}`, () =>
    getter(debouncedSearch)
  )

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
                  "ml-auto size-4",
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
