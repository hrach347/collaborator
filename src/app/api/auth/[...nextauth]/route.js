import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { addUser, getMe } from "@/lib/db/db"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 10000,
      },
    })
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const response = await addUser({ user, profile })
      if (response.status === 200) {
        return true
      }
    },
    async session({ session }) {
      const response = await getMe(session.user.email)
      if (response.status === 200) {
        session.user.profile = response.user
        return session
      }
    }
  }
})

export { handler as GET, handler as POST }