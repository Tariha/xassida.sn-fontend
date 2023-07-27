import { APIResponse } from "@/types"

interface Props {
  id?: number | string
  params?: any
  prevData?: APIResponse | null
}

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const makeParams = (params: any) =>
  Object.keys(params).reduce(
    (acc, curr) => `${acc}${curr}=${params[curr]}&`,
    "?"
  )

// url maker for xassida
export const getXassida = ({
  id = "",
  params = {},
  prevData = null,
}: Props) => {
  if (prevData && !prevData.next) return null
  return `${BASE_URL}xassidas/${id}${makeParams(params)}`
}

// url maker for verse
export const getVerse = ({ id = "", params = {}, prevData = null }: Props) => {
  if (prevData && !prevData.next) return null
  return `${BASE_URL}chapters/${id}/verses${makeParams(params)}`
}

// url maker for author
export const getAuthor = ({ id = "", params = {} }: Props) =>
  `${BASE_URL}authors/${id}${makeParams(params)}`

// url maker for author info
export const getAuthorInfo = (id: number) => `${BASE_URL}authors/${id}/info/`

export const fetcher = async function (endpoint: any) {
  if (typeof window !== "undefined" && !window.navigator.onLine) {
    throw new Error("Offline")
  }
  const res = await fetch(endpoint)
  if (!res.ok || res.status === 500 || res.status === 404) {
    throw res
  }
  const json = await res.json()
  return json
}
