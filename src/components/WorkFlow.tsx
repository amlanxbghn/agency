import EcosystemIcon from '../assets/icons/ecosystem.svg';

const workflow = [
    {
        title:"Share Your Vision",
        description: "Describe your project goals and ideas to us.."
    },
    {
        title:"Review & Approve",
        description:"We'll present a detailed plan and design; approve to move forward."
    },
    {
        title:"Launch & Thrive",
        description:"Receive your stunning landing page and watch your business grow."
    }
]

export const WorkFlow = () => {
    return(
        <div className="py-[72px] sm:py-24">
            <div className="container">
                <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
                    Streamlined Workflow
                </h2>
                <div className='max-w-xl mx-auto'>
                    <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]/75 mt-5'>
                        From Concept to Conversion: Our Three-Step Process to Bring Your Vision to Life and Elevate Your Business
                    </p>
                </div>
                <div className="mt-16 flex flex-col sm:flex-row gap-4">
                    {workflow.map(({title, description}) => (
                        <div 
                            key={title} 
                            className='border border-black/30 px-5 py-10 text-center rounded-xl sm:flex-1'
                        >
                            <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg '>
                                <EcosystemIcon/>
                            </div>
                            <h3 className='mt-6 font-bold'>{title}</h3>
                            <p className='mt-2 text-black/70'>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}