import React from 'react';
import { FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import HtmlIcon from './Html'
import TailwindIcon from './Tailwind'
import CIcon from './C'
import MongodbIcon from './Mongodb'
import NextjsIcon from './Nextjs'
import PostmanIcon from './Postman'
import RIcon from './React'


const About = () => {
  return (
    <div id="about">
      {/* About Section */}
      <section  className="py-2 px-8 bg-bgTheme ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-textColor ">About Me</h2>
          <p className="text-lg text-textColor mb-6">
            Greetings! I&apos;m Preeti Rajdhami a dedicated <span className="font-bold ">software developer</span>  located in Nepal! With expertise in TypeScript, JavaScript, Node.js, React.js, and Next.js, I specialize in crafting seamless, dynamic, and scalable solutions across both frontend and backend development. Whether building intuitive user interfaces or designing robust server-side architectures, I excel at bringing ideas to life through code.</p>
          <p className="text-lg text-textColor mb-6">
          I also work with C++ and Java, focusing on solving complex challenges in data structures and algorithms. Problem-solving is at the core of my work, and I enjoy finding efficient, elegant solutions to every task.
          </p>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-2 px-8 bg-bgTheme">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-textColor">Tools and Technology</h2>
          <p className="text-lg text-textColor mb-12">
          I have been enhancing my skills and gaining experience with various technologies and tools to build efficient and scalable web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center  shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <HtmlIcon className="text-4xl p-5 text-slate-100 mb-2" />
              <span className="text-lg text-slate-700">Html</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <CIcon className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg text-slate-700">C++</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-3 py-2 rounded-md">
              <FaJs className="text-5xl text-yellow-500 mb-1" />
              <span className="text-lg text-slate-700">JavaScript</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-4 py-2 rounded-md">
              <TailwindIcon className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg text-slate-700">Tailwind</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <MongodbIcon className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg text-slate-700">Mongodb</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <RIcon Name="text-4xl text-purple-600 mb-2" />
              <span className="text-lg text-slate-700">React.js</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <FaNodeJs className="text-4xl text-green-500 mb-2" />
              <span className="text-lg text-slate-700">Node.js</span>
            </div>

            <div className="flex flex-col items-centerv shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <NextjsIcon className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg text-slate-700">Next.js</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-7 py-2 rounded-md">
              <FaGitAlt className="text-4xl text-orange-600 mb-2" />
              <span className="text-lg text-slate-700">Git</span>
            </div>

            <div className="flex flex-col items-center shadow-ButtonC shadow-md px-5 py-2 rounded-md">
              <PostmanIcon className="text-4xl text-purple-600 mb-2" />
              <span className="text-lg text-slate-700">Postman</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
