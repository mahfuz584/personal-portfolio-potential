"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import DynamicTitle from "../../shared/DynamicHeading";
import Container from "../../ui/container";
import Tabs from "../../ui/tabs";
import ProjectLists from "./ProjectLists";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <Container id="projects">
      <div ref={ref}>
        <div>
          <DynamicTitle
            heading="Projects"
            subHeading="UX, web, app, and graphic design solutions. Creating seamless experiences and visually stunning designs tailored for impact."
          />
        </div>
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            y: {
              delay: 0.1,
              type: "spring",
              stiffness: 150,
              damping: 10,
              duration: 1,
            },
          }}
        >
          <ProjectLists inView={inView} activeTab={activeTab} />
        </motion.div>
      </div>
    </Container>
  );
};

export default Projects;
