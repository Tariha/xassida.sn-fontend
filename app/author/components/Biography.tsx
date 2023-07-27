"use client"

import { useState } from "react"
import { Author } from "@/types"
import ReactMarkdown from "react-markdown"

import { unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Props {
  data: Author
}

const Biography = ({ data }: Props) => {
  const [plus, setPlus] = useState(false)
  return (
    <div className="scrollbar-hide min-h-[330px] overflow-y-scroll bg-vert py-2 md:py-4">
      <div className="container">
        <Avatar className="float-right m-2 h-32 w-32 rounded-lg shadow md:h-40 md:w-40 lg:m-4">
          <AvatarImage src={data?.picture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="prose max-w-none text-justify text-sm text-white prose-h1:text-white prose-a:text-gray-200 prose-a:no-underline">
            <ReactMarkdown linkTarget="_blank">{data?.info.text}</ReactMarkdown>
          </div>
          <Button
            onClick={() => setPlus(!plus)}
            variant="ghost"
            size="lg"
            className="mt-1 border border-white text-xs font-bold uppercase text-white hover:bg-transparent"
          >
            {!plus ? "PLUS" : "MOINS"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Biography
