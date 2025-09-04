"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiSupabaseFill } from "react-icons/ri";

import {
  SiFigma,
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
  SiSpringboot,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

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
    category: "Frontend + UI/UX",
    title: "Ford Vehicle Management SaaS",
    description:
      "A comprehensive multi-role platform developed during my part-time job at Sobek, deployed to Ford South Africa. This enterprise-grade application streamlines automotive service center operations with role-based workflows for Finance Officers, Foremen, Service Advisors, Managers, and Technicians. Features include real-time task management, inventory tracking, invoice generation, and complete vehicle lifecycle management from intake to final handover.",
    stack: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
    image: "/assets/work/ford-sm.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend + UI/UX",
    title: "EMA Financial Platform Landing",
    description:
      "A modern, high-conversion landing page developed for Sobek to showcase their EMA fintech platform. This project demonstrates advanced UI/UX design aligned with industry standards, featuring smooth animations, responsive design, and strategic conversion optimization. The landing effectively presents EMA's comprehensive financial ecosystem including digital wallets, cross-border transfers, and SMME solutions targeting Africa's unbanked population.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "ShadcnUI", icon: <SiShadcnui /> },
    ],
    image: "/assets/work/ema.avif",
    live: "https://ema.emalyami.com/",
    github: "https://github.com/seif32/ema-landing",
  },

  {
    num: "03",
    category: "fullstack",
    title: "Property Finder Platform",
    description:
      "A comprehensive real estate platform featuring multi-role architecture with distinct user experiences for guests, normal users, agents, and administrators. Built with robust role-based access control, the system handles property listings, advanced search functionality, bookmarking, reviews, and location hierarchy management. Features include property image management, user authentication, secure data validation, and complete CRUD operations for all entities.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "React Query", icon: <SiReactquery /> },
    ],
    image: "/assets/work/prop-finder.avif",
    live: "",
    github: "https://github.com/seif32/react-property-finder",
  },

  {
    num: "04",
    category: "fullstack",
    title: "Hedieaty Gift Management App",
    description:
      "A comprehensive mobile gift management platform built with Flutter, enabling users to create and share wish lists for special occasions. Features include real-time gift pledging, offline-first architecture with SQLite, and cloud synchronization via Firebase. The app supports multi-user interactions where friends and family can view and pledge gifts, with secure authentication and cross-device data syncing for seamless gift-giving coordination.",
    stack: [
      { name: "Flutter", icon: <FaFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "SQLite", icon: <GrMysql /> },
    ],
    image: "/assets/work/hedieaty.avif",
    live: "",
    github: "https://github.com/seif32/flutter-gift-management",
  },

  {
    num: "05",
    category: "fullstack",
    title: "Roomify Hotel Management System",
    description:
      "A comprehensive hotel management platform featuring an internal management app for hotel staff. Built with modern React.js frontend and Supabase backend-as-a-service, the system provides real-time room availability, booking management, guest profiles, and automated staff workflows. Features include seamless data synchronization between platforms, and scalable architecture designed to grow from boutique hotels to larger properties.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Styled Components", icon: <SiStyledcomponents /> },
    ],
    image: "/assets/work/roomify.avif",
    live: "",
    github: "https://github.com/seif32/react-hotel-system",
  },

  {
    num: "06",
    category: "Frontend + UI/UX",
    title: "",
    description: "Soon",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "React Query", icon: <SiReactquery /> },
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
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
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

              {project.github !== "" && project.live !== "" && (
                <div className="border border-white/20"></div>
              )}
              <div className="flex items-center gap-4 ">
                {project.live !== "" && (
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
                )}
                {project.github !== "" && (
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
                )}
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
                    <div className="w-[460px] h-[460px]">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain w-full h-full"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkerSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0  bottom-0 z-20 w-full justify-between w-max justify-none "
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
