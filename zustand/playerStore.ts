import { create } from "zustand"

import { AudioPlayerContext, SeekType, playingType } from "@/types/player"

const initialState = {
  audioPlayer: {} as HTMLAudioElement,
  visible: false,
  playing: false,
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
  playXassida: (data) => {
    const prevData = get().audioData
    get().setAudioData(data)
    if (get().isCurrentPlaying(prevData?.id, playingType.Audio)) get().pause()
    else if (get().audioPlayer.src == data.file) get().play()
    else {
      get().setAudioSrc(data.file)
    }
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
  isPlaying: () => !get().audioPlayer.paused,
  isCurrentPlaying: (id, type) => {
    const audioData = get().audioData
    if (!audioData || !get().isPlaying()) return false
    const matching_id =
      type == playingType.Audio ? audioData.id : audioData.xassida_info.id
    return id == matching_id
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
