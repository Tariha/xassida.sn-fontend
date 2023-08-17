import { AvatarProps } from "@radix-ui/react-avatar"
import { User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type UserType = {
  image?: string | null
  name?: string | null
}

interface UserAvatarProps extends AvatarProps {
  user: UserType
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <User size={22} />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
