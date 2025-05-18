"use client";

import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Blockchain Voting System",
      image: "/images/quickVoteImg.png",
      sourceCode: "https://github.com/Preetirajdhami/BlockchainVoting",
      liveDemo: "https://blockchain-voting-system.demo",
    },
    {
      id: 2,
      title: "BlueFoxHoster",
      image: "/images/BluefoxhosterImg.png",
      sourceCode: "https://github.com/Preetirajdhami/bluefoxHoster",
      liveDemo: "https://quickvote-beta.vercel.app/",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/images/project3.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project3",
      liveDemo: "https://project3.demo",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/images/project4.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project4",
      liveDemo: "https://project4.demo",
    },
    {
      id: 5,
      title: "Project 5",
      image: "/images/project5.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project5",
      liveDemo: "https://project5.demo",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideNext = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="project" className="relative py-16 px-8 xl:px-40 bg-bgTheme overflow-hidden">
      {/* Top-left blurred circle */}
      <div className=" hidden md:block absolute -left-0 -top-24 w-72 h-72 bg-primary rounded-full blur-[150px] opacity-40 z-0" />

      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-primary mb-8 relative z-10"
      >
        My Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden z-10"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="min-w-full md:min-w-[33.33%] 2xl:min-w-[25%] p-4"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={208}
                    className="w-full p-5 h-52 transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                  />
                </div>
                <motion.div variants={itemVariants} className="pb-4 px-4">
                  <h3 className="text-xl font-semibold text-textColor mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-row gap-2">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-2 w-auto gap-1 bg-primary text-white px-2 py-2 rounded-md hover:bg-ButtonC transition-colors duration-200"
                    >
                      <FaGithub className="text-xl" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-2 w-auto gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-ButtonC transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4 z-10 relative">
        <button
          onClick={slidePrev}
          className={`px-4 py-2 bg-primary text-white rounded-lg shadow ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-opacity-80"
          }`}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={slideNext}
          className={`px-4 py-2 bg-primary text-white rounded-lg shadow ${
            currentIndex >= projects.length - 3
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-opacity-80"
          }`}
          disabled={currentIndex >= projects.length - 3}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
