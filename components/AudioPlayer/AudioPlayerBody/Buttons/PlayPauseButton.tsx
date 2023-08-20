import { playerStore } from "@/zustand/playerStore"
import { Pause, Play } from "lucide-react"

import { TooltipButton } from "@/components/ui/tooltip-button"

const PlayPauseButton = () => {
  const audioService = playerStore((state) => state)

  return (
    <TooltipButton
      onClick={audioService.toggle}
      variant="outline"
      tooltip="Demarrer/Arreter"
    >
      {!audioService.audioPlayer.paused ? (
        <Pause className="fill-primary text-primary" />
      ) : (
        <Play className="fill-primary text-primary" />
      )}
    </TooltipButton>
  )
}

export default PlayPauseButton
