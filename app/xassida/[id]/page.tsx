import { getXassidaById } from "@/actions/api/client"

import Reader from "../components/Reader"

interface Props {
  params: { id: number }
}

export default async function XassidaPage({ params }: Props) {
  const data = await getXassidaById(params.id)

  if (!data) return null

  return (
    <div>
      <Reader xassida={data} />
    </div>
  )
}
