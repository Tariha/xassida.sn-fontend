import jwtDecode from "jwt-decode"
import type { AuthOptions, User } from "next-auth"
import type { DecodedJWT, JWT, RefreshedToken, Token } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

async function refreshAccessToken(token: JWT): Promise<JWT | null> {
  try {
    const response = await fetch(
      process.env.NEXTAUTH_BACKEND_URL + "auth/token/refresh/",
      {
        method: "POST",
        body: JSON.stringify({ refresh: token.refresh }),
        headers: { "Content-Type": "application/json" },
      }
    )
    const refreshedToken: RefreshedToken = await response.json()
    if (response.status !== 200) throw refreshedToken
    const { exp }: DecodedJWT = jwtDecode(refreshedToken.access)
    return {
      ...token,
      ...refreshedToken,
      exp,
    }
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: AuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Django Rest Framework",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: "Username",
          type: "username",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await fetch(
            process.env.NEXTAUTH_BACKEND_URL + "auth/login/",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          )
          const token: Token = await response.json()
          if (response.status !== 200) throw token
          const {
            username,
            email,
            user_id,
            exp,
            is_superuser,
            is_staff,
          }: DecodedJWT = jwtDecode(token.access)

          return {
            ...token,
            exp,
            user: {
              username,
              email,
              user_id,
              is_staff,
              is_superuser,
            },
          } as User
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl)
    },
    async jwt({ token, user, account }) {
      // initial signin
      if (account && user) {
        return user as JWT
      }

      // Return previous token if the access token has not expired
      if (Date.now() < token.exp * 100) {
        return token
      }

      // refresh token
      return (await refreshAccessToken(token)) as JWT
    },
    async session({ session, token }) {
      session.user = token.user
      session.access = token.access
      session.refresh = token.refresh
      session.exp = token.exp
      return session
    },
  },
  session: { strategy: "jwt" },
}
