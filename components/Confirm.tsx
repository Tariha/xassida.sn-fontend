import { Trash } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button, buttonVariants } from "./ui/button"

interface Props {
  message: string
  callback: any
}

const Confirm: React.FC<Props> = ({ message, callback }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-destructive hover:bg-destructive hover:text-white">
        <Trash size={14} />
        <span>supprimer</span>
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent className="border-destructive text-destructive">
      <AlertDialogHeader>
        <AlertDialogTitle>Cette action est irreversible</AlertDialogTitle>
        <AlertDialogDescription className="text-destructive">
          {message}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="text-foreground">
          Annuler
        </AlertDialogCancel>
        <AlertDialogAction
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-background text-destructive"
          )}
          onClick={callback}
        >
          Confirmer
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)

export default Confirm
