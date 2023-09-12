"use client"

import { Xassida } from "@/types"

import { XassidaHor, XassidaVer } from "./Xassida"

interface Props {
  data: Xassida[]
  grid?: boolean
}

const XassidaList: React.FC<Props> = ({ data, grid = true }) => {
  return grid ? <GridList data={data} /> : <FlexList data={data} />
}

const GridList: React.FC<Props> = ({ data }) => (
  <div className="grid grid-cols-1 gap-4 overflow-x-scroll px-1 py-2 scrollbar-hide sm:grid-cols-2 lg:grid-cols-3 lg:px-2">
    {data.map((xas) => (
      <XassidaHor data={xas} key={xas.id} />
    ))}
  </div>
)

const FlexList: React.FC<Props> = ({ data }) => (
  <div className="flex space-x-3 overflow-x-scroll p-2 scrollbar-hide">
    {data.map((xas) => (
      <XassidaVer data={xas} key={xas.id} />
    ))}
  </div>
)

export default XassidaList
