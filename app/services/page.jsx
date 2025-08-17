"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build modern, responsive websites using React, Next.js, and server-side rendering. From concept to deployment, I create fast, scalable web applications that perform beautifully.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design user interfaces with clear navigation and functionality, focusing on data dependencies and user flow. Using tools like Figma and modern design principles for optimal user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "I create cross-platform mobile applications using React Native and modern frameworks. Responsive design that works seamlessly across iOS and Android devices.",
    href: "/services/mobile-development",
  },
  {
    num: "04",
    title: "WordPress Designer",
    description:
      "I design and customize WordPress sites using page builders and themes. Professional websites that are easy to manage, SEO-friendly, and visually stunning.",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex-1 flex flex-col justify-center gap-5 "
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
