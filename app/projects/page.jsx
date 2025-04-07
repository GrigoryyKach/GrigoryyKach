"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// components imports
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "GameAtlas",
    desc: "Website wiki about videogames",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "GraphQL" }],
    image: "/assets/work/thumb5.png",
    miniImage: "/assets/work/thumb5-mini.png",
    demo: "https://gameatlas.vercel.app/",
    github: "https://github.com/GrigoryyKach/gameatlas",
  },
  {
    num: "02",
    title: "Nothing Phone Landing page",
    desc: "Responsive landing page",
    stack: [{ name: "Html 5" }, { name: "SASS" }, { name: "Javascript" }, { name: "BEM" }],
    image: "/assets/work/thumb1.png",
    miniImage: "/assets/work/thumb1-mini.png",
    demo: "https://grigoryykach.github.io/nothing-landing/",
    github: "https://github.com/GrigoryyKach/nothing-landing?tab=readme-ov-file",
  },
  {
    num: "03",
    title: "hLegal Landing page",
    desc: "Responsive landing page",
    stack: [{ name: "Html 5" }, { name: "SASS" }, { name: "Javascript" }, { name: "BEM" }],
    image: "/assets/work/thumb2.png",
    miniImage: "/assets/work/thumb2-mini.png",
    demo: "https://grigoryykach.github.io/hlegal-landing/",
    github: "https://github.com/GrigoryyKach/hlegal-landing",
  },
  {
    num: "04",
    title: "Todo App",
    desc: "An easy-to-use, intuitive application for managing everyday tasks",
    stack: [{ name: "React.js" }, { name: "Typescript" }, { name: "Javascript" }, { name: "Rest API" }],
    image: "/assets/work/thumb3.png",
    miniImage: "/assets/work/thumb3-mini.png",
    demo: "https://grigoryykach.github.io/todo-app/",
    github: "https://github.com/GrigoryyKach/todo-app",
  },
  {
    num: "05",
    title: "Gadgets Online Store",
    desc: "A project designed to function as an e-commerce platform for mobile phones and other gadgets",
    stack: [{ name: "React.js" }, { name: "Typescript" }, { name: "Javascript" }, { name: "SCSS" }, { name: "etc." }],
    image: "/assets/work/thumb4.png",
    miniImage: "/assets/work/thumb4-mini.png",
    demo: "https://fs-mar24-codecrafters.github.io/react_phone-catalog/#/",
    github: "https://github.com/FS-MAR24-CodeCrafters/react_phone-catalog",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    // get current slide
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent text-outline"
              >
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project desc */}
              <p className="text-white/60">
                {project.desc}
              </p>

              {/* stack */}
              <ul className="grid grid-cols-2 md:flex gap-4">
                {project.stack.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {idx !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20" />

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* project link */}
                <Link href={project.demo}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
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
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperInstance}
            >
              {projects.map((project, idx) => {
                return (
                  <SwiperSlide
                    key={idx}
                    className="w-full"
                  >
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={isSmallScreen ? project.miniImage : project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slider buttons */}
              {swiperInstance && (
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all disabled:bg-[#3276ad] disabled:cursor-auto"
                  swiper={swiperInstance}
                />
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;
