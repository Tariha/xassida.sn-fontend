"use client"

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
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recitateur</DialogTitle>
          <DialogDescription>
            Creer ou modifier les informations d&apos;un recitateur.
          </DialogDescription>
        </DialogHeader>
        <ReciterForm init={init} />
      </DialogContent>
    </Dialog>
  )
}

export default ReciterModalForm
