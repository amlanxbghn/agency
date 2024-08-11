import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import SocialLinkedIn from "../assets/icons/linkedin.svg";
import SocialX from "../assets/icons/x-social.svg";
import SocialInsta from "../assets/icons/insta.svg";

export const Footer = () => {
    return(
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="container">
                <Image src={logoImage} height={40} alt="Brand Logo" className="inline-flex"/>
                <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Customers</a>
                    <a href="">Pricing</a>
                    <a href="">Help</a>
                    <a href="">Careers</a>
                </nav>
                <div className="flex justify-center gap-6 mt-6">
                    <SocialLinkedIn/>
                    <SocialX/>
                    <SocialInsta/>
                </div>
                <p className="mt-6">&copy; 2024 Your Company Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}