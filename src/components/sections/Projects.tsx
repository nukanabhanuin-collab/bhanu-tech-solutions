
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Project One",
    category: "Website Development",
    description: "A creative digital solution designed to deliver a smooth and engaging user experience.",
    gradient: "from-blue-900 to-blue-500",
    tag: "WEB DESIGN",
  },
  {
    number: "02",
    title: "Project Two",
    category: "Business Website",
    description: "A modern online platform built with a focus on design, performance, and usability.",
    gradient: "from-teal-900 to-cyan-500",
    tag: "DEVELOPMENT",
  },
  {
    number: "03",
    title: "Project Three",
    category: "Digital Solutions",
    description: "A professional digital experience created to strengthen an online presence.",
    gradient: "from-indigo-900 to-purple-500",
    tag: "DIGITAL",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="work" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Our Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#173652] mt-4">
            Projects That
            <span className="text-blue-600"> Make an Impact</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Explore our digital projects where creativity meets technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.number}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-7 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute w-64 h-64 rounded-full border border-white/20 -right-20 -top-20" />
                <div className="absolute w-48 h-48 rounded-full border border-white/20 -right-10 -top-10" />

                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-white/80 text-sm font-semibold">
                    PROJECT {project.number}
                  </span>
                  <span className="text-xs tracking-wider text-white bg-white/20 px-3 py-2 rounded-full">
                    {project.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="text-white/60 text-xs tracking-widest mb-2">
                    BHANU TECH SOLUTIONS
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-[#173652] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-7 text-sm">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm">
                    Featured Project
                  </span>
                  <span className="text-blue-600 text-xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
