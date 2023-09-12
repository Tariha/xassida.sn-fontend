"use client"

import { useStore } from "@/zustand/store"
import useSWRInfinite from "swr/infinite"

import { fetcher, getAudio, getAuthor, getReciter, getXassida } from "@/lib/api"
import { flattenResult } from "@/lib/utils"

interface InfiniteListProps {
  params: any
  Component: React.ComponentType<React.ComponentProps<any>>
  type: "audio" | "xassida" | "reciter" | "author"
}

const FUNCTIONS = {
  audio: getAudio,
  xassida: getXassida,
  reciter: getReciter,
  author: getAuthor,
}

const InfiniteList: React.FC<InfiniteListProps> = ({
  params,
  Component,
  type,
}) => {
  const getFunction = FUNCTIONS[type]
  const { data, mutate, error, isLoading, size, setSize } = useSWRInfinite(
    (ind, prevData) => [
      getFunction({ prevData, params: { page: ind + 1, ...params } }),
      type,
    ],
    (url: string, type: string) => fetcher(url),
    { revalidateOnFocus: false }
  )
  //The only way i found to update the list after form submit
  //The global mutator did not work
  const setMutator = useStore((state) => state.setMutator)
  setMutator(type, mutate)

  const loadMore = () => setSize(size + 1)
  if (isLoading || error) return null

  const flattened = flattenResult(data)
  const len = flattened.length

  return (
    <div>
      <Component data={flattened} />
      {data && data[0]?.count != len && (
        <button
          className="border-b border-gray-500 font-bold"
          onClick={loadMore}
        >
          Afficher +
        </button>
      )}
    </div>
  )
}

export default InfiniteList
