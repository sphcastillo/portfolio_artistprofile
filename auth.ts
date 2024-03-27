import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "./lib/spotify";
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";


const spotifyID = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
const secret = process.env.JWT_SECRET


export const authOptions = {
    providers: [
        SpotifyProvider({
          clientId: spotifyID,
          clientSecret: clientSecret,
          authorization: LOGIN_URL
        })
    ],
    secret: secret,
    // pages: {
    //     signIn: "/login"
    // },

};

export default NextAuth(authOptions);

