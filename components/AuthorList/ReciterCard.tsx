import { useState } from "react"
import Link from "next/link"
import { Author, Reciter } from "@/types"
import { Edit, MoreHorizontal, Trash } from "lucide-react"
import { getSession } from "next-auth/react"

import { BASE_URL, fetcher } from "@/lib/api"
import { unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

interface Props {
  data: Author | Reciter
  link?: string
}

const ReciterCard: React.FC<Props> = ({ data, link = "author" }) => (
  <Card className="max-h-18 group relative cursor-pointer border-gray-500 bg-transparent ring-[#2ca4ab] hover:border-0 hover:ring-1">
    <div className="absolute right-2 top-1">
      <ReciterCardMenu id={data.id} />
    </div>
    <CardHeader className="p-3">
      <CardTitle className="flex items-center justify-center">
        <Avatar className="h-20 w-20 lg:h-32 lg:w-32">
          <AvatarImage src={data.picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardTitle>
      <CardDescription className="mt-2 truncate text-center font-keania text-xs font-bold capitalize group-hover:text-vert">
        {unslugify(data.name)}
      </CardDescription>
    </CardHeader>
  </Card>
)

async function deleteReciter(id: number) {
  const session: any = await getSession()
  const resp = await fetch(`${BASE_URL}reciters/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${session?.access}` },
    cache: "no-cache",
  })
  if (!resp.ok) throw new Error("Suppression échoué")
  return resp
}

const ReciterCardMenu = ({ id }: { id: number }) => {
  const [open, setOpen] = useState<boolean>(false)
  async function handleDelete(e: any) {
    e.preventDefault()
    deleteReciter(id)
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
        <DropdownMenuItem className="flex cursor-pointer justify-between text-xs focus:bg-yellow-500">
          <Edit size={14} />
          <span>Modifier</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleDelete}
          className="flex cursor-pointer justify-between text-xs focus:bg-red-500"
        >
          <Trash size={14} />
          <span>Supprimer</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ReciterCard
