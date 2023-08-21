import React, { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  handleContributorInfos: (value: ContributorInfos) => void
}

interface ContributorInfos {
  name: string
  email: string
}

const ContributorInfos = ({ handleContributorInfos }: Props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  handleContributorInfos({ name, email })
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="grid w-full max-w-sm items-center gap-2 mb-2">
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-vert"
          type="text"
          id="name"
          placeholder="Email"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2 mb-2">
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-vert"
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
    </div>
  )
}
export default React.memo(ContributorInfos)
