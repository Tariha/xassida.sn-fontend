"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import AudioForm from "./AudioForm"

interface Props extends React.PropsWithChildren {
  init?: any
}

const AudioModalForm: React.FC<Props> = ({ init, children }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Audio</DialogTitle>
          <DialogDescription>Creer ou modifier un audio.</DialogDescription>
        </DialogHeader>
        <AudioForm init={init} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default AudioModalForm
