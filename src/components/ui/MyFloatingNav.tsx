"use client";

import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { FaMoon } from "react-icons/fa";
import { Button } from "./MovingBorder";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";

function MyFloatingNav() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="fixed m-auto left-0 flex p-[6px] rounded-full items-center right-0 top-[30px] z-[100] navbar dark:bg-black-100 bg-[#F9FAFB] text-white w-min ">
        <Link href="#project" className="mx-3 my-1 text-sm dark:text-white text-black">
          Project
        </Link>
        <Link href="#about" className="mx-3 my-1 text-sm dark:text-white text-black">
          About
        </Link>
        <Link
          href="https://docs.google.com/document/d/1LkBPK7UdwCc4kTQfWlOmvh3G78mmc6xF/edit"
          target="_blank"
          className="mx-3 my-1 text-sm dark:text-white text-black"
        >
          Resume
        </Link>
        <Link href="#contact" className="mx-3 my-1 text-sm dark:text-white text-black">
          Contact
        </Link>
        <Link href="/" className="mx-3 my-1 text-sm dark:text-white text-black">
          {/* <HoverBorderGradient 
        className="bg-[transparent] text-white w-[30px] h-[30px] flex justify-center items-center"
        containerClassName=""
            children={
                <>
                <FaMoon size={120} color="white" />
                </>
            }
        /> */}
          <Button
            onClick={handleTheme}
            borderRadius="50%"
            className=""
            duration={5000}
            containerClassName="w-[35px] h-[35px]"
            // children={ theme === "dark" ? (
            //   <>
            //   <FaMoon size={20} color="white" />
            //   </>
            // ) : (
            //    <>
            //     <CiLight  size={20} color="white" />
            //     </>
            // )
            // }
          >
            {theme === "dark" ? (
              <>
                <FaMoon size={20} color="white" />
              </>
            ) : (
              <>
                <CiLight size={20} color="white" />
              </>
            )}
          </Button>
        </Link>
      </div>
    </>
  );
}

export default MyFloatingNav;
