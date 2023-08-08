import { playerStore } from "@/zustand/playerStore"

import { secondsFormatter } from "@/lib/utils"
import { AudioSlider } from "@/components/ui/audio-slider"

const AudioPlayerSlider = () => {
  const audioService = playerStore((state) => state)

  return (
    <div className="relative w-full">
      <span className="absolute left-0 top-5 px-3 text-xs text-muted-foreground md:text-sm">
        {secondsFormatter(audioService.elapsed)}
      </span>
      <div className="absolute inset-x-0 top-0">
        <AudioSlider
          rangeColor="bg-gray-200 dark:bg-gray-700"
          value={[audioService.downloadProgress]}
          max={audioService.audioPlayer.duration}
        />
      </div>
      <div className="absolute inset-x-0 top-0">
        <AudioSlider
          showThumb
          trackColor="bg-transparent"
          value={[audioService.elapsed]}
          max={audioService.audioPlayer.duration}
          onValueChange={(e: any) => {
            audioService.seek({ time: e[0] })
          }}
        />
      </div>
      <span className="absolute right-0 top-5 px-3 text-xs text-muted-foreground md:text-sm">
        {secondsFormatter(audioService.audioPlayer.duration)}
      </span>
    </div>
  )
}

export default AudioPlayerSlider
