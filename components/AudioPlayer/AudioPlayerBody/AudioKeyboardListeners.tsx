import { useCallback } from "react"
import { playerStore } from "@/zustand/playerStore"
import { Options, useHotkeys } from "react-hotkeys-hook"

import { SeekType } from "@/types/player"

type AudioKeyBoardListenersProps = {
  togglePlaying: () => void
  isAudioPlayerHidden: boolean
}

const AudioKeyBoardListeners = () => {
  const audioService = playerStore((state) => state)
  const { toggle } = audioService

  const toggleAudioPlayer = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault()
      toggle()
    },
    [toggle]
  )
  const seekForward = (event: KeyboardEvent) => {
    event.preventDefault()
    // seek forward
    audioService.seek({ type: SeekType.Forward, time: 10 })
  }
  const seekBackwards = (event: KeyboardEvent) => {
    event.preventDefault()
    // seek backword
    audioService.seek({ type: SeekType.Backward, time: 10 })
  }

  const options = { enabled: audioService.visible } as Options
  useHotkeys("space", toggleAudioPlayer, options, [toggle])
  useHotkeys("right", seekForward, options)
  useHotkeys("left", seekBackwards, options)
  return <></>
}

export default AudioKeyBoardListeners
