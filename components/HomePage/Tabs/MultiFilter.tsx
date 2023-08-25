import React from "react"
import { Filter as FilterIcon } from "lucide-react"
import useSWRImmutable from "swr/immutable"

import { fetcher, getAuthor } from "@/lib/api"
import { unslugify } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FilterProps {
  name: string
  list: any
  selected: string
  setSelected: (val: string) => void
}

const Filter: React.FC<FilterProps> = ({
  name,
  list,
  selected,
  setSelected,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2 border-b-2 border-gray-500 ">
          <span className="cursor-pointer px-1 font-semibold">{name}</span>
          <FilterIcon size={18} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          {name == "Auteurs" && (
            <DropdownMenuRadioItem
              className="cursor-pointer text-sm font-bold capitalize"
              value=""
            >
              Tous
            </DropdownMenuRadioItem>
          )}
          {list.map((obj: any) => (
            <DropdownMenuRadioItem
              key={obj.id}
              className="cursor-pointer text-sm font-bold capitalize"
              value={obj.id}
            >
              {unslugify(obj?.name || obj?.value)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface SubFilterProps {
  tariha: string
  selected: string
  setSelected: (val: string) => void
}
const SubFilter: React.FC<SubFilterProps> = ({
  tariha,
  selected,
  setSelected,
}) => {
  const key = getAuthor({ params: { tariha } })
  const { data, error, isLoading } = useSWRImmutable(key, fetcher)
  return (
    <div className="flex items-center space-x-2">
      {data && (
        <Filter
          name="Auteurs"
          list={data}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  )
}

export { Filter, SubFilter }
