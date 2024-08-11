import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { LogoTicker } from "../components/LogoTicker";
import { FAQs } from "../components/FAQs";
import { Footer } from "../components/Footer";

export default function Home() {
  return(
  <>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <FAQs/>
    <Footer/>
  </>
  );
}
