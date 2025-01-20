import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects/Projects";
import Services from "@/components/home/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
};

export default HomePage;
