"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaJs, FaGitAlt, FaCode, FaLightbulb, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import HtmlIcon from "./Html";
import TailwindIcon from "./Tailwind";
import CIcon from "./C";
import MongodbIcon from "./Mongodb";
import NextjsIcon from "./Nextjs";
import PostmanIcon from "./Postman";
import RIcon from "./React";

const About = () => {
  const skills = [
    { icon: <HtmlIcon className="text-4xl p-5 text-slate-100 mb-2" />, name: "Html" },
    { icon: <CIcon className="text-4xl text-blue-500 mb-2" />, name: "C++" },
    { icon: <FaJs className="text-5xl text-yellow-500 mb-1" />, name: "JavaScript" },
    { icon: <TailwindIcon className="text-4xl text-blue-500 mb-2" />, name: "Tailwind" },
    { icon: <MongodbIcon className="text-4xl text-blue-500 mb-2" />, name: "MongoDB" },
    { icon: <RIcon className="text-4xl text-purple-600 mb-2" />, name: "React.js" },
    { icon: <FaNodeJs className="text-4xl text-green-500 mb-2" />, name: "Node.js" },
    { icon: <NextjsIcon className="text-4xl text-blue-500 mb-2" />, name: "Next.js" },
    { icon: <FaGitAlt className="text-4xl text-orange-600 mb-2" />, name: "Git" },
    { icon: <PostmanIcon className="text-4xl text-purple-600 mb-2" />, name: "Postman" }
  ];

  const experiences = [
    {
      id: 1,
      duration: "02 Sep – 05 Nov 2024",
      title: "Frontend Developer Intern – Blue Fox Pvt. Ltd.",
      description: "Contributed to building responsive React interfaces and implemented reusable components using Tailwind CSS for real-time applications.",
      side: "left"
    },
    {
      id: 2,
      duration: "10 Feb – 10 May 2025",
      title: "Frontend Developer Intern – Youth IT",
      description: "Developed websites using React, Vite, and Tailwind CSS, integrating RESTful APIs built with Django.",
      side: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div id="about" className="relative overflow-hidden bg-gradient-to-br from-bgTheme to-orange-50">
      {/* Enhanced Blurred Gradient Circles */}
      <div className="hidden md:block absolute top-[-4rem] right-[-4rem] w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 z-0" />
      <div className="hidden md:block absolute bottom-[-4rem] left-[-4rem] w-72 h-72 bg-primary rounded-full blur-[120px] opacity-20 z-0" />
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300 rounded-full blur-[100px] opacity-10 z-0" />

      {/* About Section */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-textColor mb-6">My Journey</h3>
              <p className="text-lg text-textColor leading-relaxed">
                Greetings! I&apos;m Preeti Rajdhami a dedicated{" "}
                <span className="font-bold text-primary">software developer</span> located in
                Nepal! With expertise in TypeScript, JavaScript, Node.js, React.js,
                and Next.js, I specialize in crafting seamless, dynamic, and
                scalable solutions across both frontend and backend development.
              </p>
              <p className="text-lg text-textColor leading-relaxed">
                Whether building intuitive user interfaces or designing robust
                server-side architectures, I excel at bringing ideas to life through
                code.
              </p>
              <p className="text-lg text-textColor leading-relaxed">
                I also work with C++ and Java, focusing on solving complex
                challenges in data structures and algorithms. Problem-solving is at
                the core of my work, and I enjoy finding efficient, elegant
                solutions to every task.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-textColor mb-6">What I Do</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor">Frontend Development</h4>
                    <p className="text-gray-600">React, Next.js, Tailwind CSS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <FaNodeJs className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor">Backend Development</h4>
                    <p className="text-gray-600">Node.js, MongoDB, API Design</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor">Problem Solving</h4>
                    <p className="text-gray-600">Data Structures, Algorithms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    exp.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${exp.side === 'right' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FaBriefcase className="text-primary text-lg" />
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <FaCalendarAlt className="text-sm" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-textColor mb-3">{exp.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden w-4 h-4 bg-primary rounded-full my-4"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Tools and Technology
            </h2>
            <p className="text-lg text-textColor mb-12 max-w-2xl mx-auto">
              I have been enhancing my skills and gaining experience with various
              technologies and tools to build efficient and scalable web
              applications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm shadow-lg p-6 rounded-xl transition-all duration-200"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {skill.icon}
                  </div>
                  <span className="text-lg text-textColor font-semibold">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;