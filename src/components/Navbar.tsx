import Image from "next/image"
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="px-4">
                <div className="py-4 flex items-center justify-between">
                    <Image src={logoImage} alt="Brand Logo" className="h-12 w-12"/>
                    <div className="text-white border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                        <MenuIcon />
                    </div>
                    <nav className="gap-6 items-center hidden sm:flex">
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">
                            Home
                        </a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">
                            About
                        </a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">
                            Services
                        </a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">
                            Projects
                        </a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">
                            Contact
                        </a>
                        <button className="bg-white py-2 px-4 rounded-lg">
                            Book a call
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}