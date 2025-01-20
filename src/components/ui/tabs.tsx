import { tabs } from "@/data/projects";
import React from "react";

type TTab = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const Tabs: React.FC<TTab> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-fit mx-auto">
      {tabs?.map(({ name }, idx) => {
        return (
          <div
            onClick={() => setActiveTab(name)}
            key={idx}
            className={`cursor-pointer border-[1px] px-5 sm:py-2 py-1 rounded-lg bg-bgSemiGray hover:bg-brandColor group transition-all duration-300 ${
              activeTab === name
                ? "text-white border-[#FD6F00] bg-brandColor"
                : "text-text-base border-[#545454] dark:text-bgDark"
            }`}
          >
            <p
              className={`md:text-text-xl text-text-base group-hover:text-white ${
                activeTab === name ? "text-white" : "dark:text-bgDark"
              }`}
            >
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
