import { readerSelector } from "@/zustand/slices/reader"
import { useStore } from "@/zustand/store"

import { FONTS } from "@/lib/constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const ArabFont = () => {
  const { arabFontScale, arabFontFamily, setArabFontScale, setArabFontFamily } =
    useStore(readerSelector)
  return (
    <div className="my-8 space-y-3">
      <div className="relative flex items-center justify-between">
        <h3 className="font-bold">Texte Arabe</h3>
        <Select defaultValue={arabFontFamily} onValueChange={setArabFontFamily}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Texte arabe" />
          </SelectTrigger>
          <SelectContent>
            {FONTS.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Taille police</h3>
        <Slider
          defaultValue={[arabFontScale]}
          onValueChange={(e) => setArabFontScale(e[0])}
          min={20}
          max={80}
          step={1}
        />
      </div>
    </div>
  )
}

export default ArabFont
