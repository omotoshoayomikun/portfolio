import React from "react";
import { GlobeComponent } from "./GlobeComponent";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import ProjectComponent from "./ProjectComponent";
import * as motion from "motion/react-client"

function Project() {
  return (
    <>
    {/* <motion.div className="">

    </motion.div> */}
    <motion.div
     id="project"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 2.4,  duration: 1,}}
     className="relative w-full mt-20 overflow-hidden">
      <div className="top-[200px] w-max m-auto left-0 right-0 pointer-events-none mb-20">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="lg:text-6xl md:text-5xl text-4xl font-bold text-center"
        >
          Projects
        </motion.h1>
      </div>
      {/* <GlobeComponent /> */}
      <ProjectComponent />
    </motion.div>
    </>
  );
}

export default Project;
