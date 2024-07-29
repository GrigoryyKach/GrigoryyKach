"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  desc: "Front-end developer with 1 year of experience in the IT field. I implement modern front-end technologies such as React to create interactive user interfaces. I can create responsive and cross-browser user interfaces. Ability to solve complex technical problems and make informed decisions under time constraints. I have the skills to communicate effectively with the team, which allows me to achieve my goals as efficiently as possible.",
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
      fieldName: "Experience",
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

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  desc: "Front-end developer with 1 year of experience in the IT field. I implement modern front-end technologies such as React to create interactive user interfaces. I can create responsive and cross-browser user interfaces. Ability to solve complex technical problems and make informed decisions under time constraints. I have the skills to communicate effectively with the team, which allows me to achieve my goals as efficiently as possible.",
  items: [
    {
      projects: "Landing Page",
      position: "Front-end Developer",
      duration: "2022",
    },
    {
      projects: "Landing Page",
      position: "Front-end Developer",
      duration: "2022",
    },
    {
      projects: "Todo App",
      position: "Front-end Developer",
      duration: "2024",
    },
    {
      projects: "Gadgets Online Store",
      position: "Front-end Developer",
      duration: "2024",
    },
  ]
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt voluptas ab, tempore inventore eveniet.",
  items: [
    {
      instituion: "Mate Acadamy",
      degree: "Front-end Developer",
      duration: "2024",
    },
    {
      instituion: "Hillel IT School",
      degree: "Front-end Developer",
      duration: "2022-2023",
    },
    {
      instituion: "Odesa National Music Academy",
      degree: "Faculty of Piano Theory",
      duration: "2021-2022",
    },
  ]
};

// skills data
const skills = {
  title: "My skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt voluptas ab, tempore inventore eveniet.",
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
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full"
            >
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
