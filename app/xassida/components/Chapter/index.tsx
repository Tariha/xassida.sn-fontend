import { getVersesByChapterId } from "@/actions/api/client"
import { readerSelector } from "@/zustand/slices/reader"
import { useStore } from "@/zustand/store"
import useSWRInfinite from "swr/infinite"

import { Verse } from "@/types/supabase"
import { flattenResult } from "@/lib/utils"

import VerseAndTranslation from "../Verses/VerseAndTranslation"
import ChapterSkeleton from "./ChapterSkeleton"

interface Props {
  chap: number
}

const Chapter = ({ chap }: Props) => {
  const { arabFontScale, arabFontFamily, translationLang } =
    useStore(readerSelector)

  const { data, isLoading, size, setSize } = useSWRInfinite(
    (idx, prev) => (prev && !prev.length ? null : { chap, page: idx }),
    ({ page }) => getVersesByChapterId(chap, page)
  )

  if (isLoading) return <ChapterSkeleton count={5} />

  const flattened = flattenResult(data)
  const len = flattened.length
  return (
    <div
      className={`flex ${arabFontFamily} min-h-screen flex-col divide-y-[.8px] divide-gray-200 leading-tight will-change-auto dark:divide-gray-800`}
    >
      {flattened.map((verse: Verse, i: number) => (
        <VerseAndTranslation
          last={i == len - 1}
          more={() => setSize(size + 1)}
          font={arabFontScale}
          verse={verse}
          key={verse.key}
        />
      ))}
    </div>
  )
}

export default Chapter
