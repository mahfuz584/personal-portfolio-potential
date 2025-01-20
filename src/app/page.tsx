import About from "@/components/home/About";
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
    </>
  );
};

export default HomePage;
