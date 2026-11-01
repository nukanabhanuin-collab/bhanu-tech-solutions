
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurWork from "@/components/sections/OurWork";
import Contact from "@/components/sections/Contact";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import BrandIntro from "@/components/sections/BrandIntro";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <OurWork />
        <Testimonials />
        <Contact />
      </main>

<Footer />
    </>
  );
}
