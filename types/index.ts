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
  created: string
  modified: string
  translated_names: string[]
  chapters: number[]
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
  words: Word[]
  translations: any[]
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
