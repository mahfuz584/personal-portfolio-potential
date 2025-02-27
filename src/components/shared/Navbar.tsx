"use client";
import { navItems } from "@/data/NavItems";
import ThemeToggle from "@/lib/Theme/ThemeToggole";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CustomBtn from "../ui/button";
import Container from "../ui/container";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <Container className="flex justify-between py-8 sm:px-0 px-2">
      <div className="flex items-center sm:gap-x-3 gap-x-1">
        <Image
          src="/images/shared/brandLogo.png"
          alt="brand-logo"
          height={1000}
          width={1000}
          className="w-10 h-10 object-cover"
        />
        <p className="md:text-text-3xl text-text-2xl ">
          <span className="font-[700]">M</span>umair
        </p>
      </div>
      <div className="flex justify-center items-center lg:gap-x-8 gap-x-6">
        <div className="lg:flex hidden items-center gap-x-8">
          {navItems?.map(({ name, href }, idx) => {
            return (
              <Link href={href} key={idx}>
                <motion.p
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.1,
                  }}
                  className="lg:text-lg md:text-text-md hover:border-b-[#FD6F00] border-b-2 border-transparent cursor-pointer"
                >
                  {name}
                </motion.p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-x-5 ">
          <CustomBtn className="hidden lg:flex text-white">
            Download CV
          </CustomBtn>
          <ThemeToggle className="z-10" />
        </div>
        <div
          className={`lg:hidden flex items-center justify-center  w-fit z-10 bg-brandColor rounded-full`}
        >
          {/* hamburger menu */}
          <Hamburger
            toggle={setIsOpen}
            color="#000"
            toggled={isOpen}
            size={18}
          />
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-0">
            {/* Overlay */}
            <div
              className="fixed inset-0  bg-opacity-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm overflow-hidden"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-bgLight dark:bg-bgDark shadow-lg z-0"
            >
              <div className="flex flex-col items-start mt-12 p-10 gap-y-6">
                {/* Drawer Navigation */}
                {navItems.map(({ name, href }, idx) => (
                  <Link href={href} key={idx}>
                    <motion.p
                      ref={ref}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: inView ? 1 : 0,
                        y: inView ? 0 : 20,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.1,
                      }}
                      className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:border-b-[#FD6F00] border-b-2 border-transparent cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </motion.p>
                  </Link>
                ))}
                <CustomBtn className="text-white">Download CV</CustomBtn>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Navbar;
