"use client";
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    {
        question: "What does the entire process look like from start to finish?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum odio est suscipit corrupti voluptatibus repellat, minus quae accusantium consectetur incidunt neque ducimus.",
    },
    {
        question: "How soon can I expect my project to be completed?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore, esse sequi voluptatum ad minima doloremque vel distinctio mollitia, veniam voluptas error magni.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus! Voluptas assumenda vel, similique iure dolor incidunt. Laborum, earum adipisci.",
    },
    {
        question: "What if I need changes after the project is completed?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti culpa aspernatur nam quas cum?",
    },
    {
        question: "Do you offer support or training after the website is live?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus beatae, facere, veritatis natus esse tempora necessitatibus eius dignissimos temporibus, libero eveniet! In accusamus quas id!",
    }
];

const AccordionItem = ({
    question, 
    answer
}: { 
    question:string; 
    answer:string;
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className='py-7 border-b border-black/30'
        onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center'
        >
                <span className='flex-1 text-lg font-bold text-[#010D3E]'>{question}</span>
                {isOpen ? <MinusIcon/> : <PlusIcon />}
                
            </div>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        height: 0,
                        marginTop: 0,
                    }}
                    animate={{
                        opacity: 1,
                        height: 'auto',
                        marginTop: '16px',
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                        marginTop: 0,
                    }}
                    className='text-[#010D3E]/75'
                >
                    {answer}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export const FAQs = () => {
    return (
        <div className='py-[72px] sm:py-24'>
            <div className="container">
                <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
                    Frequently asked questions
                </h2>
                <div className='mt-12 max-w-[648px] mx-auto'>
                    {items.map(({ question, answer }) => (
                        <AccordionItem question={question} answer={answer} key={question} />
                    ))}
                </div>
            </div>
        </div>
    );
}