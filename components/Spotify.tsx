'use client'
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

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
        <div className="flex flex-col items-center space-x-2 justify-center pb-[80px]">
            <h3>Welcome, {session?.user?.name}!</h3>
            <Image
                src={session?.user?.image!}
                alt={session?.user?.name! || "User Image"}
                width={60}
                height={60}
                className="rounded-full"
                referrerPolicy="no-referrer"
            />
            <button onClick={() => signOut()}>
                Sign Out
            </button>
        </div>
    )
    }

export default Spotify;