"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

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
      liveDemo: "https://bluefoxhoster.vercel.app/",
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
    <div id="project" className="py-16 px-8 xl:px-40 bg-bgTheme">
      <h2 className="text-4xl font-bold text-center text-textColor mb-8">My Projects</h2>
      <div className="relative overflow-hidden">

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full md:min-w-[33.33%] 2xl:min-w-[25%] p-4"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image */}
                <div className="rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full p-5 h-52 transition-transform duration-300 ease-in-out hover:scale-105  object-cover"
                  /> </div>
                {/* Content */}
                <div className="pb-4 px-4">
                  <h3 className="text-xl font-semibold text-textColor mb-2">{project.title}</h3>
                  <div className="flex flex-row gap-2">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-2 w-auto gap-1 bg-DarkButton text-white px-2 py-2 rounded-md hover:bg-ButtonC transition-colors duration-200"
                    >
                      <FaGithub className="text-xl" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-2 w-auto gap-2 bg-DarkButton text-white px-4 py-2 rounded-md hover:bg-ButtonC transition-colors duration-200"
                    >
                      <span>Visit Website</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={slidePrev}
          className={`px-4 py-2 bg-DarkButton text-white rounded-lg shadow ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
            }`}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={slideNext}
          className={`px-4 py-2 bg-DarkButton text-white rounded-lg shadow ${currentIndex >= projects.length - 3
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
