import React from "react";
import { FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import HtmlIcon from "./Html";
import TailwindIcon from "./Tailwind";
import CIcon from "./C";
import MongodbIcon from "./Mongodb";
import NextjsIcon from "./Nextjs";
import PostmanIcon from "./Postman";
import RIcon from "./React";

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      {/* Blurred Circle on Top Right Corner */}
      <div className="hidden md:block absolute -right-0 -top-24 w-72 h-72 bg-primary rounded-full blur-[150px] opacity-40 z-0" />

      <div className="hidden md:block absolute -left-20 bottom-0 w-80 h-80 bg-primary rounded-full blur-[150px] opacity-40 z-0" />

      {/* About Section */}
      <section className="py-2 px-8 bg-bgTheme relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary ">About Me</h2>
          <p className="text-lg text-textColor mb-6">
            Greetings! I&apos;m Preeti Rajdhami a dedicated{" "}
            <span className="font-bold ">software developer</span> located in
            Nepal! With expertise in TypeScript, JavaScript, Node.js, React.js,
            and Next.js, I specialize in crafting seamless, dynamic, and
            scalable solutions across both frontend and backend development.
            Whether building intuitive user interfaces or designing robust
            server-side architectures, I excel at bringing ideas to life through
            code.
          </p>
          <p className="text-lg text-textColor mb-6">
            I also work with C++ and Java, focusing on solving complex
            challenges in data structures and algorithms. Problem-solving is at
            the core of my work, and I enjoy finding efficient, elegant
            solutions to every task.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-4 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">
            Tools and Technology
          </h2>
          <p className="text-base sm:text-lg text-textColor mb-8 sm:mb-12">
            I have been enhancing my skills and gaining experience with various
            technologies and tools to build efficient and scalable web
            applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* Tool Cards */}
            <div className="flex flex-col items-center shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <HtmlIcon className="text-3xl sm:text-4xl p-3  mb-2" />
              <span className="text-sm  text-textColor">Html</span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <CIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-textColor">C++</span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <FaJs className="text-4xl sm:text-5xl text-textColor mb-1" />
              <span className="text-sm text-textColor">
                JavaScript
              </span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <TailwindIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">
                Tailwind
              </span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <MongodbIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">
                MongoDB
              </span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <RIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">
                React.js
              </span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <FaNodeJs className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm text-slate-700">
                Node.js
              </span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <NextjsIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">
                Next.js
              </span>
            </div>

            <div className="flex flex-col items-center shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <FaGitAlt className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">Git</span>
            </div>

            <div className="flex flex-col items-center  shadow-md px-4 py-3 rounded-md w-[100px] sm:w-[120px]">
              <PostmanIcon className="text-3xl sm:text-4xl text-textColor mb-2" />
              <span className="text-sm  text-slate-700">
                Postman
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
