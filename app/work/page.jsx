"use client";

import { animate, motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkerSliderBtns from "@/components/WorkerSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Ford Saas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "Html 5", icon: <FaHtml5 /> },
      { name: "Css 3", icon: <FaCss3 /> },
      { name: "Javascript", icon: <FaJs /> },
    ],
    image: "/assets/work/ford.avif",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Javascript", icon: <FaJs /> },
    ],
    image: "/assets/work/ema.avif",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    image: "/assets/work/prop-finder.avif",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    image: "/assets/work/hedieaty.avif",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    image: "/assets/work/roomify.avif",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "fullstack",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas, beatae nisi reiciendis quaerat dolor nesciunt architecto soluta placeat iure",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    image: "/assets/work/tag.avif",
    live: "",
    github: "",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center py-12 px-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>

              {/* Updated Stack Display with Icons */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-2xl text-accent hover:text-white transition-colors"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>{item.icon}</TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-full mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full  ">
                    <div className="h-[460px] w-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkerSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-10 z-20 w-full justify-between xl:w-max xl:justify-none "
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
