import { Audio, Xassida } from "@/types"
import { playerStore } from "@/zustand/playerStore"
import { Download, Pause, Play } from "lucide-react"

import { unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { TooltipButton } from "../ui/tooltip-button"

interface Props {
  data: Audio
}

const AudioCard: React.FC<Props> = ({ data }) => {
  const xassida = { id: data.xassida_info?.id, file: data.file }
  return (
    <div className="group relative flex cursor-pointer items-center justify-between rounded-md border border-gray-500 p-3 px-2 font-mono hover:border-0 hover:ring-1 hover:ring-[#2ca4ab]">
      <div className="flex items-center space-x-2">
        <Avatar className="ring-[#2ca4ab] group-hover:ring-2">
          <AvatarImage src={data.reciter_info?.picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="truncate text-xs font-bold capitalize">
            {unslugify(data.xassida_info?.name || "")}
          </p>
          <span className="text-xs capitalize text-gray-500 group-hover:text-[#2ca4ab]">
            {unslugify(data.reciter_info?.name || "")}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Controls xassida={xassida} />
      </div>
    </div>
  )
}

const Controls = ({ xassida }: any) => {
  const audioService = playerStore((state) => state)
  return (
    <>
      <TooltipButton
        onClick={() => audioService.playXassida(xassida)}
        tooltip="Demarrer/Arreter"
      >
        {audioService.isCurrentPlaying(xassida) ? (
          <Pause className="h-4 w-4 fill-primary text-primary" />
        ) : (
          <Play className="h-4 w-4 fill-primary text-primary" />
        )}
      </TooltipButton>
      <TooltipButton tooltip="Telecharger">
        <Download size={16} />
      </TooltipButton>
    </>
  )
}

export default AudioCard
