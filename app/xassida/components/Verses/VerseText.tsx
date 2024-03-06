import React from "react"
import { readerSelector } from "@/zustand/slices/reader"
import { useStore } from "@/zustand/store"

import { Verse } from "@/types/supabase"

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
        className="py-2 leading-relaxed"
        style={{ fontSize: font }}
      >
        {verse.text}
      </div>
      {transliteration && (
        <div className="font-mono text-muted-foreground">
          {verse.transcription}
        </div>
      )}
    </div>
  )
}

export default VerseText
