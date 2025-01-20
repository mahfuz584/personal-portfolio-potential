import ProfileImg from "../shared/ProfileImg";
import CustomBtn from "../ui/button";
import Container from "../ui/container";

const Hero = () => {
  return (
    <Container className="mt-12">
      <div className="grid grid-cols-12 gap-y-8 items-center">
        <div className="sm:col-span-6 col-span-12 col-start-1 md:order-1 order-2">
          <p className="text-text-xl font-[600]">Hi I Am</p>
          <p className="text-text-2xl text-brandColor font-[600]">
            Muhammad Umair
          </p>
          <div>
            <p className="lg:text-text-heading sm:text-text-4xl text-text-3xl font-[700]">
              UI & UX
            </p>
            <p className="lg:text-text-heading sm:text-text-4xl text-text-3xl font-[700] md:text-end text-start md:ml-0 ml-24">
              Designer
            </p>
          </div>
          <p className="md:text-text-lg sm:text-text-md mt-4 text-pretty">
            I am a Front-End Developer with 2 years of experience in building
            responsive and user-friendly interfaces. Skilled in React, Next.js,
            TypeScript, Redux, Material-UI, and Tailwind CSS, I aim to deliver
            intuitive designs and efficient, scalable solutions that enhance
            user experiences
          </p>
          <CustomBtn className="mt-6">Hire Me</CustomBtn>
        </div>
        <div className="sm:col-span-5 col-span-10 mx-auto md:col-start-8 col-start-2 order-1 md:order-2">
          <ProfileImg
            className="ml-[.65rem]"
            src="/images/hero-about/hero.png"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
