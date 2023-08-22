import React, { useState } from "react"
import { Audio } from "@/types"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import { getSession } from "next-auth/react"

import { BASE_URL } from "@/lib/api"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import Confirm from "@/components/Confirm"
import AudioModalForm from "@/app/(admin)/dashboard/audios/components/AudioModalForm"

interface Props {
  data: Audio
}

async function deleteAudio(id: number) {
  const session: any = await getSession()
  const resp = await fetch(`${BASE_URL}audios/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${session?.access}` },
    cache: "no-cache",
  })
  if (!resp.ok) throw new Error("Suppression échoué")
  return resp
}

const AudioCardMenu: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false)

  async function handleDelete(e: any) {
    e.preventDefault()
    deleteAudio(data.id)
      .then(() => setOpen(false))
      .catch((err) => {
        console.log(err)
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
