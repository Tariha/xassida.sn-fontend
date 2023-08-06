import React, { ReactNode } from "react"
import { useStore } from "@/zustand/store"

import { LANG } from "@/lib/constants"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

const VerseSetting = () => {
  const wordByWord = useStore((state) => state.wordByWord)
  const translation = useStore((state) => state.translation)
  const translationLang = useStore((state) => state.translationLang)
  const transliteration = useStore((state) => state.transliteration)
  const translationFontScale = useStore((state) => state.translationFontScale)
  const setWordByWord = useStore((state) => state.setWordByWord)
  const setTranslation = useStore((state) => state.setTranslation)
  const setTransliteration = useStore((state) => state.setTransliteration)
  const setTranslationLang = useStore((state) => state.setTranslationLang)
  const setTranslationFontScale = useStore(
    (state) => state.setTranslationFontScale
  )

  return (
    <div className="my-4 space-y-3">
      <h3 className="text-md font-bold">Verset</h3>
      <div className="space-y-4 font-medium">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={() => setTransliteration(!transliteration)}
              checked={transliteration}
              id="transcription"
            />
            <Label htmlFor="transcription">Transcription</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={() => setWordByWord(false)}
              checked={wordByWord}
              disabled
              id="transcription"
            />
            <Label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="transcription">Mot par Mot</Label>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            onCheckedChange={() => setTranslation(!translation)}
            checked={translation}
            id="traduction"
          />
          <Label htmlFor="traduction">Traduction</Label>
        </div>
      </div>
      <Separator />
      <SettingOption title="Langue Traduction" inline={true}>
        <Select
          defaultValue={translationLang}
          onValueChange={setTranslationLang}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Traduction" />
          </SelectTrigger>
          <SelectContent>
            {LANG.map((lang: any) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SettingOption>
      <SettingOption title="Taille Police">
        <Slider
          defaultValue={[translationFontScale]}
          onValueChange={(e) => setTranslationFontScale(e[0])}
          min={14}
          max={30}
          step={1}
        />
      </SettingOption>
    </div>
  )
}

interface SettingProps {
  title: string
  children: ReactNode
  inline?: boolean
}

const SettingOption: React.FC<SettingProps> = ({
  title,
  children,
  inline = false,
}) => (
  <div
    className={`${
      inline ? "flex items-center justify-between" : "flex-col space-y-4"
    }`}
  >
    <h3 className="text-sm font-medium">{title}</h3>
    {children}
  </div>
)

export default VerseSetting
