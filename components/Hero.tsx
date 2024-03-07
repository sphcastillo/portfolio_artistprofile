"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import marie from "@/images/girlinred.jpg";

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
            <Image 
                src={marie}
                alt='Marie Ulven Ringheim'
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
            />
            <div>
                <h2 className="text-sm lowercase text-[#ddd4c6] pb-2 tracking-[12px]">girl in red</h2>
                <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#F01E2C"/>
                </h1>
            </div>
        </div>
    )
}

export default Hero;