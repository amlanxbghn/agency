import { Banner } from "../components/Banner";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { LogoTicker } from "../components/LogoTicker";
import { Features } from "../components/Features";
import { WorkShowcase } from "../components/WorkShowcase";
import { WorkFlow } from "../components/WorkFlow";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { FAQs } from "../components/FAQs";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export default function Home() {
  return(
  <>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <WorkShowcase/>
    <WorkFlow/>
    <Testimonials/>
    <Pricing/>
    <FAQs/>
    <CallToAction/>
    <Footer/>
  </>
  );
}
