import Arrow from "../assets/icons/arrow-w.svg";

export const Banner = () => {
    return (
        <div className="py-3 text-center bg-[linear-gradient(to_right,rgba(247,234,163,0.7),rgba(236,180,238,0.7),rgba(163,203,247,0.7))]">
            <div className="container">
                <p className="font-medium">
                    <span className="hidden sm:inline">Unleash Your Stunning Landing Page — </span>
                    <div className="inline-flex gap-1 items-center">
                        <a href="#" className="underline underline-offset-4">
                            Book a call
                        </a>
                        <Arrow className="h-4 w-4 inline-flex justify-center items-center"/>
                    </div>
                </p>
            </div>
        </div>
    );
};
