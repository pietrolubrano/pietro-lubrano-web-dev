/* import { User } from "@prisma/client"
import { JWT } from "next-auth/jwt"

declare global {
    namespace NodeJS{
        export interface ProcessEnv{
            NEXTAUTH_SECRET: string

            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string
        }
    }
}

declare module 'next-auth' {
    interface Session{
        user: User
    }
}

declare module 'next-auth/jwt' {
    type JWT = User
} */