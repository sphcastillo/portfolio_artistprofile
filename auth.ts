import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "./lib/spotify";
import NextAuth, { NextAuthOptions } from "next-auth";

interface CustomToken {
    accessToken: string;
    shinyRefreshedToken: string;
    accessTokenExpires: number | null;
    error?: string;

}


const spotifyID = process.env.SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

async function refreshAccessToken(token: any) {
    try {
        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: shinyRefreshedToken } = await spotifyApi.refreshAccessToken();
        console.log("shinyRefreshedToken: ", shinyRefreshedToken);

        return {
            ...token,
            accessToken: shinyRefreshedToken.access_token,
            accessTokenExpires: shinyRefreshedToken.expires_in ? Date.now() + shinyRefreshedToken.expires_in * 1000 : null,
            shinyRefreshedToken: shinyRefreshedToken.refresh_token ?? token.refreshToken,
        }

    }catch(error){
        console.log("ERROR: Issue refreshing access token: ", error);
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        }
    }
}

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
        // session({ session, token}) {
        //     return session;
        // },
        jwt: async (params) => {
            const { token, user, account, profile, trigger, isNewUser, session } = params;
        
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    shinyRefreshedToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at ? account.expires_at * 1000 : null
                }
            }
        
            if (typeof token.accessTokenExpires === 'number' && Date.now() < token.accessTokenExpires) {
                console.log("Excellent ~ Existing token is still VALID")
                return token;
            }
        
            console.log("Time to get a new token")
            return await refreshAccessToken(token);
        }
        
        
    },
    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(authOptions);