import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "./lib/spotify";

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
    session: {
        strategy: 'jwt',
    },
} satisfies NextAuthOptions;