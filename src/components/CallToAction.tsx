export const CallToAction = () => {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <div className="border border-[#F1F1F1] py-24 rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
                    <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
                        Start building with us
                    </h2>
                    <p className="text-center text-lg md:text-xl max-w-lg mx-auto text-black/70 px-4 mt-5 tracking-tight">
                        Empower your growth with a website crafted to take your digital presence to the next level.
                    </p>
                    <div className="flex justify-center mt-8">
                        <button className="bg-black text-white h-12 rounded-lg px-5">
                            Book a call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}