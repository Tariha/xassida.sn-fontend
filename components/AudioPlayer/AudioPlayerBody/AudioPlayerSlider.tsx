"use client"

import { playerStore } from "@/zustand/playerStore"

import { secondsFormatter } from "@/lib/utils"
import { AudioSlider } from "@/components/ui/audio-slider"

const AudioPlayerSlider = () => {
  const [elapsed, downloadProgress, audioPlayer, seek] = playerStore(
    (state) => [
      state.elapsed,
      state.downloadProgress,
      state.audioPlayer,
      state.seek,
    ]
  )

  return (
    <div className="relative w-full">
      <span className="absolute left-0 top-5 px-3 text-xs text-muted-foreground md:text-sm">
        {secondsFormatter(elapsed)}
      </span>
      <div className="absolute inset-0">
        <AudioSlider
          rangeColor="bg-gray-200 dark:bg-gray-700"
          value={[downloadProgress]}
          max={audioPlayer.duration}
        />
      </div>
      <div className="absolute inset-0">
        <AudioSlider
          showThumb
          trackColor="bg-transparent"
          className="cursor-pointer"
          value={[elapsed]}
          max={audioPlayer.duration}
          onValueChange={(e: any) => {
            seek({ time: e[0] })
          }}
        />
      </div>
      <span className="absolute right-0 top-5 px-3 text-xs text-muted-foreground md:text-sm">
        {secondsFormatter(audioPlayer.duration)}
      </span>
    </div>
  )
}

export default AudioPlayerSlider
