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
  const { transliteration } = useStore(readerSelector)
  return (
    <div>
      <div
        dir="rtl"
        className="flex flex-wrap gap-y-3 space-x-2 py-4 md:space-x-3"
        style={{ fontSize: font }}
      >
        {verse.words.map((word) => (
          <ArabWord
            key={word.position}
            word={word}
            transliteration={transliteration}
          />
        ))}
      </div>
    </div>
  )
}

export default VerseText
