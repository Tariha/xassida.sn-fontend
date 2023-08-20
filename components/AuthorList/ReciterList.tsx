import { Reciter } from "@/types"

import AuthorCard from "./AuthorCard"
import ReciterCard from "./ReciterCard"

interface ReciterListProps {
  data: Reciter[]
}

const ReciterList = ({ data }: ReciterListProps) => (
  <div className="grid grid-cols-2 gap-4 overflow-x-scroll px-1 py-2 scrollbar-hide sm:grid-cols-3 md:grid-cols-5 lg:px-2">
    {data &&
      data.map((author) => <ReciterCard data={author} key={author.id} />)}
  </div>
)

export default ReciterList
