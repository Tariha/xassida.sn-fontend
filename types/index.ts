export interface APIResponse {
  count: number
  next: string
  previous: string | null
  results: Xassida[]
}

export interface Xassida {
  id: number
  author: Author
  name: string
  slug: string
  chapters: number[]
  reciters: number[]
  translated_names: string[]
}

export interface Chapter {
  id: string
  name: string | null
  number: number
  translated_names: string[]
  verse_count: number
}

export interface Verse {
  id: number
  number: number
  key: string
  text: string
  transcription: string
  words: Word[]
  translations: {
    lang: string
    text: string
    author: string
  }
}

export interface Word {
  position: number
  text: string
  transcription: string
}

export interface Author {
  id: number
  name: string
  slug: string
  picture: string
  tariha: string
  info: {
    lang: string
    text: string
    author: string
  }
}

export interface Reciter {
  id: number
  name: string
  slug: string
  picture: string
  tariha: string
}

export interface Audio {
  id: number
  reciter: number
  xassida: number
  reciters: Reciter[]
  reciter_info: Reciter
  xassida_info: Xassida
  file: string
  duration?: number | null
}
