import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

// These two values should be a bit less than actual token lifetimes
const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60 // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60 // 6 days

const getCurrentEpochTime = () => {
  return Math.floor(new Date().getTime() / 1000)
}

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // The data returned from this function is passed forward as the
      // `user` variable to the signIn() and jwt() callback
      async authorize(credentials, req) {
        const response = await fetch(
          process.env.NEXTAUTH_BACKEND_URL + "auth/login/",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        )
        const user = await response.json()
        if (response.ok && user) return user

        return false
      },
    }),
  ],

  callbacks: {
    async jwt({ user, token }: any) {
      if (user) {
        token.user = user.user || user
        token.accessToken = user.access
        token.refreshToken = user.refresh
        token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME
        return token
      }
      // Refresh the backend token if necessary
      if (token.ref && getCurrentEpochTime() > token.ref) {
        const response = await fetch(
          process.env.NEXTAUTH_BACKEND_URL + "auth/token/refresh/",
          {
            method: "POST",
            body: JSON.stringify({ refresh: token.refreshToken }),
            headers: { "Content-Type": "application/json" },
          }
        )
        const data = await response.json()
        token.accessToken = data.access
        token.refreshToken = data.refresh
        token.ref = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME
      }
      return token
    },
    // Since we're using Django as the backend we have to pass the JWT
    // token to the client instead of the `session`.
    async session({ token, session }) {
      return { ...session, ...token }
    },
  },
}
