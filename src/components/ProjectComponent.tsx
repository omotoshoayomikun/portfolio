import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import * as motion from "motion/react-client"

function ProjectComponent() {
  const portfolios = [
    {
      img: "/images/sentiment.png",
      heading: "Social Media Sentiment Analysis",
      detail: ` Analyzing Social Media Sentiment to Track Trends, Opinions, and
                Engagement in Real Time—Classifying Sentiment as Positive, Negative,
                or Neutral.
      `,
      technologies: [
        "/images/next.svg",
        "/images/tail.svg",
        "/images/fm.svg",
        "/images/ts.svg",
        "/images/mongodb.svg",
        "/images/nodejs.svg",
      ],
      link: "https://sentiment-analysis-lac-rho.vercel.app/",
      github: "https://github.com/omotoshoayomikun/sentiment-analysis",
    },
    {
      img: "/images/getlore.png",
      heading: "Getlore",
      detail: `A Comprehensive School Management Platform for Online Classes, Attendance, Tests, Assignments, E-Library, and Performance Prediction.
      `,
      technologies: [
        "/images/next.svg",
        "/images/tail.svg",
        "/images/fm.svg",
        "/images/javascript.svg",
        "/images/mongodb.svg",
        "/images/nodejs.svg",
      ],
      link: "https://e-learning-backup.vercel.app/",
      github: "https://github.com/omotoshoayomikun/e-learning-backup",
    },
    {
      img: "/images/lpp.png",
      heading: "LPP - Linear Programming Problem",
      detail: `A Web Application for Solving Linear Programming Problems in Statistics, Specializing in Transportation Problems Using the North-West Corner Method and Least Cost Cell Method..
      `,
      technologies: [
        "/images/javascript.svg",
      ],
      link: "https://lpp-theta.vercel.app/",
      github: "https://github.com/omotoshoayomikun/LPP-solution",
    },
    {
      img: "/images/movie.png",
      heading: "Movies Recommendation Engine",
      detail: ` A Smart Web Application That Recommends Movies Based on Mood, Genre, and Personalized Criteria.
      `,
      technologies: [
        "/images/react.svg",
        "/images/tail.svg",
        "/images/javascript.svg",
        "/images/postman.svg",
      ],
      link: "https://movies-engine-pi.vercel.app/",
      github: "https://github.com/omotoshoayomikun/movies-engine",
    },
  ];

  return (
    <>
      <motion.div 
      // initial={{ opacity: 0}}
      // whileInView={{opacity: 1}}      
      // transition={{ duration: 0.5, delay: 0.2 }}
      // viewport={{once: true, amount: 0.5}}
      className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 md:px-20 px-4">
        {/* {portfolios.map((portfolio, index) => (
          <ThreeDCardDemo value={portfolio} key={index} />
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
        >
        <ThreeDCardDemo value={portfolios[0]} />
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
        >
        <ThreeDCardDemo value={portfolios[1]} />
        </motion.div>
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
        >
        <ThreeDCardDemo value={portfolios[2]} />
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
        >
        <ThreeDCardDemo value={portfolios[3]} />
        </motion.div>
      </motion.div>
    </>
  );
}

export default ProjectComponent;
