"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const education = {
  icon: "",
  title: "Education & Certifications",
  description:
    "Dual degree in computer engineering plus professional certifications in modern web development.",
  items: [
    // Your degree first (spans 2 columns)
    {
      institution:
        "Ain Shams University (Cairo) & University of East London (UK)",
      degree: "BSc Computer Engineering & Software Systems (Dual Degree)",
      duration: "2020 – 2025",
    },
    // Key completed courses
    {
      institution: "Udemy - Jonas Schmedtmann",
      degree: "The Ultimate React Course 2025: React, Next.js",
      duration: "2024 (47% Complete)",
    },
    {
      institution: "Udemy - Jonas Schmedtmann",
      degree: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      duration: "2024 (47% Complete)",
    },
    {
      institution: "Udemy - Jonas Schmedtmann",
      degree: "The Complete JavaScript Course 2025: From Zero to Expert",
      duration: "2024 (48% Complete)",
    },
    {
      institution: "Udemy - Joe Natoli",
      degree: "DESIGN RULES: Principles + Practices for Great UI Design",
      duration: "2024 (Completed)",
    },
    {
      institution: "Udemy - Andrei Neagoie",
      degree: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
      duration: "2024 (56% Complete)",
    },
    {
      institution: "Udemy - Maximilian Schwarzmüller",
      degree: "Clean Code Principles & Practices",
      duration: "2024 (Completed)",
    },
    {
      institution: "Udemy - Maximilian Schwarzmüller",
      degree: "Flutter & Dart - The Complete Guide [2025 Edition]",
      duration: "2024 (53% Complete)",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Frontend developer focused on user experience, clean code, and responsive React applications.",
  items: [
    {
      company: " Sobek IT (Pty) Ltd",
      position: "Frontend developer (Part-time)",
      duration: " 2025 – Present",
    },
    {
      company: " Digital Agency",
      position: " WordPress Designer",
      duration: "2024",
    },
    {
      company: " Next Academy",
      position: " Mobile Developer (Training)",
      duration: "2022",
    },
  ],
};

const about = {
  title: "About me",
  description:
    "I create digital experiences that make complex interactions feel effortlessly simple. With a focus on clear navigation and functionality, I build responsive interfaces using modern technologies like React, Next.js, and Tailwind CSS.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Seif Mohamed",
    },
    {
      fieldName: "Phone",
      fieldValue: "010 99 727 988",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresh",
    },
    {
      fieldName: "Email",
      fieldValue: "seifmohamed321432@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};

const skills = {
  icon: "",
  title: "My Skills",
  description:
    "Technologies and tools I use to create modern, responsive web applications with clean code and great user experience.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8 px-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className={"flex flex-col xl:flex-row gap-[60px]"}
        >
          <TabsList
            className={
              "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
            }
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className={"h-[400px]"}>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className={"h-[400px]"}>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      const isFaculty = index === 0;

                      return (
                        <li
                          key={index}
                          className={`
                ${
                  isFaculty
                    ? "lg:col-span-2 bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent/50 shadow-lg shadow-accent/20"
                    : "bg-[#232329] hover:bg-[#2a2a30] transition-colors"
                }
                py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
              `}
                        >
                          <span
                            className={`
                ${isFaculty ? "text-accent font-bold text-lg" : "text-accent"}
              `}
                          >
                            {item.duration}
                          </span>
                          <h3
                            className={`
                text-xl max-w-[260px] min-h-[60px] text-center lg:text-left
                ${
                  isFaculty ? "text-white font-bold text-2xl max-w-[400px]" : ""
                }
              `}
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span
                              className={`
                  w-[6px] h-[6px] rounded-full
                  ${isFaculty ? "bg-accent w-[8px] h-[8px]" : "bg-accent"}
                `}
                            ></span>
                            <p
                              className={`
                  ${isFaculty ? "text-accent font-medium" : "text-white/60 "}
                `}
                            >
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className={"w-full"}>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className={"w-full text-center xl:text-left"}
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
