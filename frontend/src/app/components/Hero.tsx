
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 lg:px-16 xl:px-36 2xl:px-56 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div> */}

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="animate-fadeIn space-y-6">
            <h1 className="text-4xl font-display md:text-6xl font-bold text-textColor mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-primary font-bold ">Preeti</span>
            </h1>
            <p className="text-xl text-textColor mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I&apos;m a <span className="font-bold">Full-Stack Developer</span>{" "}
              passionate about crafting
              <span className="text-textColor"> elegant solutions</span> to
              complex problems. Specializing in building{" "}
              <span className="font-semibold">modern web applications</span>{" "}
              that combine beautiful interfaces with robust functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#project"
                className="w-auto items-center justify-center text-lg py-3 px-8 text-white bg-primary font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 flex gap-2"
              >
                <span>View Projects</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1_TyPzoeiQBYT-XwJmiPvPjC0B7D8tFiM/view?usp=sharing"
                className="flex items-center justify-center text-lg border-2 border-primary py-3 px-8 text-textColor font-bold rounded-lg  transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 gap-2"
              >
                <span>Resume</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-4  rounded-full opacity-75 blur-lg animate-pulse"></div>
            <Image
              src="/images/preeti.jpg"
              alt="Preeti Rajdhami"
              width={400}
              height={400}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
