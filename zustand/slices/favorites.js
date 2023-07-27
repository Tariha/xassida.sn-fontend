const initialState = {
  favorites: [],
}

export const favoriteSlice = (set) => ({
  ...initialState,
  clearFavorites: () => set({ favorites: [] }),
  toggleFavorite: (xassida) =>
    set((state) => {
      const index = state.favorites.findIndex((fav) => fav.id === xassida.id)
      const newTab = state.favorites
      if (index !== -1) newTab.splice(index, 1)
      else newTab.push(xassida)
      return { favorites: newTab }
    }),
})

export const favoriteSelector = (state) => ({
  favorites: state.favorites,
  toggleFavorite: state.toggleFavorite,
  clearFavorites: state.clearFavorites,
})
