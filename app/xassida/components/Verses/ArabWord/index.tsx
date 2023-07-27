import { Word as WordType } from "@/types"

import Word from "./Word"

interface Props {
  word: WordType
  transliteration: boolean
}

const ArabWord = ({ word, transliteration }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Word text={word.text} />
      {transliteration && (
        <p className="ml-2 font-mono text-[.35em] text-slate-800 dark:text-gray-300">
          {word.transcription}
        </p>
      )}
    </div>
  )
}

export default ArabWord
