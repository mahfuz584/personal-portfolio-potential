import { skills } from "@/data/skills";
import ProfileImg from "../shared/ProfileImg";
import Container from "../ui/container";

const About = () => {
  return (
    <Container id="about" className="lg:mt-24 mt-12">
      <div className="grid grid-cols-12 gap-y-8 items-center">
        <div className="md:col-span-6 col-span-12  col-start-1 ">
          <ProfileImg
            className="lg:-ml-[3rem]"
            src="/images/hero-about/about.png"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <p className="lg:text-text-4xl sm:text-text-4xl text-text-3xl font-[600]">
            About Me
          </p>
          <p className="md:text-text-lg sm:text-text-md mt-4 text-pretty">
            Hi, I’m Mumair, a passionate Front-End Developer and a graduate of
            DIU. With 2 years of experience, I specialize in technologies like
            React, Next.js, TypeScript, Redux, Material-UI, and Tailwind CSS.
          </p>
          <div className="md:space-y-6 space-y-4 relative mt-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="lg:text-text-xl md:text-text-lg sm:text-text-md font-[600]">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-bgGray rounded-full h-2.5 dark:bg-gray-700 relative">
                  <div
                    className="bg-brandColor h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />

                  <div
                    className="bg-bgGray w-5 h-5 border-[2px] border-[#FD6F00] rounded-full absolute -top-1"
                    style={{ left: `calc(${skill.level}% - 10px)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
