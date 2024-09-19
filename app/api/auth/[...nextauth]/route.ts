import { prisma } from '@/lib/prisma'
import { session } from '@/lib/auth'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '@/lib/env'

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: env.AUTH_GOOGLE_ID,
            clientSecret: env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (!profile?.email) return false

            await prisma.user.upsert({
                where: {
                    email: profile.email,
                },
                create: {
                    email: profile.email,
                    name: profile.name,
                    image: profile.image
                },
                update: {}
            })
            return true
        },
        session,
        async jwt({ token, user, account, profile }) {
            if (profile) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: profile.email,
                    },
                })

                if (!user) throw new Error('No user found')
                token.id = user.id
            }
            
            return token
        },
    },
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }