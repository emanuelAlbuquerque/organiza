import request from '@/services/axios'
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const data = await request.get(`/users?email=${credentials.email}&password=${credentials.password}`)
          const user = data.data[0]

          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email
            }
          }

          return null
        } catch (error) {
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 3600
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    singIn: '/login'
  }
}

export default NextAuth(authOptions)