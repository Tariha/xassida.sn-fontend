"use client"

import { searchXassida } from "@/actions/api/client"
import { ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FormControl } from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import SelectInputCommand from "./SelectInputCommand"

interface Props {
  field: any
}

const XassidaSelect = ({ field }: Props) => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "justify-between",
                !field.value && "text-muted-foreground"
              )}
            >
              Choisir Xassida
              <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <SelectInputCommand
            key="xas"
            field={field}
            getter={searchXassida}
            placeholder="chercher xassida"
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default XassidaSelect
