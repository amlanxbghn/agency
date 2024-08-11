import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const WorkShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                    Intuitive Interface
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus necessitatibus sequi cumque repellendus sunt facilis ullam enim a suscipit?
                    </p>
                </div>
                <Image src={appScreen} alt="Work Screenshots" className="mt-14 mx-auto"/>
            </div>
        </section>
    );
}