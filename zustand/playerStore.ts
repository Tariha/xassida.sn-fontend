import { create } from "zustand"

import { AudioPlayerContext, SeekProps, SeekType } from "@/types/player"

const initialState = {
  audioPlayer: {} as HTMLAudioElement,
  visible: true,
  xassida: null,
  reciterId: null,
  verseNumber: 0,
  audioData: null,
  verseCount: 0,
  elapsed: 0,
  duration: 0,
  downloadProgress: 0,
  playbackRate: 1,
  recitersList: [],
}

export const playerStore = create<AudioPlayerContext>()((set, get) => ({
  ...initialState,
  // player actions
  play: () => {
    const player = get().audioPlayer
    player.play()
  },
  pause: () => {
    const player = get().audioPlayer
    player.pause()
  },
  toggle: () => {
    const player = get().audioPlayer
    player.paused ? player.play() : player.pause()
  },
  seek: ({ type = SeekType.To, time }: SeekProps) => {
    const player = get().audioPlayer
    if (type == SeekType.To) player.currentTime = time
    else {
      const to =
        type == SeekType.Forward
          ? player.currentTime + time
          : player.currentTime - time
      player.currentTime = to
    }
  },
  // setters
  setAudioPlayer: (ref) => set({ audioPlayer: ref }),
  setVisible: (val) => set({ visible: val }),
  setXassida: (data) => set({ xassida: data }),
  setReciterId: (id) => set({ reciterId: id }),
  setVerseNumber: (num) => set({ verseNumber: num }),
  setAudioData: (data) => set({ audioData: data }),
  setVerseCount: (count) => set({ verseCount: count }),
  setElapsed: (val) => set({ elapsed: val }),
  setDuration: (val) => set({ duration: val }),
  setDownloadProgress: (val) => set({ downloadProgress: val }),
  setPlaybackRate: (rate) => set({ playbackRate: rate }),
  setRecitersList: (data) => set({ recitersList: data }),
}))
