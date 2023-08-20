"use client"

/* eslint-disable max-lines */
/* eslint-disable react/no-multi-comp */
import React, { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { playerStore } from "@/zustand/playerStore"

const AudioPlayerBody = dynamic(() => import("./AudioPlayerBody"), {
  ssr: false,
})

const getDownloadProgress = (audioPlayer: HTMLAudioElement): number => {
  const { buffered, duration } = audioPlayer

  if (buffered.length) {
    const lastIndex = buffered.length - 1
    const bufferedEnd = buffered.end(lastIndex)
    // Check if the audio is fully buffered
    if (bufferedEnd >= duration) {
      return duration
    }
    return bufferedEnd
  }
  return 0
}

const AudioPlayer = () => {
  const audioPlayerRef = useRef<HTMLAudioElement>({} as HTMLAudioElement)
  const {
    audioPlayer,
    visible,
    setElapsed,
    setDuration,
    setAudioPlayer,
    setDownloadProgress,
  } = playerStore((state) => state)

  useEffect(() => {
    setAudioPlayer(audioPlayerRef.current)
  }, [setAudioPlayer])

  const onDurationChange = () => {
    setDuration(audioPlayer.duration)
  }

  const onTimeUpdate = () => {
    setElapsed(audioPlayer.currentTime)
  }

  const onProgress = () => {
    setDownloadProgress(getDownloadProgress(audioPlayer))
  }

  return (
    <>
      <div className={`${visible ? "block" : "hidden"} fixed bottom-0 w-full`}>
        {/* We have to create an inline audio player and hide it due to limitations of how safari requires a play action to trigger: https://stackoverflow.com/questions/31776548/why-cant-javascript-play-audio-files-on-iphone-safari */}
        <audio
          id="audio-player"
          style={{ display: "none" }}
          autoPlay
          preload="auto"
          ref={audioPlayerRef}
          onDurationChange={onDurationChange}
          onTimeUpdate={onTimeUpdate}
          onProgress={onProgress}
        />
        {visible && <AudioPlayerBody />}
      </div>
    </>
  )
}

export default AudioPlayer
