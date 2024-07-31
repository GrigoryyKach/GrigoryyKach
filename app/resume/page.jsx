"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSass,
  SiTypescript,
  SiBem,
  SiNpm,
  SiGit,
  SiVisualstudiocode,
  SiWebpack,
  SiSkillshare
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  desc: "My name Hryhorii, I'm 20 years old. I have been passionate about technology, computers and video games since my childhood. I'm also passionate about music - I play the drums in my free time.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hryhorii Kachurovskyy"
    },
    {
      fieldName: "Phone",
      fieldValue: "+380 95 863 21 99"
    },
    {
      fieldName: "IT Experience",
      fieldValue: "2 years"
    },
    {
      fieldName: "Telegram",
      fieldValue: "@hrigoriikachurovskyi"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ukrainian"
    },
    {
      fieldName: "Email",
      fieldValue: "hryhorii.k.dev@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Ukrainian"
    },
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  desc: "This is where I gained my knowledge, experience and met some wonderful people.",
  items: [
    {
      instituion: "Mate Acadamy",
      degree: "Full-stack Developer",
      duration: "2024",
    },
    {
      instituion: "Udemy",
      degree: "React Developer",
      duration: "2023-2024",
    },
    {
      instituion: "Hillel IT School",
      degree: "Front-end Developer",
      duration: "2022-2023",
    },
    {
      instituion: "Odesa  Music Academy",
      degree: "Faculty of Piano",
      duration: "2021-2022",
    },
  ]
};

// skills data
const skills = {
  title: "My skills",
  desc: "I use these skills to create responsive and effective web applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "nuxt.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiSass />,
      name: "sass",
    },
    {
      icon: <SiBem />,
      name: "BEM",
    },
    {
      icon: <SiNpm />,
      name: "NPM",
    },
    {
      icon: <SiWebpack />,
      name: "Webpack",
    },
    {
      icon: <SiGit />,
      name: "GIT",
    },
    {
      icon: <SiVisualstudiocode />,
      name: "VS code",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent
              value="education"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex items-center justify-center xl:justify-start gap-2">
                  <h3 className="text-4xl font-bold">
                    {education.title}
                  </h3>
                  <img
                    src={education.icon}
                    alt="icon"
                    className="size-8"
                  />
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                            <p className="text-white/60">{item.instituion}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent
              value="skills"
              className="w-full h-full"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ScrollArea className="h-[430px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, idx) => {
                      return (
                        <li
                          key={idx}
                        >
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
                      )
                    })}
                  </ul>
                  <ScrollBar className="pl-[-100px]" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
