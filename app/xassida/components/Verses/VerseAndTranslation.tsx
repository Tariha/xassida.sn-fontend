"use client"

import React from "react"
import { Verse } from "@/types"
import { readerSelector } from "@/zustand/slices/reader"
import { useStore } from "@/zustand/store"
import { Play } from "lucide-react"

import { useObserveElement } from "@/hooks/useObserveElement"

import { CopyLink, CopyVerse } from "./Copy"
import VerseText from "./VerseText"

interface Props {
  verse: Verse
  font: string
  last: boolean
  more: () => void
}

const VerseAndTranslation: React.FC<Props> = ({ verse, font, last, more }) => {
  const { translation, translationFontScale } = useStore(readerSelector)

  const elemRef = React.useRef(null)
  const ref = useObserveElement(more)

  React.useEffect(() => {
    ref(elemRef.current)
  }, [ref])

  return (
    <div ref={last ? elemRef : null} className="flex flex-col py-4 md:flex-row">
      <div className="flex flex-row items-center justify-end gap-3 md:flex-col md:items-center md:justify-center">
        <span className="font-sans font-bold">{verse.key}</span>
        <Play size={18} />
        <CopyVerse data={[verse.text, verse.translations[0]?.text]} />
        <CopyLink />
      </div>
      <div className="flex-1 space-y-4 md:px-4">
        <VerseText verse={verse} font={font} />
        {translation && (
          <p className="font-sans" style={{ fontSize: translationFontScale }}>
            {verse.translations[0]?.text}
          </p>
        )}
      </div>
    </div>
  )
}

export default VerseAndTranslation
