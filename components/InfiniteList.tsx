"use client"

import { APIResponse } from "@/types"
import useSWRInfinite from "swr/infinite"

import { fetcher } from "@/lib/api"
import { flattenResult } from "@/lib/utils"

interface FunctionArgs {
  id?: number | string
  params?: any
  prevData?: APIResponse | null
}

interface InfiniteListProps {
  params: any
  Component: React.ComponentType<React.ComponentProps<any>>
  getFunction: (params: FunctionArgs) => string | null
}

const InfiniteList: React.FC<InfiniteListProps> = ({
  params,
  Component,
  getFunction,
}) => {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (ind, prevData) =>
      getFunction({ prevData, params: { page: ind + 1, ...params } }),
    fetcher,
    { revalidateOnFocus: true }
  )

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
