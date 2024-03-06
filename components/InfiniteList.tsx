"use client"

import {
  getAudios,
  getAuthors,
  getReciters,
  getXassidas,
} from "@/actions/api/client"
import useSWRInfinite from "swr/infinite"

import { flattenResult } from "@/lib/utils"

interface InfiniteListProps {
  params: any
  Component: React.ComponentType<React.ComponentProps<any>>
  type: "audio" | "xassida" | "reciter" | "author"
}

const FUNCTIONS: Record<InfiniteListProps["type"], any> = {
  audio: getAudios,
  xassida: getXassidas,
  reciter: getReciters,
  author: getAuthors,
}

const InfiniteList: React.FC<InfiniteListProps> = ({
  params,
  Component,
  type,
}) => {
  const getFunction = FUNCTIONS[type]
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (idx, prev) =>
      prev && !prev.length ? null : { ...params, page: idx, type },
    ({ page }) => getFunction(params, page)
  )

  if (isLoading || error) return null

  const flattened = flattenResult(data)
  const len = flattened.length

  return (
    <div>
      <Component data={flattened} />
      {data && data[0]?.count != len && (
        <button
          className="border-b border-gray-500 font-bold"
          onClick={() => setSize(size + 1)}
        >
          Afficher +
        </button>
      )}
    </div>
  )
}

export default InfiniteList
