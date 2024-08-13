"use client";
import acmeLogo from '../assets/images/acme.png';
import quantumLogo from '../assets/images/quantum.png'
import echoLogo from '../assets/images/echo.png';
import celestialLogo from '../assets/images/celestial.png';
import pulseLogo from '../assets/images/pulse.png';
import apexLogo from '../assets/images/apex.png';
import Image from "next/image";
import { motion } from 'framer-motion';

export const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12">
            <div className="container">
                <h2 className="text-xl text-center text-black/60">
                    Trusted by Founders and Teams at:
                </h2>
                <div className="py-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div className="flex gap-14 flex-none pr-14" 
                        animate={{
                            translateX: '-50%'
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        <Image
                            src={acmeLogo}
                            alt='Acme Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={quantumLogo}
                            alt='Quantum Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={echoLogo}
                            alt='Echo Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={celestialLogo}
                            alt='Celestial Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={pulseLogo}
                            alt='Pulse Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={apexLogo}
                            alt='Apex Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={acmeLogo}
                            alt='Acme Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={quantumLogo}
                            alt='Quantum Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={echoLogo}
                            alt='Echo Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={celestialLogo}
                            alt='Celestial Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={pulseLogo}
                            alt='Pulse Logo'
                            className='h-8 w-auto'
                        />
                        <Image
                            src={apexLogo}
                            alt='Apex Logo'
                            className='h-8 w-auto'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}