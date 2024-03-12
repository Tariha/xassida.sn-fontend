import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { deleteReciter } from "@/actions/api/client"
import { Author, Reciter } from "@/types"
import { Edit, MoreHorizontal } from "lucide-react"

import { imageUrl } from "@/lib/constants"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import Confirm from "@/components/Confirm"
import ReciterModalForm from "@/app/(admin)/dashboard/reciters/_components/Modal"

interface Props {
  data: Author | Reciter
  setOpen?: () => void
}

const ReciterCard: React.FC<Props> = ({ data, setOpen }) => {
  const pathname = usePathname()
  return (
    <Card className="max-h-18 group relative cursor-pointer border-gray-500 bg-transparent ring-[#2ca4ab] hover:border-0 hover:ring-1">
      {pathname === "/dashboard" && (
        <div className="absolute right-2 top-1">
          <ReciterCardMenu data={data} />
        </div>
      )}
      <CardHeader onClick={setOpen} className="p-3">
        <CardTitle className="flex items-center justify-center">
          <Avatar className="size-20 lg:size-32">
            <AvatarImage src={`${imageUrl}${data.picture}`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardDescription className="mt-2 truncate text-center font-keania text-xs font-bold capitalize text-foreground group-hover:text-vert">
          {unslugify(data.name)}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

const ReciterCardMenu: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  async function handleDelete(e: any) {
    e.preventDefault()
    deleteReciter(data.id)
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
        <ReciterModalForm init={data}>
          <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-yellow-500">
            <Edit size={14} />
            <span>Modifier</span>
          </div>
        </ReciterModalForm>
        <Confirm
          message="Cette action va causer la supression du récitateur"
          callback={handleDelete}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ReciterCard
