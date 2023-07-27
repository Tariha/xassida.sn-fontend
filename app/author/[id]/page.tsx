import { fetcher, getAuthorInfo } from "@/lib/api"
import InfiniteList from "@/components/XassidaList/InfiniteList"

import Biography from "../components/Biography"

interface Props {
  params: { id: number }
}

export default async function AuthorPage({ params }: Props) {
  const author = params.id
  const bio = await fetcher(getAuthorInfo(author))
  return (
    <div>
      <div>
        <Biography data={bio} />
      </div>
      <div className="container p-4">
        <h3 className="my-2 text-lg font-bold uppercase">Bibliographie</h3>
        <InfiniteList params={{ author }} />
      </div>
    </div>
  )
}