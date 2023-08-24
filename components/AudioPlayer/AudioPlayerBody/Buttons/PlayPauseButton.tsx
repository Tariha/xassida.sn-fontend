import { playerStore } from "@/zustand/playerStore"
import { Loader, Pause, Play } from "lucide-react"

import { TooltipButton } from "@/components/ui/tooltip-button"

const PlayPauseButton = () => {
  const [toggle, playing, waiting] = playerStore((state) => [
    state.toggle,
    state.playing,
    state.waiting,
  ])

  if (waiting)
    return (
      <TooltipButton variant="outline" tooltip="Chargement">
        <Loader className="animate-spin fill-primary text-primary" />
      </TooltipButton>
    )

  return (
    <TooltipButton
      onClick={toggle}
      variant="outline"
      tooltip="Demarrer/Arreter"
    >
      {playing ? (
        <Pause className="fill-primary text-primary" />
      ) : (
        <Play className="fill-primary text-primary" />
      )}
    </TooltipButton>
  )
}

export default PlayPauseButton
