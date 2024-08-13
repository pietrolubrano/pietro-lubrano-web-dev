import { PrismaAdapter } from "@next-auth/prisma-adapter";

import type { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      /* profile(profile){
      return{
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
      role: profile.role ? profile.role : "user"
      }
      } */
    })
  ],
  adapter: PrismaAdapter(prisma),
  /* callbacks: {
  async session({ session, token, user }) {
  // Send properties to the client, like an a asAccess_token and user id from a provider.
  session.accessToken = token.accessToken
  session.user.id = token.id
  
  return session
  }
  } */
} satisfies NextAuthOptions
