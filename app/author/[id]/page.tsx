import { fetcher, getAuthorInfo, getXassida } from "@/lib/api"
import InfiniteList from "@/components/InfiniteList"
import XassidaList from "@/components/XassidaList"

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
      <div className="container">
        <h3 className="my-2 text-lg font-bold uppercase">Bibliographie</h3>
        <InfiniteList
          params={{ author }}
          getFunction={getXassida}
          Component={XassidaList}
        />
      </div>
    </div>
  )
}
