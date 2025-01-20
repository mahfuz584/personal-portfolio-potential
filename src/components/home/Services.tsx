"use client";
import { childVariants, staggerContainer } from "@/animation/stragerVariant";
import { services } from "@/data/services";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DynamicTitle from "../shared/DynamicHeading";
import Container from "../ui/container";
const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <Container id="services">
      <div className="lg:mt-24 mt-12">
        <DynamicTitle
          heading="Services"
          subHeading="UX, web, app, and graphic design solutions. Creating seamless experiences and visually stunning designs tailored for impact."
        />
        <motion.div
          ref={ref}
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 "
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {services?.map(
            ({ title, description, image, height, width }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col space-y-4 bg-bgSemiGray px-4 py-8 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={childVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                <Image
                  style={{ height: `${height}px`, width: `${width}px` }}
                  src={image}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="rounded-md"
                />
                <div className="flex flex-col items-start space-y-2">
                  <p className="lg:text-text-2xl sm:text-text-md text-text-md font-[600] dark:text-black">
                    {title}
                  </p>
                  <p className="text-text-lg2 dark:text-black">{description}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </Container>
  );
};

export default Services;
