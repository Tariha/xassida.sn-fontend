export const navbarSlice = (set) => ({
  visible: true,
  setVisible: (state) => set({ visible: state }),
})

export const navbarSelector = (state) => ({
  visible: state.visible,
  setVisible: state.setVisible,
})
