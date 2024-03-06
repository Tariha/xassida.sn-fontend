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

import ReciterForm from "./ReciterForm"

interface Props extends React.PropsWithChildren {
  init?: any
}

const ReciterModalForm: React.FC<Props> = ({ init, children }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recitateur</DialogTitle>
          <DialogDescription>
            Creer ou modifier les informations d&apos;un recitateur.
          </DialogDescription>
        </DialogHeader>
        <ReciterForm init={init} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default ReciterModalForm
