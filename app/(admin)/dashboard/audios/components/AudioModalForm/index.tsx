"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import AudioForm from "./AudioForm"

const AudioModalForm = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-2">
          <Plus size={14} />
          <span>Audio</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Audio</DialogTitle>
          <DialogDescription>Creer ou modifier un audio.</DialogDescription>
        </DialogHeader>
        <AudioForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default AudioModalForm
