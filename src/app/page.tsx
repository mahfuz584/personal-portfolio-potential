import About from "@/components/home/About";
import ContactMe from "@/components/home/ContactMe";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects/Projects";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <ContactMe />
    </>
  );
};

export default HomePage;
