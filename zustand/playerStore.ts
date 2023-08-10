import { create } from "zustand"

import { AudioPlayerContext, SeekType } from "@/types/player"

const initialState = {
  audioPlayer: {} as HTMLAudioElement,
  visible: false,
  playing: false,
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
  seek: ({ type = SeekType.To, time }) => {
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
  playXassida: (xassida) => {
    set({ xassida })
    get().setAudioSrc(
      "https://download.quranicaudio.com/qdc/saud_ash-shuraym/murattal/011.mp3"
    )
  },
  // setters
  setAudioPlayer: (ref) => set({ audioPlayer: ref }),
  setAudioSrc: (src) => {
    const player = get().audioPlayer
    player.src = src
    get().setVisible(true) // Set player to visible
    player.play()
  },
  setVisible: (val) => {
    if (val == false) get().pause()
    set({ visible: val })
  },
  setXassida: (data) => set({ xassida: data }),
  isPlaying: () => !get().audioPlayer.paused,
  isCurrentPlaying: (xassida) => {
    const match = xassida.id == get().xassida?.id
    return get().isPlaying() && match
  },
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
