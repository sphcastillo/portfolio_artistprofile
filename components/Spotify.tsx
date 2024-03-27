'use client'
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import SpotifyPlayer from "./SpotifyPlayer";

interface Session {
    user: {
        name?: string;
        image?: string;
    } 
}

function Spotify({ session }: { session: Session | null}) {
    console.log("Spotify session: ", session);
    if(!session){
        return (
            <div  className="flex justify-center pb-[80px]">
                <button onClick={() => signIn()}>
                    Sign In
                </button>
            </div>

        )
      }
    

    return session && (
        <div className="">
            <div className="flex flex-col-1 items-center space-x-2 justify-center pb-[40px]">
                <Image
                    src={session?.user?.image!}
                    alt={session?.user?.name! || "User Image"}
                    width={45}
                    height={45}
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                />
                <h3>Welcome, {session?.user?.name}!</h3>
            </div>
                    <SpotifyPlayer />
            <div className="flex justify-center items-center py-[30px]">
                <button 
                    onClick={() => signOut()}
                    className="pb-[25px]"
                >
                            Sign Out
                </button>
            </div>
        </div>
    )
}

export default Spotify;