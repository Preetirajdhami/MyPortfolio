"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Blockchain Voting System",
      image: "/images/quickVote.png",
      sourceCode: "https://github.com/Preetirajdhami/BlockchainVoting",
      liveDemo: "https://quickvote-blockchain.vercel.app/",
      tags: ["React", "Blockchain", "Node.js", "MongoDB", "Web3"],
      featured: true
    },
    {
      id: 2,
      title: "BlueFoxHoster",
      image: "/images/bluefox.png",
      sourceCode: "https://github.com/Preetirajdhami/bluefoxHoster",
      liveDemo: "https://bluefoxhoster.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "API"],
      featured: true
    },
    {
      id: 3,
      title: "Preeti Arts",
      image: "/images/arts.png",
      sourceCode: "https://github.com/Preetirajdhami/artPortfolio",
      liveDemo: "https://preetiarts.vercel.app/",
      tags: ["React", "CSS3", "JavaScript", "Framer Motion"],
      featured: true
    },
    {
      id: 4,
      title: "Makalu Everest Hospital",
      image: "/images/makalu.png",
      
      liveDemo: "https://stocknep.com/",
      tags: ["Next.js", "Database", "Healthcare", "Management", "Responsive"],
      featured: false
    },
    {
      id: 5,
      title: "Gridify",
      image: "/images/gridify.png",
      sourceCode: "https://github.com/Preetirajdhami/GridMaker",
      liveDemo: "https://gridify-henna.vercel.app",
      tags: ["CSS Grid", "JavaScript", "Next.js"],
      featured: false
    },
    {
      id: 6,
      title: "TripNest",
      image: "/images/tripnest.png",
      sourceCode: "https://github.com/ManojScripts-dot/TripNest",
      liveDemo: "https://project5.demo",
      tags: ["dotnet", "mysql"],
      featured: false
    },
    {
      id: 7,
      title: "Purwanchal School",
      image: "/images/project5.jpg",
      sourceCode: "https://github.com/Preetirajdhami/project5",
      liveDemo: "https://project5.demo",
      tags: [ "Tailwind", "React", "Dashboard", ],
      featured: false
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base to-orange-50">
      <Navbar />
      
      {/* Hero Section with Featured Projects */}
      <section className="pt-32 pb-8 px-8 xl:px-40 relative overflow-hidden">
        {/* Background blur elements */}
        <div className="hidden md:block absolute top-10 right-[-4rem] w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 z-0" />
        <div className="hidden md:block absolute bottom-[-2rem] left-[-4rem] w-72 h-72 bg-orange-300 rounded-full blur-[120px] opacity-20 z-0" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-textColor mb-4">
              All <span className="text-primary">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          {/* Featured Projects Section - Moved inside hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={320}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-textColor mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
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
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold text-sm"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-16 px-8 xl:px-40 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-10 z-0" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
              Other Projects
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
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
                    width={400}
                    height={240}
                    className="w-full h-56 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-textColor mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-semibold"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 text-sm font-semibold"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 xl:px-40 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-orange-500 text-white p-12 rounded-2xl relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <button 
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            onClick={() => {
              // Navigate to home page and scroll to contact section
              window.location.href = "/#contact";
            }}
          >
            Get In Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;