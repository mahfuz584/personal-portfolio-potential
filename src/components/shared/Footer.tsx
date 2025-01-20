import { navItems } from "@/data/NavItems";
import Image from "next/image";
import Link from "next/link";
import SocialInfo from "./SocialInfo";

const Footer = () => {
  return (
    <div className="md:mt-28 mt-14">
      <div className="flex flex-col gap-y-7 items-center md:py-16 py-8 sm:px-0 px-2 bg-bgGray dark:bg-bgDark">
        <div className="flex items-center sm:gap-x-3 gap-x-1">
          <Image
            src="/images/shared/brandLogo.png"
            alt="brand-logo"
            height={1000}
            width={1000}
            className="w-10 h-10 object-cover"
          />
          <p className="text-text-3xl">
            <span className="font-[700]">M</span>umair
          </p>
        </div>
        <div className="flex  flex-wrap items-center justify-center gap-x-8 gap-y-4 w-fit">
          {navItems?.map(({ name, href }, idx) => {
            return (
              <Link href={href} key={idx}>
                <p className="lg:text-lg md:text-text-md dark:text-white hover:border-b-[#FD6F00] border-b-2 border-transparent cursor-pointer">
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
        <SocialInfo />
      </div>
      <p className="text-text-lg font-[700] text-white bg-bgDarkGray dark:bg-bgDeepDark  py-8 text-center">
        © 2023 <span className="text-brandColor">Mumair</span> All Rights
        Reserved , Inc.
      </p>
    </div>
  );
};

export default Footer;
