import { Verse } from "@/types"
import { Copy, Link } from "lucide-react"

import { copyText } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  data: [string, string]
}

export const CopyVerse: React.FC<Props> = ({ data }) => {
  const { toast } = useToast()
  const onClick = () => {
    copyText(data)
      .then(() =>
        toast({
          description: "Le texte a été copié",
        })
      )
      .catch(console.log)
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Copy onClick={onClick} size={18} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copier le texte</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const CopyLink = () => {
  const { toast } = useToast()
  const onClick = () => {
    copyText([document.URL])
      .then(() =>
        toast({
          description: "Le lien a été copié",
        })
      )
      .catch(console.log)
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link onClick={onClick} size={18} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Copier le lien</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
