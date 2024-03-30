import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi from "@/lib/spotify";

async function refreshAccessToken(token: string | any){
    try {

        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
        // refresh token does not expire
        // provide with new access token
        console.log("REFRESHED TOKEN IS: ", refreshedToken);

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            //  1 hour as 3600 returns from spotify API
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            // Replace if new one came back else fall back to old refresh token
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken, 
        }

    } catch(error) {
        console.log("Error refreshing access token", error);

        return {
            ...token,
            error: "RefreshAccessTokenError"
        };
    }
}


export const authOptions = {
    providers: [
        SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID!,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // three possible scenarios
        // 1. initial sign in
        // 2. returning to the site after initial sign in (check if token has expired)
        // 3. token has expired, so we need to get a new access token
        async jwt({ token, account, user } : any){
            // if initial sign-in: you will receive 2 properties : account variable & user variable
            if(account && user){
                console.log('Account:', account);
                console.log('User:', user);
                return {
                    ...token,
                    // account.access_token is the access token we get from Spotify
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    // we are handling expiry times in milliseconds
                    accessTokenExpires: account.expires_at * 1000 
                }
            }

            // if you can back to the site after initial sign in and your token hasn't expired
            // Return previous token if the access token has not expired yet
            if(Date.now()  < token.accessTokenExpires){
                console.log("Existing token is still valid");
                return token;
            }

            // Access token has expired, so we need to get a new access token 
            console.log('Access token has expired, get a new one');
            return await refreshAccessToken(token);
        },
        // after JWT is called, next-auth will call this function
        // create a session object that will be available to the user

        async session({ session, token } : any){
            // this is the part the user can see and interact with
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;

            return session;
        }


    },
}