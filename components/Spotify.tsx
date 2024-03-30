'use client'
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import SpotifyPlayer from "./SpotifyPlayer";

function Spotify({session}: {session: any}) {
    console.log("Spotify component session: ", session);
    if (!session) {
        return (
            <div className="flex justify-center pb-[80px]">
                <button onClick={() => signIn()}>Sign In</button>
            </div>
        );
    }

    return (
        <div className="">
            <div className="flex flex-col-1 items-center space-x-2 justify-center pb-[40px]">
                <Image
                    src={session?.user?.image!}
                    alt={session?.user?.name || "User Image"}
                    width={45}
                    height={45}
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                />
                <h2 className="font-bold">Welcome, {session?.user?.name}!</h2>
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
    );
}

export default Spotify;