import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { GoArrowUpRight } from "react-icons/go";

function WorkPlace() {
  const [workExperience, setWorkExperience] = React.useState([
    {
      title: "Full Stack Developer, @Map of PI",
      desc: "I developed and maintained scalable web applications using modern technologies such as React, Next.js, Node.js, Express, and MongoDB also collaborated with UX/UI designers to create intuitive and responsive user interfaces, enhancing user experience and engagement. Implemented RESTful APIs and integrated third-party services to extend application functionality and improve performance.",
      date: "Jan 2024 – Present",
      images: [
        "/images/nextjs.svg",
        "/images/mongodb.svg",
        "/images/ts.svg",
        "/images/dock.svg",
        "/images/react.svg",
        "/images/fm.svg",
      ],
      link: "https://mapofpi7689.pinet.com",
    },
    {
      title: "Contract: Front-end Developer, @Simxchanger",
      desc: "I Implemented a responsive design for different screen sizes, utilized redux for state management and optimized the application’s performance also collaborated with the design team to implement visually appealing user interfaces and work with the backend team to integrate REST APIs and ensure data consistency",
      date: "Nov 2022 – Feb 2023",
      images: [
        "/images/nextjs.svg",
        "/images/react.svg",
        "/images/javascript.svg",
        "/images/postman.svg",
      ],
      link: "https://simxchanger.net/",
    },
    {
      title: "Front-end Developer, @Eclipsoft ICT company",
      desc: "I help influence decisions around the Eclipsoft frontend design system, frontend technologies, and accessibility. I collaborated with the back-end team to integrate with RESTful APIs and ensured seamless communication between the front-end and back-end which i was mostly involved with frontend technologies such as Javascript, React.js, Angular, Vue.Js, HTML5, CSS/SCSS, and more",
      date: "Dec 2020 – Oct 2022",
      images: [
        "/images/react.svg",
        "/images/nextjs.svg",
        "/images/postman.svg",
      ],
    },
  ]);

  return (
    <div id="about" className="relative w-full mt-32 overflow-hidden">
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
            delay: 0.2,
          }}
          className="lg:text-6xl md:text-5xl text-4xl font-bold text-center my_rad_gra"
        >
          work experience
        </motion.h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6  md:px-20 px-4">
        {/* {workExperience.map((experience, index) => (
          <div
            key={index}
            className="w-full p-8 dark:bg-black-200 bg-[#F9FAFB] border-b-4 border-solid border-b-[#ffbd39]"
          >
            <div className="flex justify-between">
              <h2>{experience.title}</h2>
              <Link href="">Live</Link>
            </div>
            <h2 className="text-sm text-gray-600 mb-2">{experience.date}</h2>
            <hr className="py-2" />
            <p className="text-xs leading-5">{experience.desc}</p>
            <div className="flex gap-3 mt-2">
              {experience.images.map((image, index) => (
                <Image key={index} src={image} alt="" width={25} height={25} />
              ))}
            </div>
          </div>
        ))} */}

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            //  delay: 0.2
          }}
          className="w-full p-8 dark:bg-black-200 bg-[#F9FAFB] border-b-4 border-solid border-b-[#ffbd39]"
        >
          <div className="flex justify-between">
            <h2>{workExperience[0].title}</h2>
            <Link href={`${workExperience[0].link}`}>
              <GoArrowUpRight />
            </Link>
          </div>
          <h2 className="text-sm text-gray-600 mb-2">
            {workExperience[0].date}
          </h2>
          <hr className="py-2" />
          <p className="text-xs leading-5">{workExperience[0].desc}</p>
          <div className="flex gap-3 mt-2">
            {workExperience[0].images.map((image, index) => (
              <Image key={index} src={image} alt="" width={25} height={25} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            //  delay: 0.2
          }}
          className="w-full p-8 dark:bg-black-200 bg-[#F9FAFB] border-b-4 border-solid border-b-[#ffbd39]"
        >
          <div className="flex justify-between">
            <h2>{workExperience[1].title}</h2>
            <Link href={`${workExperience[1].link}`}>
              <GoArrowUpRight />
            </Link>
          </div>
          <h2 className="text-sm text-gray-600 mb-2">
            {workExperience[1].date}
          </h2>
          <hr className="py-2" />
          <p className="text-xs leading-5">{workExperience[1].desc}</p>
          <div className="flex gap-3 mt-2">
            {workExperience[1].images.map((image, index) => (
              <Image key={index} src={image} alt="" width={25} height={25} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            //  delay: 0.2
          }}
          className="w-full p-8 dark:bg-black-200 bg-[#F9FAFB] border-b-4 border-solid border-b-[#ffbd39]"
        >
          <div className="flex justify-between">
            <h2>{workExperience[2].title}</h2>
            <Link href="">
              <GoArrowUpRight />
            </Link>
          </div>
          <h2 className="text-sm text-gray-600 mb-2">
            {workExperience[2].date}
          </h2>
          <hr className="py-2" />
          <p className="text-xs leading-5">{workExperience[2].desc}</p>
          <div className="flex gap-3 mt-2">
            {workExperience[2].images.map((image, index) => (
              <Image key={index} src={image} alt="" width={25} height={25} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkPlace;
