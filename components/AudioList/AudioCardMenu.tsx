import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteAudio } from "@/actions/api/client"
import { Edit, MoreHorizontal } from "lucide-react"

import { Audio } from "@/types/supabase"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import Confirm from "@/components/Confirm"
import AudioModalForm from "@/app/(admin)/dashboard/audios/_components/Modal"

interface Props {
  data: Audio
}

const AudioCardMenu: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  async function handleDelete(e: any) {
    e.preventDefault()
    deleteAudio(data.id)
      .then(() => {
        router.refresh()
      })
      .catch(() => {
        return toast({
          title: "Quelque chose s'est mal passé",
          description: "",
          variant: "destructive",
        })
      })
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <MoreHorizontal size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-22">
        <AudioModalForm init={data}>
          <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-yellow-500">
            <Edit size={14} />
            <span>Modifier</span>
          </div>
        </AudioModalForm>
        <Confirm
          message="Cette action va causer la supression de l'audio"
          callback={handleDelete}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AudioCardMenu
