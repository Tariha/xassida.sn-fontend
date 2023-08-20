import { MoreHorizontal } from "lucide-react"

import CloseButton from "./Buttons/CloseButton"
import PlayPauseButton from "./Buttons/PlayPauseButton"
import SeekButton, { SeekButtonType } from "./Buttons/SeekButton"

const PlayerControls = () => {
  return (
    <div className="flex flex-1 items-center justify-center space-x-2 p-1 pt-3 md:space-x-4">
      <div className="flex cursor-pointer place-content-center rounded-full p-2 hover:bg-secondary">
        <MoreHorizontal className="fill-primary text-primary" />
      </div>
      <SeekButton type={SeekButtonType.Prev} />
      <PlayPauseButton />
      <SeekButton type={SeekButtonType.Next} />
      <CloseButton />
    </div>
  )
}

export default PlayerControls
