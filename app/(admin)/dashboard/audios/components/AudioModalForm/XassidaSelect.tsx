"use client"

import { ChevronsUpDown } from "lucide-react"
import { ControllerRenderProps } from "react-hook-form"

import { getXassida } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FormControl } from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import SelectCommand from "./SelectCommand"

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
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <SelectCommand
            placeholder="chercher xassida"
            field={field}
            getFunction={getXassida}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default XassidaSelect
