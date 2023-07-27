import React from "react"

import VerseSkeleton from "../Verses/VerseSkeleton"

interface Props {
  count: number
}

const ChapterSkeleton = ({ count }: Props) => {
  return (
    <div className="flex flex-col divide-y-[.8px] divide-gray-800 leading-tight">
      {[...Array(count).keys()].map((i) => (
        <VerseSkeleton key={i} />
      ))}
    </div>
  )
}

export default React.memo(ChapterSkeleton)
