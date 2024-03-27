'use client'
import Image from 'next/image';
import girlInRed from '@/images/girlinred.jpg';
import { PauseIcon } from '@heroicons/react/24/solid';
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline';
import { FiVolume1, FiVolume2 } from "react-icons/fi";
import { PiShuffle } from "react-icons/pi";
import { TbRepeat } from "react-icons/tb";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

function SpotifyPlayer() {

    return (
        <div className='flex justify-center'>
            <div className="w-full sm:w-3/4 h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
                {/* Left */}
                <div className="flex items-center space-x-4">
                    <Image 
                        // className="hidden md:inline h-10 w-10"
                        className='h-8 w-8'
                        src={girlInRed} 
                        alt="Song Album Image" 
                    />
                    <div className={montserrat.className}>
                        <h3>Too Much</h3>
                        <p>girl in red</p>
                    </div>
                </div>  

                {/* Center */}
                <div className="flex items-center justify-evenly"> 
                    <PiShuffle className="h-4 w-4 sm:h-8 sm:w-8"/>

                    <BackwardIcon className="h-4 w-4 sm:h-8 sm:w-8"/>

                    <PauseIcon className="h-4 w-4 sm:h-8 sm:w-8"/>
                    <MdOutlinePlayCircleOutline className="h-4 w-4 sm:h-8 sm:w-8"/>

                    <ForwardIcon className="h-4 w-4 sm:h-8 sm:w-8"/>

                    <TbRepeat className="h-4 w-4 sm:h-8 sm:w-8"/>
                </div>
                {/* Right */}
                <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
                    <FiVolume1 className="h-4 w-4 sm:h-8 sm:w-8"/>
                    <input 
                        className="w-14 md:w-28 cursor-pointer rounded-lg overflow-hidden appearance-none"
                        type="range"   
                        min={0} 
                        max={100} 
                    />
                    
                    <FiVolume2 className="h-4 w-4 sm:h-8 sm:w-8"/>
                </div>
            </div>
        </div>
    )
}

export default SpotifyPlayer;