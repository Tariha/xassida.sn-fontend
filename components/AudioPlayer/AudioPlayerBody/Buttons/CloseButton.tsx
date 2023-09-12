import { playerStore } from "@/zustand/playerStore"
import { X } from "lucide-react"

import { TooltipButton } from "@/components/ui/tooltip-button"

const CloseButton = () => {
  const setVisible = playerStore((state) => state.setVisible)
  return (
    <TooltipButton onClick={() => setVisible(false)} tooltip="Fermer">
      <X className="fill-primary text-primary" size={22} />
    </TooltipButton>
  )
}

export default CloseButton
