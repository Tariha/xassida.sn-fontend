const initialState = {
    mutateAuthors: () => null,
    mutateReciters: () => null,
    mutateAudios: () => null,
}

export const mutatorSlice = (set, get) => ({
    ...initialState,
    setMutator: (type, fn) => {
        if(type=="audio")
            set({ mutateAudios: fn })
        else if(type=="reciter")
            set({ mutateReciters: fn })
        else
            set({ mutateAuthors: fn })
    },
})