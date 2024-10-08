import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@/constants/config'

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      // authorization: 'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Store the access token
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // Pass access token to session
      ;(session as any).accessToken = token.accessToken
      return session
    },
  },
})

export { handler as GET, handler as POST }
