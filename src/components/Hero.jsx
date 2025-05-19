import React from "react";
import { Bot, BookAIcon } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className=" pr-4 max-md:w-full md:pr-10 pl-5 l:pl-10 pt-13 flex flex-col md:flex-row lg:px-[5%]  gap-y-10 items-center md:justify-between">
      <div className="flex flex-col gap-y-5 max-md:w-full ">
        <h1 className="font-[poppins] text-4xl  md:text-6xl text-text  font-bold">
          Craft Your Future <br />
          with AI
        </h1>
        <p className="font-[inter] text-xl text-text font-medium">
          Plan. Apply. Improve. Land the job.
        </p>
        <Link to="/advisor">
          <button className="cursor-pointer bg-background w-[180px] rounded-xl text-[16px] font-medium text-text py-3">
            Get Started
          </button>
        </Link>
      </div>
      <div className="max-md:w-full text-text bg-[#001b45]/20 w-[280px] p-5 py-8 rounded-2xl flex flex-col gap-4">
        <h2 className="font-[poppins] text-2xl  font-semiboldbold">
          Data Analyst
        </h2>
        <p>This career align well with your skill and interests.</p>
        <p> Learn more about this role</p>
      </div>
      <Bot className="absolute -z-1 left-[60%] top-[120px] text-blue-100 -rotatee-45 animate-pulse size-[110px] md:size-[150px]" />
      {/* <BookAIcon className="absolute -z-1 left-[10%] top-[400px] text-blue-100 -rotate-45 animate-pulse size-[70px] md:size-[150px]" />
      <Bot className="absolute -z-1 left-[60%] top-[300px] text-blue-100 -rotate-45 animate-pulse size-[70px] md:size-[150px]" /> */}
    </div>
  );
};

export default Hero;
