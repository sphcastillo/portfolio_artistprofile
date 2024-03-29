import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
    providers: [
        SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID!,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     // three possible scenarios
    //     // 1. initial sign in
    //     // 2. returning to the site after initial sign in (check if token has expired)
    //     // 3. token has expired, so we need to get a new access token
    //     async jwt({ token, account, user }){
    //         // initial sign-in will give you two properties : account variable & user variable
    //         // if first sign-in... 
    //         if(account && user){
    //             return {
    //                 ...token,
    //                 // account.access_token is the access token we get from Spotify
    //                 accessToken: account.access_token,
    //                 refreshToken: account.refresh_token,
    //                 username: account.providerAccountId,
    //                 // we are handling expiry times in milliseconds
    //                 accessTokenExpires: account.expires_at * 1000 
    //             }
    //         }

    //         // if you can back to the site after initial sign in and your token hasn't expired
    //         // Return previous token if the access token has not expired yet
    //         if(Date.now()  < token.accessTokenExpires){
    //             console.log("Existing token is still valid");
    //             return token;
    //         }

    //         // Access token has expired, so we need to get a new access token 
    //         console.log('Access token has expired, get a new one');
    //         // return await refreshAccessToken(token);
    //     },

        // next-auth will call this function to get the user object
        // session object that user will be able to tap into
        
        // async session({ session, token }){
        //     // connected to what client can see in the session object
        //     session.user.accessToken = token.accessToken;
        //     session.user.refreshToken = token.refreshToken;
        //     session.user.username = token.username;

        //     return session;
        // }


    
}