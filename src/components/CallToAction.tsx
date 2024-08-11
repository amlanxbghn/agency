export const CallToAction = () => {
    return (
        <div className="py-[72px] sm:py-24 text-center">
            <div className="container">
                <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
                    Start building with us
                </h2>
                <p className="tex-xl text-black/70 mt-5">
                    Empower your growth with a website crafted to elevate your brand and drive success.
                </p>
                <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
                    <input type="email" placeholder="your@email.com" className="h-12 bg-black/10 rounded-lg px-5 font-md placeholder:text-black/45"/>
                    <button className="bg-black text-white h-12 rounded-lg px-5">
                        Book a call
                    </button>
                </form>
            </div>
        </div>
    );
}