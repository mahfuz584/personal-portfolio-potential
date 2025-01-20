import {
  allProjects,
  appProjects,
  graphicProjects,
  uiuxProjects,
  webProcejts,
} from "@/data/projects";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

type TProjectProps = {
  activeTab: string;

  inView: boolean;
};
const ProjectLists: React.FC<TProjectProps> = ({ activeTab, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, activeTab]);
  const renderProjects = () => {
    switch (activeTab) {
      case "UI/UX":
        return uiuxProjects;
      case "Web Design":
        return webProcejts;
      case "App Design":
        return appProjects;
      case "Graphic Design":
        return graphicProjects;
      case "All":
      default:
        return allProjects;
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 pt-14">
        {renderProjects().map(({ title, type, image }, idx) => (
          <div key={idx}>
            <Image
              src={image}
              alt={title}
              height={1000}
              width={1000}
              className="w-full h-[490px] object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-text-lg2 text-brandColor">{type}</p>
              <p className="text-text-xl font-[700]">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLists;
