import { fetcher, getXassida } from "@/lib/api"

import Reader from "../components/Reader"

interface Props {
  params: { id: number }
}

export default async function XassidaPage({ params }: Props) {
  const data = await fetcher(getXassida({ id: params.id }), {
    cache: "no-store",
  })
  return (
    <div>
      <Reader xassida={data} />
    </div>
  )
}
