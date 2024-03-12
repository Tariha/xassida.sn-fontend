"use client"

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
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Audio</DialogTitle>
          <DialogDescription>Creer ou modifier un audio.</DialogDescription>
        </DialogHeader>
        <AudioForm init={init} />
      </DialogContent>
    </Dialog>
  )
}

export default AudioModalForm
