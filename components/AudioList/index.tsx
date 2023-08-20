import { Audio } from "@/types"

import AudioCard from "./AudioCard"
import AuthorCard from "./AudioCard"

interface AuthorListProps {
  data: Audio[]
}

const AudioList = ({ data }: AuthorListProps) => (
  <div className="grid grid-cols-1 gap-2 overflow-x-scroll px-1 py-2 scrollbar-hide sm:grid-cols-2 lg:grid-cols-3">
    {data && data.map((audio) => <AudioCard data={audio} key={audio.id} />)}
  </div>
)

export default AudioList
