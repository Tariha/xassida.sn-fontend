import { create } from "zustand"

import { AudioPlayerContext, SeekType, playingType } from "@/types/player"
import { audioUrl } from "@/lib/constants"

const initialState = {
  audioPlayer: {} as HTMLAudioElement,
  speed: 1,
  loop: false,
  visible: false,
  playing: false,
  downloading: null,
  waiting: true,
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
    get().setVisible(true) // Set player to visible
    if (prevData?.id !== data.id) {
      get().setAudioSrc(`${audioUrl}${data.file}`)
      get().setAudioData(data)
    } else get().toggle()
  },
  // setters
  setAudioSrc: (src) => {
    const player = get().audioPlayer
    player.src = src
    player.play()
  },
  setVisible: (val) => {
    if (val == false) get().pause()
    set({ visible: val })
  },
  isCurrentPlaying: (id, type) => {
    const audioData = get().audioData
    if (!audioData || !get().playing) return false
    const matching_id: number =
      type == playingType.Audio ? audioData.id : audioData.xassida.id
    return id == matching_id
  },
  setSpeed: (val) => {
    get().audioPlayer.playbackRate = val
    set({ speed: val })
  },
  setLoop: (val) => {
    get().audioPlayer.loop = val
    set({ loop: val })
  },
  setPlaying: (val) => set({ playing: val }),
  setWaiting: (val) => set({ waiting: val }),
  setReciterId: (id) => set({ reciterId: id }),
  setAudioPlayer: (ref) => set({ audioPlayer: ref }),
  setVerseNumber: (num) => set({ verseNumber: num }),
  setAudioData: (data) => set({ audioData: data }),
  setVerseCount: (count) => set({ verseCount: count }),
  setElapsed: (val) => set({ elapsed: val }),
  setDuration: (val) => set({ duration: val }),
  setDownloadProgress: (val) => set({ downloadProgress: val }),
  setPlaybackRate: (rate) => set({ playbackRate: rate }),
  setRecitersList: (data) => set({ recitersList: data }),
  setDownloading: (id) => set({ downloading: id }),
}))
