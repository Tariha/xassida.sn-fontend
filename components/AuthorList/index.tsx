import { Author, Reciter } from "@/types"

import AuthorCard from "./AuthorCard"

interface AuthorListProps {
  data: Author[]
}

const AuthorList = ({ data }: AuthorListProps) => (
  <div className="grid grid-cols-2 gap-4 overflow-x-scroll px-1 py-2 scrollbar-hide sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:px-2">
    {data && data.map((author) => <AuthorCard data={author} key={author.id} />)}
  </div>
)

export default AuthorList
