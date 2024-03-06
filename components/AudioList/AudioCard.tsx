"use client"

import { usePathname } from "next/navigation"
import { playerStore } from "@/zustand/playerStore"
import { Download, Loader, Pause, Play } from "lucide-react"

import { playingType } from "@/types/player"
import { Audio } from "@/types/supabase"
import { audioUrl, imageUrl } from "@/lib/constants"
import { unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { TooltipButton } from "../ui/tooltip-button"
import AudioCardMenu from "./AudioCardMenu"

interface Props {
  data: Audio
}

const AudioCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="group relative flex cursor-pointer items-center justify-between rounded-md border border-gray-500 p-3 px-2 font-mono hover:border-0 hover:ring-1 hover:ring-[#2ca4ab]">
      <div className="flex items-center space-x-2">
        <Avatar className="ring-[#2ca4ab] group-hover:ring-2">
          <AvatarImage src={`${imageUrl}${data.reciter.picture}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="truncate text-xs font-bold capitalize">
            {unslugify(data.xassida.name)}
          </p>
          <span className="text-xs capitalize text-gray-500 group-hover:text-[#2ca4ab]">
            {unslugify(data.reciter.name)}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Controls data={data} />
      </div>
    </div>
  )
}

const Controls: React.FC<Props> = ({ data }) => {
  const pathname = usePathname()
  const [isCurrentPlaying, playXassida, downloading, setDownloading] =
    playerStore((state) => [
      state.isCurrentPlaying,
      state.playXassida,
      state.downloading,
      state.setDownloading,
    ])

  const handleDownload = (id: number) => {
    setDownloading(id)
    const file = data.file
    const filename = data.xassida.name
    const xhr = new XMLHttpRequest()
    xhr.responseType = "blob"
    xhr.onload = () => {
      const a = document.createElement("a")
      a.href = window.URL.createObjectURL(xhr.response)
      a.download = filename
      a.style.display = "none"
      document.body.appendChild(a)
      a.click()
      setDownloading(null)
    }
    xhr.open("GET", `${audioUrl}${file}`)
    xhr.send()
  }

  return (
    <>
      <TooltipButton
        onClick={() => playXassida(data)}
        tooltip="Demarrer/Arreter"
      >
        {isCurrentPlaying(data.id, playingType.Audio) ? (
          <Pause className="size-4 fill-primary text-primary" />
        ) : (
          <Play className="size-4 fill-primary text-primary" />
        )}
      </TooltipButton>
      {downloading == data.id ? (
        <Loader size={16} className="animate-spin" />
      ) : (
        <TooltipButton
          onClick={() => handleDownload(data.id)}
          tooltip="Telecharger"
        >
          <Download size={16} />
        </TooltipButton>
      )}
      {pathname === "/dashboard" && <AudioCardMenu data={data} />}
    </>
  )
}

export default AudioCard
