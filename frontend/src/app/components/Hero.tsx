import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse sm:flex-row items-center sm:justify-between py-32 sm:pt-20 md:py-64 xl:py-80 px-8 lg:px-16 xl:px-36 2xl:px-56 relative"
      style={{
        background:
          "linear-gradient(to bottom, rgba(216,221,255,1) 14.4%, rgba(234,238,255,1) 90.8%)",
      }}
    >
      <div className="w-full px-4 md:w-1/2 text-left md:px-12">
        <h1 className="text-4xl font-display md:text-6xl font-semibold text-textColor mb-4">
          Hi, I&apos;m <span className="text-DarkButton font-bold">Preeti</span>
        </h1>
        <p className="text-xl text-textColor mb-6">
          I&apos;m a <span className="font-bold">versatile and creative Developer</span>, creating seamless frontend and backend solutions for high-performance web applications.
        </p>
        <div className="inline-flex w-auto flex-col sm:flex-row gap-4">
          <a
            href="#project"
            className="w-auto items-center justify-center text-lg py-2 px-6 text-white bg-DarkButton font-bold rounded-lg transition duration-300 hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="resume"
            className="flex items-center justify-center text-lg border-2 border-DarkButton py-2 px-6 text-DarkButton font-bold rounded-lg hover:bg-ButtonC hover:text-white transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 justify-center items-center sm:justify-end mb-8 sm:mb-0">
      <Image
        src="/images/preeti.png"
        alt="Preeti Rajdhami"
        width={256} 
        height={256} 
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg relative"
      />
    </div>
    </div>
  );
};

export default Hero;
