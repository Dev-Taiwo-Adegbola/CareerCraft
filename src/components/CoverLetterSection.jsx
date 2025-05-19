import React from "react";

const CoverLetterSection = () => {
  return (
    <section className="font-[inter] mt-20 flex justify-between flex-col lg:flex-row gap-x-10 pr-4 max-md:w-full md:pr-10 pl-5 l:pl-10 ">
      <div className="w-full lg:w-[45%] ">
        <h2 className="font-[poppins] text-[#001b45] text-2xl md:text-3xl mb-4  font-bold">
          Where Do You Belong?
        </h2>
        <div>
          <h3 className="mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 ml-4">
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              Python
            </span>
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              Data Analysis
            </span>
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              Problem Solving
            </span>
          </div>
        </div>
        <div>
          <h3 className="my-3 ">Interests</h3>
          <div className="flex flex-wrap gap-2 ml-4">
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              Coding
            </span>
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              ------
            </span>
            <span className="py-1.5 px-3.5  bg-[#001b45]/20 rounded">
              ------------
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3>Your CV</h3>
          <div className="flex flex-wrap gap-2 ml-4 my-4">
            <span className="h-1.5 w-[80%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[75%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[95%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[90%] bg-[#001b45]/20 rounded"></span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-[#001b45] w-fit rounded text-[14px] font-medium text-gray-50 mr-3">
              {" "}
              Generate CoverLetter
            </button>
            <button className="px-4 py-2 bg-[#001b45] w-fit rounded text-[14px] font-medium text-gray-50">
              Reveiw CV
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <div className="">
          <h2 className="font-[poppins] text-[#001b45] text-xl md:text-2xl my-4  font-semibold">
            Let's Build Your CV & CoverLetter{" "}
          </h2>
          <p>
            Craft a standout CV and Cover letter to boost your job prospects and
            career success
          </p>
        </div>
        <div className="">
          <h3 className="font-[poppins] text-[#001b45] text-l md:text-xl mt-4  font-semibold">
            {" "}
            CoverLetter{" "}
          </h3>
          <div className="flex flex-wrap gap-2  my-4">
            <span className="h-1.5 w-[80%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[75%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[95%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[90%] bg-[#001b45]/20 rounded"></span>
          </div>
        </div>
        <div className="">
          <h3 className="font-[poppins] text-[#001b45] text-l md:text-xl mt-4  font-semibold">
            {" "}
            CV Feedback{" "}
          </h3>
          <div className="flex flex-wrap gap-2  my-4">
            <span className="h-1.5 w-[80%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[75%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[95%] bg-[#001b45]/20 rounded"></span>
            <span className="h-1.5 w-[90%] bg-[#001b45]/20 rounded"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetterSection;
