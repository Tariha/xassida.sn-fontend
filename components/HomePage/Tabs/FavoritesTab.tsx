"use client"

import { favoriteSelector } from "@/zustand/slices/favorites"
import { useStore } from "@/zustand/store"

import XassidaList from "@/components/XassidaList"

const FavoriteTab = () => {
  const { clearFavorites, favorites } = useStore(favoriteSelector)
  return (
    <div>
      <div className="flex justify-end">
        <button className="border-b border-gray-500" onClick={clearFavorites}>
          Effacer Favories
        </button>
      </div>
      <div className="scrollbar-hide flex space-x-3 overflow-x-scroll p-2">
        <XassidaList grid={false} data={favorites} />
      </div>
    </div>
  )
}

export default FavoriteTab
