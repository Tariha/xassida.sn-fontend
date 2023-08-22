import Link from "next/link"
import { Author, Reciter } from "@/types"

import { unslugify } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  data: Author
}

const AuthorCard: React.FC<Props> = ({ data }) => (
  <Link href={`/author/${data.id}`} passHref>
    <Card className="max-h-18 group cursor-pointer border-gray-500 bg-transparent ring-[#2ca4ab] hover:border-0 hover:ring-1">
      <CardHeader className="p-3">
        <CardTitle className="flex items-center justify-center">
          <Avatar className="h-20 w-20 lg:h-32 lg:w-32">
            <AvatarImage src={data.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardDescription className="mt-2 truncate text-center font-keania text-xs font-bold capitalize text-foreground group-hover:text-vert">
          {unslugify(data.name)}
        </CardDescription>
      </CardHeader>
    </Card>
  </Link>
)

export default AuthorCard
