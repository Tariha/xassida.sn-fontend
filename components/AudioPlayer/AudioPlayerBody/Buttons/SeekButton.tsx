import { playerStore } from "@/zustand/playerStore"
import { FastForward, Rewind } from "lucide-react"

import { SeekType } from "@/types/player"
import { TooltipButton } from "@/components/ui/tooltip-button"

export enum SeekButtonType {
  Next = "next",
  Prev = "prev",
}

type SeekButtonProps = {
  type: SeekButtonType
  isLoading?: boolean
}

const SeekButton = ({ type, isLoading }: SeekButtonProps) => {
  const audioService = playerStore((state) => state)
  const seekType =
    type == SeekButtonType.Next ? SeekType.Forward : SeekType.Backward
  return (
    <TooltipButton
      variant="outline"
      tooltip={type == SeekButtonType.Prev ? "Precedent" : "Suivant"}
      onClick={() => audioService.seek({ type: seekType, time: 10 })}
    >
      {type === SeekButtonType.Prev ? <Rewind /> : <FastForward />}
    </TooltipButton>
  )
}

export default SeekButton
