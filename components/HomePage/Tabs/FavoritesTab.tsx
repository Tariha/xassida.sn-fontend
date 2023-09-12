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
          Effacer Favoris
        </button>
      </div>
      <div className="flex space-x-3 overflow-x-scroll p-2 scrollbar-hide">
        <XassidaList grid={false} data={favorites} />
      </div>
    </div>
  )
}

export default FavoriteTab
