import React from "react"
import { Verse } from "@/types"
import { readerSelector } from "@/zustand/slices/reader"
import { useStore } from "@/zustand/store"

import ArabWord from "./ArabWord"

interface Props {
  verse: Verse
  font: string
}

const VerseText: React.FC<Props> = ({ verse, font }) => {
  const { transliteration, wordByWord } = useStore(readerSelector)
  return (
    <div>
      <div
        dir="rtl"
        //className="flex flex-wrap gap-y-3 space-x-2 py-4 md:space-x-3"
        className="py-2 leading-relaxed"
        style={{ fontSize: font }}
      >
        {verse.text}
        {/* 
        {verse.words.map((word) => (
          <ArabWord
            key={word.position}
            word={word}
            transliteration={transliteration && wordByWord}
          />
        ))}
        */}
      </div>
      {transliteration && !wordByWord && (
        <div className="font-mono text-muted-foreground">
          {verse.transcription}
        </div>
      )}
    </div>
  )
}

export default VerseText
