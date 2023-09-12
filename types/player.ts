import { Audio } from "./"

export enum SeekType {
  Forward = "Forward",
  Backward = "Backward",
  To = "To",
}

export type SeekProps = {
  type?: SeekType
  time: number
}

export enum playingType {
  Xassida = "Xassida",
  Audio = "Audio",
}

export interface PlayerActions {
  // player actions
  play: () => void
  pause: () => void
  toggle: () => void
  playXassida: (data: Audio) => void
  seek: ({ type, time }: SeekProps) => void
  isCurrentPlaying: (id: number, type: playingType) => boolean
}

export interface StateActions {
  // setters
  setAudioPlayer: (ref: HTMLAudioElement) => void
  setAudioSrc: (src: string) => void
  setSpeed: (val: number) => void
  setLoop: (val: boolean) => void
  setVisible: (val: boolean) => void
  setPlaying: (val: boolean) => void
  setWaiting: (val: boolean) => void
  setReciterId: (id: number) => void
  setVerseNumber: (num: number) => void
  setAudioData: (data: any) => void
  setVerseCount: (count: number) => void
  setElapsed: (val: number) => void
  setDuration: (val: number) => void
  setDownloadProgress: (val: number) => void
  setPlaybackRate: (rate: number) => void
  setRecitersList: (data: any) => void
  setDownloading: (id: number | null) => void
}

export interface AudioPlayerContext extends PlayerActions, StateActions {
  audioPlayer: HTMLAudioElement
  speed: number
  loop: boolean
  visible: boolean
  playing: boolean
  waiting: boolean
  downloading: number | null
  reciterId: number | null
  verseNumber: number
  audioData: any
  verseCount: number
  elapsed: number
  duration: number
  downloadProgress: number
  playbackRate: number
  recitersList: any
}
