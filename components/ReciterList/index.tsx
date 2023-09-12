import { Reciter } from "@/types"

import AudioListSheet from "./AudioListSheet"
import ReciterCard from "./ReciterCard"

interface ReciterListProps {
  data: Reciter[]
}

const ReciterList = ({ data }: ReciterListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-x-scroll px-1 py-2 scrollbar-hide sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:px-2">
      {data &&
        data.map((reciter) => (
          <AudioListSheet reciter={reciter} key={reciter.id} />
        ))}
    </div>
  )
}

export default ReciterList
