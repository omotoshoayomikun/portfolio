import React from "react";
import { World } from "./ui/Globe";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import * as motion from "motion/react-client";

function Contact() {
  const year = new Date().getFullYear();
  return (
    <>
      <div id="contact" className="relative w-full mt-32 overflow-hidden md:px-20 px-4 flex flex-col-reverse md:flex-row md:justify-between items-center">
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
          Copyright © {year} Ayomikun
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
          className=" p-4 flex items-center gap-6"
        >
          <Link
            href="https://www.linkedin.com/in/omotosho-ayomikun-61aa0623a/"
            className=" md:text-[35px] text-[25px]"
          >
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/OmotoshoAJ" className=" md:text-[55px] text-[40px]">
            <BsTwitterX />
          </Link>
          <Link href="https://www.instagram.com/omotosho_aj/" className=" md:text-[55px] text-[40px]">
            <FaInstagram />
          </Link>
          <Link href="mailto:omotoshoayomikun@gmail.com" className=" md:text-[40px] text-[30px]">
            <BiLogoGmail />
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
