import { useRouter } from "next/navigation"
import { Xassida } from "@/types"
import { favoriteSelector } from "@/zustand/slices/favorites"
import { historySelector } from "@/zustand/slices/history"
import { useStore } from "@/zustand/store"
import { Heart } from "lucide-react"

import { isFavorite, unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {
  data: Xassida
}

const XassidaVer: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const onClick = () => router.push(`/xassida/${data.id}`)
  return (
    <div
      onClick={onClick}
      className="w-40 shrink-0 cursor-pointer space-y-2 rounded-md border border-gray-500 p-2 hover:border-0 hover:ring-1 hover:ring-[#2ca4ab]"
    >
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={data.author.picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4 className="truncate text-xs font-medium">
          {unslugify(data.author.name)}
        </h4>
      </div>
      <div className="space-y-1">
        <p className="truncate text-xs font-bold">{unslugify(data.name)}</p>
      </div>
      <div className="flex items-center justify-center rounded-md bg-gray-300 p-4 py-8 dark:bg-slate-700">
        <span translate="no" className="text-lg">
          {" "}
          بِسْمِ ٱللَّهِ{" "}
        </span>
      </div>
    </div>
  )
}

const XassidaHor: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const { toggleFavorite, favorites } = useStore(favoriteSelector)
  const { addToHistory } = useStore(historySelector)
  const onClick = () => {
    router.push(`/xassida/${data.id}`)
    addToHistory(data)
  }
  const onHeartClick = (e: any) => {
    e.stopPropagation()
    toggleFavorite(data)
  }
  return (
    <div
      onClick={onClick}
      className="group relative flex cursor-pointer items-center justify-between rounded-md border border-gray-500 p-3 px-2 font-mono hover:border-0 hover:ring-1 hover:ring-[#2ca4ab]"
    >
      <div className="flex items-center space-x-2">
        <Avatar className="ring-[#2ca4ab] group-hover:ring-2">
          <AvatarImage src={data.author.picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="truncate text-xs font-bold capitalize">
            {unslugify(data.name)}
          </p>
          <span className="text-xs capitalize text-gray-500 group-hover:text-[#2ca4ab]">
            {unslugify(data.author.name)}
          </span>
        </div>
      </div>
      <Heart
        fill={isFavorite(favorites, data.id) ? "red" : "transparent"}
        onClick={onHeartClick}
        className=""
        size={25}
      />
    </div>
  )
}

export { XassidaHor, XassidaVer }
