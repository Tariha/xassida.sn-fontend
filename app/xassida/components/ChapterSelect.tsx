"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
  chapters: number[] | string[]
  virtuoso: any
}

const ChapterSelect = ({ chapters, virtuoso }: Props) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const chapitres = chapters.map((chap, i) => ({
    value: `chap-${chap}`,
    label: `Chapitre ${i + 1}`,
  }))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? chapitres.find((chap) => chap.value === value)?.label
            : "Chapitres..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 scrollbar-hide">
        <Command>
          <CommandInput placeholder="Chercher chapitre..." />
          <CommandGroup className="max-h-[300px] overflow-auto">
            {chapitres.map((chap, i) => (
              <CommandItem
                key={chap.value}
                className="cursor-pointer"
                onSelect={() => {
                  setValue(chap.value)
                  virtuoso.current.scrollToIndex({ index: i })
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === chap.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {chap.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ChapterSelect
