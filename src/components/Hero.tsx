import { MdCallMade } from "react-icons/md";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
    return (
        <div className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <div className="text-lg inline-flex border border-[#0000FF]/20 px-3 py-1 rounded-lg tracking-tight">
                        We are open to work
                    </div>
                </div>

                <div className="text-center text-6xl md:text-8xl md:leading-[95px] font-bold tracking-tighter max-w-[950px] mx-auto mt-5 py-2">
                    <TextGenerateEffect
                        className=""
                        words="Crafting Next-Gen Landing Pages"
                        duration={1}
                    />
                </div>

                <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]/75 mt-5 max-w-[750px] mx-auto">
                    Helping Founders and Early-Stage Startups build Fully Responsive Landing Pages for 1/3 of the Cost to get 3x More Conversions.
                </p>
                <div className="flex justify-center mt-8">
                    <button className="inline flex items-center text-xl bg-black text-white py-3 px-5 rounded-lg font-medium shadow-lg">
                        Book a call &nbsp;<MdCallMade/> 
                    </button>
                </div>
            </div>
        </div>
    );
}

