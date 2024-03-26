import SpotifyWebApi from "spotify-web-api-node";

// permissions that we are asking Spotify for
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    'streaming',
    "user-read-private",
    'user-library-read',
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(",");
//, - putting all of these in a value string and then passing it to the URLSearchParams constructor 


const params =  {
    scope: scopes,
};

// pass params to the end of the string
// creates an object that we can use to create a query string
const queryParamString = new URLSearchParams(params);


const LOGIN_URL = "https://accounts.spotify.com/authorize?"  + queryParamString.toString();

console.log("LOGIN_URL: ",LOGIN_URL);

// use said library above
// configure our Spotify API object
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
});


export default spotifyApi;

export { LOGIN_URL };