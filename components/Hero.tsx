"use client"

import { Montserrat } from 'next/font/google'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import marie from "@/images/girlinred.jpg";
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {};

function Hero({} : Props) {
 const [text, count] = useTypewriter({
    words: ["Songwriter","Storyteller", "Activist", "Queer"],
    loop: true,
    delaySpeed: 1000
 })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Link href='/'>
            <Image 
                src={marie}
                alt='Marie Ulven Ringheim'
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                priority
            />
            </Link>
            <div>
                <div className={montserrat.className}>
                    <h2 className="text-sm lowercase text-[#ddd4c6] pb-2 tracking-[12px]">girl in red</h2>
                
                    <h1 className="text-4xl lg:text-6xl font-semibold tracking-[6px] scroll-px-10 pt-8">
                        <span>{text}</span>
                        <Cursor cursorColor="#F01E2C"/>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;