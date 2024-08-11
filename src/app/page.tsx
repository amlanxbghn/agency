import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { LogoTicker } from "../components/LogoTicker";

export default function Home() {
  return(
  <>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
  </>
  );
}
