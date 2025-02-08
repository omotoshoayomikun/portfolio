"use client";
import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Project from "@/src/components/Project";
import { FloatingDock } from "@/src/components/ui/FloatingDock";
import MyFloatingNav from "@/src/components/ui/MyFloatingNav";
import WorkPlace from "@/src/components/WorkPlace";
import { useTranslations } from "next-intl";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as motion from "motion/react-client"

export default function Index() {
  const t = useTranslations("Index");
  const dock = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/omotosho-ayomikun-61aa0623a/",
    },
    {
      title: "Twitter",
      icon: <FaXTwitter />,
      href: "https://x.com/OmotoshoAJ",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/omotoshoayomikun",
    },
    {
      title: "Gmail",
      icon: <BiLogoGmail />,
      href: "mailto:omotoshoayomikun@gmail.com",
    },
  ];
  return (
    <>
      <main className="dark:bg-black-100 bg-white flex w-full justify-center items-center flex-col overflow-hidden mx-auto pb-5">
        <MyFloatingNav />
        <div className="max-w-7xl w-full md:h-screen h-auto relative">
          <Hero />
          <motion.div 
           initial={{y: 30, opacity: 0}}
           animate={{
             opacity: 1,
             y: 0,
           }}
           transition={{
             duration: 1,
             delay: 1.9
           }}
          
          className="mt-6 md:mt-0 m-auto w-max z-50">
            <FloatingDock items={dock} />
          </motion.div>
        </div>
        <Project />
        <WorkPlace />
        <Contact />
      </main>
    </>
  );
}
