"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo(props: any) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white flex w-full justify-between items-center"
        >
          <div className="">{props.value.heading}</div>
          <div className="">
            <Link href={props.value.github} target="__blank">
              <Image src="/images/git.svg" alt="" width={30} height={30} />
            </Link>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
         {props.value.detail}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src={props.value.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-7">
          <CardItem
            translateZ={20}
            className="flex gap-3"
          >
            {
              props.value.technologies.map((tech: string) => (
                <Image src={tech} alt="" key={tech} width={20} height={20} />

              ))
            }
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={props.value.link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Preview →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
