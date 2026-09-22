"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaFigma, FaDocker } from "react-icons/fa";
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
  SiMongodb,
  SiPostgresql,
  SiShadcnui,
  SiMui,
  SiChakraui
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  desc: "My name Hryhorii, I'm Full-stack developer with 2 years of experience in the IT field. I implement modern front-end technologies such as React to create interactive user interfaces.",
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
      fieldValue: "3+ years"
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

// experience data
const experiance = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Frontend roles focused on building and maintaining production React and web applications.",
  items: [
    {
      company: "WeMyIT",
      position: "React Developer",
      duration: "Jul 2025 - Sep 2026"
    },
    {
      company: "NDA",
      position: "Front-end Developer",
      duration: "Jan 2024 - Apr 2025"
    },
  ]
}

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Practical, mentor-led courses focused on modern frontend and full-stack development.",
  items: [
    {
      institution: "Mate Academy",
      degree: "Full-stack Developer",
      duration: "Mar 2024 - Jul 2024"
    },
    {
      institution: "Udemy",
      degree: "React Developer",
      duration: "Oct 2023 - Jan 2023"
    },
    {
      institution: "Hillel IT School",
      degree: "Front-end Developer",
      duration: "Aug 2022 - Nov 2022"
    },
  ]
}

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
    // {
    //   icon: <FaVuejs />,
    //   name: "vue.js",
    // },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    // {
    //   icon: <SiNuxtdotjs />,
    //   name: "nuxt.js",
    // },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiChakraui />,
      name: "chakra ui",
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
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
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
      icon: <SiShadcnui />,
      name: "Shadcn/ui",
    },
    {
      icon: <SiMui />,
      name: "Material/ui",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full"
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experiance.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experiance.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experiance.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent
              value="education"
              className="w-full"
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
