"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"

import { Author } from "@/types/supabase"
import { imageUrl } from "@/lib/constants"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Props {
  data: Author
}

const Biography = ({ data }: Props) => {
  const [plus, setPlus] = useState(false)
  return (
    <div className="min-h-[330px] overflow-y-scroll bg-vert py-2 scrollbar-hide md:py-4">
      <div className="container">
        <Avatar className="float-right m-2 size-32 rounded-lg shadow md:size-40 lg:m-4">
          <AvatarImage src={`${imageUrl}${data.picture}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="prose max-w-none text-justify text-sm text-white prose-h1:text-white prose-a:text-gray-200 prose-a:no-underline">
            <ReactMarkdown linkTarget="_blank">{""}</ReactMarkdown>
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
