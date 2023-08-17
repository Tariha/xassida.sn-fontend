import { TokenSet, User } from "next-auth"

export interface DjangoUser {
  pk: number
  username: string
  email: string
  firstName: string
  lastName: string
  image?: string
  name?: string
}

export interface AuthenticatedUser extends User {
  access: string
  refresh: string
  user: DjangoUser
}

export interface AuthToken extends TokenSet {
  user?: AuthenticatedUser
  accessToken?: string
  refreshToken?: string
  ref?: number
}
