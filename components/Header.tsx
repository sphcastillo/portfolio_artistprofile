"use client"

import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from 'next/link';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["latin"] });
  
type Props = {};

function Header({} : Props) {
  return (
    <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
        <motion.div 
            initial={{ 
                opacity: 0, 
                x: -500,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 1.5}}
            className="flex flex-row items-center">
            <SocialIcon 
                url="https://www.youtube.com/@girlinred"
                fgColor="#ddd4c6"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.instagram.com/girlinred/"
                fgColor="#ddd4c6"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.tiktok.com/@girlinred"
                fgColor="#ddd4c6"
                bgColor="transparent"
            />
            {/* <SocialIcon 
                url="https://x.com/_girlinred_"
                fgColor="#ddd4c6"
                bgColor="transparent"
            /> */}
            {/* <SocialIcon 
                url="https://www.facebook.com/girlinred/"
                fgColor="#ddd4c6"
                bgColor="transparent"
            /> */}
        </motion.div>
        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 1.5}}
            className="flex flex-row items-center text-[#ddd4c6] cursor-pointer">
            <SocialIcon 
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://open.spotify.com/artist/3uwAm6vQy7kWPS2bciKWx9"
            />
            <SocialIcon 
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://music.apple.com/us/artist/girl-in-red/1349818950"
            />
            {/* <SocialIcon 
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://soundcloud.com/lyfsuxx"
            /> */}
            <Link href="https://us.shopgirlinred.com/" className='pl-6'>
                <div className={montserrat.className}>
                    <p className="lowercase hidden md:inline-flex text-sm tracking-[4px] text-[#ddd4c6]">shop</p>
                </div>
            </Link>
            

        </motion.div>
    </header>
  )
}

export default Header;