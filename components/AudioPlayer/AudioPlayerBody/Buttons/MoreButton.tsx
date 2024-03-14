import Link from "next/link"
import { getAudioByAuthorAndXassidaId } from "@/actions/api/client"
import { playerStore } from "@/zustand/playerStore"
import { Download, Link as LinkIcon, MoreHorizontal } from "lucide-react"

import { Reciter } from "@/types/supabase"
import { audioUrl } from "@/lib/constants"
import { unslugify } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipButton } from "@/components/ui/tooltip-button"

const SPEEDS = [
  { value: 0.25, label: "0.25" },
  { value: 0.5, label: "0.5" },
  { value: 0.75, label: "0.75" },
  { value: 1, label: "Normal" },
  { value: 1.25, label: "1.25" },
  { value: 1.5, label: "1.5" },
  { value: 1.75, label: "1.75" },
  { value: 2, label: "2" },
]

const MoreButton = () => {
  const [data, speed, loop, setLoop, setDownloading, playXassida, setSpeed] =
    playerStore((state) => [
      state.audioData,
      state.speed,
      state.loop,
      state.setLoop,
      state.setDownloading,
      state.playXassida,
      state.setSpeed,
    ])

  const handlePlay = async (xassida_id: number, reciter_id: number) => {
    const audio = await getAudioByAuthorAndXassidaId(xassida_id, reciter_id)
    playXassida(audio)
  }

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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <TooltipButton tooltip="Plus">
          <MoreHorizontal className="fill-primary text-primary" />
        </TooltipButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => handleDownload(data.id)}
          className="flex cursor-pointer items-center space-x-4"
        >
          <Download size={16} />
          <span>{"Télécharger"}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="dark:bg-background" />
        <DropdownMenuCheckboxItem checked={loop} onClick={() => setLoop(!loop)}>
          Boucler
        </DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{`${speed}x Vitesse`}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={7}>
            {SPEEDS.map((item) => (
              <DropdownMenuCheckboxItem
                onClick={() => setSpeed(item.value)}
                checked={speed == item.value}
              >
                {item.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>{"Récitateurs"}</DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={7}>
            {data.xassida.reciter.map((rec: Reciter) => (
              <DropdownMenuCheckboxItem
                checked={rec.id == data.reciter.id}
                onCheckedChange={() => {
                  handlePlay(data.xassida.id, rec.id)
                }}
              >
                {rec.name}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator className="dark:bg-background" />
        <DropdownMenuItem>
          <Link href={`/xassida/${data.xassida.id}`}>
            <div className="flex cursor-pointer items-center space-x-4">
              <LinkIcon size={16} />
              <span>{unslugify(data.xassida.name)}</span>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreButton
