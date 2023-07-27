import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props {
  chapters: number[]
  virtuoso: any
}

const ChapterSelect = ({ chapters, virtuoso }: Props) => {
  const scrollTo = (index: number) => {
    virtuoso.current.scrollToIndex({ index, align: "start" })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2 border-b-2 border-slate-900 dark:border-gray-500 ">
          <span className="text-ms cursor-pointer px-1 font-semibold lg:text-lg">
            Chapitres
          </span>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none text-sm">
        <DropdownMenuRadioGroup value={"tidjan"} onValueChange={() => null}>
          {chapters.map((chap, i) => (
            <DropdownMenuRadioItem
              onClick={() => scrollTo(i)}
              key={i}
              className="font-bold"
              value="tidjan"
            >
              Chapitre {i + 1}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChapterSelect
