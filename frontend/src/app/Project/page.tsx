"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Blockchain Voting System",
      image: "/images/quickVoteImg.png",
      sourceCode: "https://github.com/Preetirajdhami/BlockchainVoting",
      liveDemo: "https://blockchain-voting-system.demo",
      description: "A secure voting system using blockchain technology",
    },
    {
      id: 2,
      title: "BlueFoxHoster",
      image: "/images/BluefoxhosterImg.png",
      sourceCode: "https://github.com/Preetirajdhami/bluefoxHoster",
      liveDemo: "https://quickvote-beta.vercel.app/",
      description: "A web hosting platform with user-friendly interface",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/images/preetiarts.png",
      sourceCode: "https://github.com/Preetirajdhami/project3",
      liveDemo: "https://project3.demo",
      description: "Description of project 3",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/images/project4.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project4",
      liveDemo: "https://project4.demo",
      description: "Description of project 4",
    },
    {
      id: 5,
      title: "Project 5",
      image: "/images/project5.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project5",
      liveDemo: "https://project5.demo",
      description: "Description of project 5",
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
    hidden: { y: 50, opacity: 0 },
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
   <div>
    <Navbar />
     <div className="py-16 px-8 xl:px-40 bg-base">
      
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-primary mb-12"
      >
        All Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={208}
                className="w-full p-5 h-52 transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
              />
            </div>
            <div className="pb-4 px-4">
              <h3 className="text-xl font-semibold text-textColor mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
   </div>
  );
};

export default ProjectsPage;