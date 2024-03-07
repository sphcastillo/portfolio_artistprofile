"use client"

import girlinred from "@/images/onKeyboard.jpg";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {};

function About() {
  return (
    <div className={montserrat.className}>
        <motion.div 
            className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5}}
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#ddd4c6] text-2xl">About</h3>

            <motion.div
                initial={{
                    x: -200,
                }}
                transition={{ duration: 1.2}}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
            >
                <Image src={girlinred} alt="girl in red" className="rounded-full md:rounded-lg object-cover"/>
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 text-text-[#ddd4c6]">
                <h4 className="text-4xl font-semibold"> WHERE IT{" "}
                    <span className="decoration-text-[#ddd4c6]/50 underline">ALL</span>{" "}STARTED
                </h4>
                <p className="text-lg">Marie Ulven Ringheim was born in Horten, Norway on February 16, 1999. She grew up in the small town — which she described as “quiet and kinda boring” — with her sisters and divorced parents. She didn’t have any instruments, even though her grandfather could play the guitar and piano. Marie never really had an interest in music; her true passion at the time was fingerboarding, a sport where a person “rides” a small working replica of a skateboard and maneuvers it with their fingers. You can even find videos of her competing in some fingerboarding battles on YouTube.</p>
                <p className="text-lg">Her grandfather gave Marie a guitar as a Christmas gift in 2012, though she didn’t start playing it until she lost interest in fingerboarding in 2013. She then learned guitar, piano, and music production from the comfort of her own bedroom. Marie first released Norwegian music on Soundcloud under the moniker of “Lydia X”. She then coined the stage name “girl in red” after her crush looked really pretty in a red sweater.</p>
            </div>
        </motion.div>
    </div>
  )
}

export default About;