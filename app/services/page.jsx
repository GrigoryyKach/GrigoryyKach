"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'HTML/CSS/JavaScript Layout',
    desc: 'I create adaptive web pages using HTML5, CSS3 and JavaScript. I also use the BEM methodology, and the SASS preprocessor.',
    href: "/work",
  },
  {
    num: '02',
    title: 'React.js/Next.js Development',
    desc: 'Using React.js or Next.js and TypeScript, as well as various libraries like Tailwind.css I create adaptive web applications.',
    href: "/work",
  },
  {
    num: '03',
    title: 'Vue.js/Nuxt.js Development',
    desc: 'Using Vue.js or Nuxt.js, as well as various libraries like Tailwind.css I create adaptive web applications.',
    href: "/work",
  },
  {
    num: '04',
    title: 'React Native Development',
    desc: 'Developing cross-platform applications with React Native, focusing on performance, and seamless functionality.',
    href: "/work",
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2
                  className="text-[25px] lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>

                {/* desc */}
                <p
                  className="text-white/60"
                >
                  {service.desc}
                </p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
