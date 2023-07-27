const initialState = {
  history: [],
}

export const historySlice = (set) => ({
  ...initialState,
  clearHistory: () => set({ history: [] }),
  addToHistory: (xassida) =>
    set((state) => {
      const index = state.history.findIndex((book) => book.id === xassida.id)
      const newTab = state.history
      if (index === -1) newTab.push(xassida)
      if (state.history.length == 10) newTab.shift()
      return { history: newTab }
    }),
})

export const historySelector = (state) => ({
  history: state.history,
  addToHistory: state.addToHistory,
  clearHistory: state.clearHistory,
})
