const initialState = {
  arabFontScale: 35,
  translationFontScale: 16,
  arabFontFamily: "font-hafs",
  transliteration: true,
  translation: true,
  translationLang: "fr",
}

export const readerStyleSlice = (set) => ({
  ...initialState,
  setArabFontScale: (scale) => set({ arabFontScale: scale }),
  setTranslationFontScale: (scale) =>
    set({ translationFontScale: scale }),
  setArabFontFamily: (font) => set({ arabFontFamily: font }),
  setTransliteration: (val) => set({ transliteration: val }),
  setTranslation: (val) => set({ translation: val }),
  setTranslationLang: (lang) => set({ translationLang: lang }),
})

export const readerSelector = (state) => ({
  arabFontScale: state.arabFontScale,
  translationFontScale: state.translationFontScale,
  arabFontFamily: state.arabFontFamily,
  transliteration: state.transliteration,
  translation: state.translation,
  translationLang: state.translationLang,
  //
  setArabFontScale: state.setArabFontScale,
  setTranslationFontScale: state.setTranslationFontScale,
  setArabFontFamily: state.setArabFontFamily,
  setTransliteration: state.setTransliteration,
  setTranslation: state.setTranslation,
  setTranslationLang: state.setTranslationLang,
})