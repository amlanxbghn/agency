"use client";
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';

const items = [
    {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus! Voluptas assumenda vel, similique iure dolor incidunt. Laborum, earum adipisci.",
    },
    {
        question: "How does the pricing work for team?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore, esse sequi voluptatum ad minima doloremque vel distinctio mollitia, veniam voluptas error magni.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti culpa aspernatur nam quas cum?",
    },
    {
        question: "Is my data secure?",
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
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon/> : <PlusIcon />}
                
            </div>
            <div className={clsx('mt-4', {
                'hidden': !isOpen,
                "":isOpen === true,
            })}
        >
            {answer}
            </div>
        </div>
    )
}

export const FAQs = () => {
    return (
        <div className='py-[72px] sm:py-24'>
            <div className="container">
                <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>
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