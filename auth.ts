import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "./lib/spotify";
import NextAuth, { NextAuthOptions } from "next-auth";


const spotifyID = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
          clientId: spotifyID,
          clientSecret: clientSecret,
          authorization: LOGIN_URL
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        session({ session, token}) {
            return session;
        },
        jwt({ token, user, account }) {
            return token;
        }
    },
    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(authOptions);