"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Blockchain Voting System",
      image: "/images/quickVote.png",
      sourceCode: "https://github.com/Preetirajdhami/BlockchainVoting",
      liveDemo: "https://quickvote-blockchain.vercel.app/",
      tags: ["React", "Solidity", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "TripNest",
      image: "/images/tripnest.png",
      sourceCode: "https://github.com/ManojScripts-dot/TripNest",
      liveDemo: "https://project5.demo",
      tags: ["React", "Travel", "API Integration"]
    },
    
    {
      id: 3,
      title: "Preeti Arts",
      image: "/images/arts.png",
      sourceCode: "https://github.com/Preetirajdhami/artPortfolio",
      liveDemo: "https://preetiarts.vercel.app/",
      tags: ["Next.js", "Tailwind", "Node.js", "Framer Motion"]
    },
    {
      id: 4,
      title: "Makalu Everest Hospital",
      image: "/images/makalu.png",
      sourceCode: "https://gridify-henna.vercel.app",
      liveDemo: "https://project4.demo",
      tags: ["Next.js", "Database", "Healthcare"]
    },
    {
      id: 5,
      title: "Gridify",
      image: "/images/gridify.png",
      sourceCode: "https://github.com/Preetirajdhami/GridMaker",
      liveDemo: "https://project5.demo",
      tags: ["CSS Grid", "JavaScript", "Responsive"]
    },
    {
      id: 6,
      title: "BlueFoxHoster",
      image: "/images/bluefox.png",
      sourceCode: "https://github.com/Preetirajdhami/bluefoxHoster",
      liveDemo: "https://bluefoxhoster.vercel.app/",
      tags: ["Next.js", "Tailwind", "TypeScript"]
    },
    
    
  ];

  const slideNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      id="project"
      className="relative py-20 px-8 xl:px-40 bg-gradient-to-br from-bgTheme to-orange-50 overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="hidden md:block absolute -left-20 top-1/4 w-72 h-72 bg-primary rounded-full blur-[150px] opacity-30 z-0" />
      <div className="hidden md:block absolute -right-20 bottom-1/4 w-96 h-96 bg-orange-300 rounded-full blur-[120px] opacity-20 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">My Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="min-w-full p-4">
                <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={280}
                      className="w-full h-64  object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-textColor mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={slidePrev}
            className={`p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-200 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"
            }`}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>
          
          <div className="flex space-x-2">
            {projects.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={slideNext}
            className={`p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-200 ${
              currentIndex >= projects.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"
            }`}
            disabled={currentIndex >= projects.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Desktop Grid - Show 3 projects */}
      <div className="hidden md:block relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={280}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-textColor mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/Project">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl">
              See More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;