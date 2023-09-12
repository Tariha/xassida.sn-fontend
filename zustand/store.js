import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

import { favoriteSlice } from "./slices/favorites"
import { historySlice } from "./slices/history"
import { navbarSlice } from "./slices/navbar"
import { mutatorSlice } from "./slices/mutator"
import { readerStyleSlice } from "./slices/reader"

export const useStore = create(
  persist(
    (...a) => ({
      ...readerStyleSlice(...a),
      ...favoriteSlice(...a),
      ...historySlice(...a),
      ...navbarSlice(...a),
      ...mutatorSlice(...a),
    }),
    {
      name: "xassida-app",
    }
  )
)