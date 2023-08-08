import { Xassida } from "."

export enum SeekType {
  Forward = "Forward",
  Backward = "Backward",
  To = "To",
}

export type SeekProps = {
  type?: SeekType
  time: number
}

export interface AudioPlayerContext {
  audioPlayer: HTMLAudioElement
  visible: boolean
  xassida: Xassida | null
  reciterId: number | null
  verseNumber: number
  audioData: any
  verseCount: number
  elapsed: number
  duration: number
  downloadProgress: number
  playbackRate: number
  recitersList: any
  // player actions
  play: () => void
  pause: () => void
  toggle: () => void
  seek: ({ type, time }: SeekProps) => void
  // setters
  setAudioPlayer: (ref: HTMLAudioElement) => void
  setVisible: (val: boolean) => void
  setXassida: (data: Xassida) => void
  setReciterId: (id: number) => void
  setVerseNumber: (num: number) => void
  setAudioData: (data: any) => void
  setVerseCount: (count: number) => void
  setElapsed: (val: number) => void
  setDuration: (val: number) => void
  setDownloadProgress: (val: number) => void
  setPlaybackRate: (rate: number) => void
  setRecitersList: (data: any) => void
}
