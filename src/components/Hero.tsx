"use client";

import React from "react";
import { Spotlight } from "./ui/Sportlight";
import { BackgroundLines } from "./ui/BackgroundLines";
import * as motion from "motion/react-client";

function Hero() {
  return (
    <>
      <div className="md:pb-4 pb-2 pt-36">
        {/* <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen w-[10px]"
            fill="#ffbd39"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="-top-28 -left-80 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div> */}
        {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 right-0 m-auto z-0 flex items-center justify-center"> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-400 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
        {/* </div> */}
        <div className="flex justify-center z-10 relative">
          <div className="max-w-[89wv] md:max-w-[60vw] lg:max-w-[60vw] px-5 md:px-0 flex flex-col item-center justify-center">
            <BackgroundLines
            //   children={
            //     <>
            //       <motion.h1
            //       initial={{y: 30, opacity: 0}}
            //       animate={{
            //         opacity: 1,
            //         y: 0,
            //       }}
            //       transition={{
            //         duration: 0.8
            //       }}
            //       className="lg:text-6xl md:text-5xl text-4xl w-max text-center tracking-tight mb-2 flex items-center ml-auto mr-auto"
            //       >
            //         Hi,
            //         <motion.div
            //         animate={{ rotate: [0, 20, 0, -20, 0]}}
            //         transition={{ duration: 2, repeat: Infinity }}
            //         >👋</motion.div>
            //          i&apos;m
            //       </motion.h1>
            //       <motion.h1
            //        initial={{y: 30, opacity: 0}}
            //        animate={{
            //          opacity: 1,
            //          y: 0,
            //        }}
            //        transition={{
            //          duration: 1,
            //          delay: 0.7
            //        }}
            //       className="lg:text-6xl md:text-5xl text-4xl text-center font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-t dark:from-neutral-50 dark:to-neutral-400 from-neutral-700 to-neutral-950 bg-opacity-50">
            //         Omotosho Ayomikun <br /> James
            //       </motion.h1>
            //       <motion.p
            //        initial={{y: 30, opacity: 0}}
            //        animate={{
            //          opacity: 1,
            //          y: 0,
            //        }}
            //        transition={{
            //          duration: 1,
            //          delay: 1.4
            //        }}
            //       className="text-sm text-center mt-5 font-light lg:mx-8">
            //         A passionate full-stack developer based in Lagos,
            //         Nigeria, who loves the blend of creativity and logic—whether
            //         it&apos;s designing an intuitive user interface or optimizing a
            //         back-end process for better performance.
            //       </motion.p>
            //     </>
            // }
            >
              <>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="lg:text-6xl md:text-5xl text-4xl w-max text-center tracking-tight mb-2 flex items-center ml-auto mr-auto"
                >
                  Hi,
                  <motion.div
                    animate={{ rotate: [0, 20, 0, -20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👋
                  </motion.div>
                  i&apos;m
                </motion.h1>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                  }}
                  className="lg:text-6xl md:text-5xl text-4xl text-center font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-t dark:from-neutral-50 dark:to-neutral-400 from-neutral-700 to-neutral-950 bg-opacity-50"
                >
                  Omotosho Ayomikun <br /> James
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                  }}
                  className="text-sm text-center mt-5 font-light lg:mx-8"
                >
                  A passionate full-stack developer based in Lagos, Nigeria, who
                  loves the blend of creativity and logic—whether it&apos;s
                  designing an intuitive user interface or optimizing a back-end
                  process for better performance.
                </motion.p>
              </>
            </BackgroundLines>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
