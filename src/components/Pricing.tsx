'use client';
import CheckIcon from '../assets/icons/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
    {
        title: "Single-Page",
        monthlyPrice: 299,
        buttonText: "Book a call",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2 GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Multi-Page",
        monthlyPrice: 499,
        buttonText: "Book a call",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50 GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Hire us",
        monthlyPrice: 1499,
        buttonText: "Contact Us",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200 GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Unlimited Revisions",
            "API access",
            "Advanced security features",
        ],
    }
]


export const Pricing = () => {
    return(
        <section className="py-24">
            <div className="container">
                <div className='max-w-[540px] mx-auto'>
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                        Pricing
                    </h2>
                    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
                        Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
                    </p>
                </div>
                <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
                    {pricingTiers.map(({ 
                        title, 
                        monthlyPrice, 
                        buttonText, 
                        popular, 
                        inverse, 
                        features
                    }) => (
                        <div className={twMerge(
                            "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", 
                            inverse === true && "border-black bg-black text-white")}>
                        <div className="flex justify-between">
                            <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && "text-white/60")}>
                                {title}
                            </h3>
                            {popular === true && (
                                <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                                    <motion.span 
                                        animate={{
                                            backgroundPositionX: '100%',
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            repeatType: 'loop',
                                        }}
                                        className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-md'>
                                            Most Popular
                                    </motion.span>
                                </div>
                            )}
                        </div>
                        <div className='flex items-baseline gap-1 mt-[30px]'>
                            <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                            <span className={twMerge('tracking-tight font-bold', inverse === true ? "text-white/60" : "text-black/50")}>/month</span>
                        </div>
                        <button className={twMerge(
                            'px-4 py-2 rounded-lg font-medium inline-flex items-center justify center tracking-tight bg-black text-white w-full mt-[30px]',
                            inverse === true && "bg-white text-black")}>

                            {buttonText}
                        </button>
                        <ul className='flex flex-col gap-5 mt-8'>
                            {features.map(features => (
                                <li className='text-sm flex items-center gap-4'>
                                    <CheckIcon className="h-6 w-6"/>
                                    <span>{features}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}