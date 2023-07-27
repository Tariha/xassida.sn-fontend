"use client"

import useSWRInfinite from "swr/infinite"

import { fetcher, getXassida } from "@/lib/api"
import { flattenResult } from "@/lib/utils"

import XassidaList from "./index"

const InfiniteList = ({ params }: { params: any }) => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (ind, prevData) =>
      getXassida({ prevData, params: { page: ind + 1, ...params } }),
    fetcher,
    { revalidateOnFocus: false }
  )

  const loadMore = () => setSize(size + 1)
  if (isLoading || error) return null

  const flattened = flattenResult(data)
  const len = flattened.length

  return (
    <div>
      <XassidaList data={flattened} />
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
