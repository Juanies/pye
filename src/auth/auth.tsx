import { sign } from "crypto";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      
    }),
  ],
  secret: process.env.AUTH_SECRET,
});