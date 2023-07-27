"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Command from "@/components/Command"

const SearchCommand = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && e.metaKey) setOpen(true)
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex w-full max-w-2xl items-center justify-between rounded-full bg-white px-4">
          <Search className="text-gray-600" />
          <input
            placeholder="Qu'est ce que vous voulez lire ?"
            className="md:text-md w-full cursor-pointer border-0 bg-transparent px-2 py-4 text-sm outline-none"
          />
          <p className="whitespace-nowrap text-sm text-slate-600">
            Cliquer{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-100 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
              <span className="text-xs">⌘</span>J
            </kbd>
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <Command />
      </DialogContent>
    </Dialog>
  )
}

export default SearchCommand
