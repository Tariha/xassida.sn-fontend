"use client"

import AudioKeyboardListeners from "./AudioKeyboardListeners"
import AudioPlayerSlider from "./AudioPlayerSlider"
import PlayerControls from "./PlayerControls"

const AudioPlayerBody = () => {
  return (
    <>
      <div className="bg-background">
        <AudioKeyboardListeners />
        <div className="">
          <AudioPlayerSlider />
        </div>
        <PlayerControls />
      </div>
    </>
  )
}

export default AudioPlayerBody
