import React from "react";
import { Bot, User2 } from "lucide-react";

const InterviewChatSection = () => {
  return (
    <section className="font-[inter] mt-20 flex  flex-col     pr-4  md:pr-10 pl-5 l:pl-10 ">
      <h2 className="font-[poppins] text-[#001b45] text-2xl md:text-3xl mb-4  font-bold">
        Practice Makes Powerful
      </h2>
      <div className=" flex  flex-col lg:flex-row gap-x-2 justify-between">
        <div className="flex flex-col bg-[#001b45] rounded-2xl p-2 md:p-12 pt-8  gap-3">
          <div className="p-2  max-w-[70%]  bg-gray-100 rounded-2xl">
            <span className="flex gap-x-1 items-center font-semibold">
              <Bot className="p-1 bg-[#001b45]/30 rounded-full" /> CareerCraft
              AI
            </span>
            <p className="p-1 mt-1 ml-5 text-[12px]">Tell Me about yourself!</p>
          </div>

          <div className="p-2  w-[70%]  self-end bg-gray-100 rounded-2xl">
            <span className="flex flex-row-reverse gap-x-1 items-center font-semibold">
              <User2 className="p-1 bg-[#001b45]/30 rounded-full" /> CareerCraft
              User
            </span>
            <p className="p-1 text-right text-[12px] mt-1 mr-5">
              I'm a recent marketing graduate With a passion for digital
              marketing and Experience
            </p>
          </div>

          <div className="p-2 max-w-[70%]  bg-gray-100 rounded-2xl">
            <span className="flex gap-x-1 items-center font-semibold">
              <Bot className="p-1 bg-[#001b45]/30 rounded-full" /> CareerCraft
              AI
            </span>
            <p className="p-1 text-[12px] mt-1 ml-5">
              Good start: Aim to highlight your unique strengths in this answer
            </p>
          </div>
        </div>
        <div className=" mt-5  w-full lg:w-[52%]">
          <h3 className="font-[poppins] text-[#001b45] text-l md:text-xl my-4  font-semibold">
            Stay On Top of Every Appplication
          </h3>
          <table className="text-[11px]  w-full ">
            <thead className=" h-10 bg-[#001b45] text-gray-50">
              <th>Job Title</th>
              <th>Date Applied</th>
              <th>Stage</th>
            </thead>
            <tbody>
              <tr className=" h-10">
                <td>Software Engineer</td>
                <td>Apr 8, 2025</td>
                <td>Interviewing</td>
              </tr>
              <tr className=" h-10">
                <td>Marketing Coordinator</td>
                <td>Mar 24, 2025</td>
                <td>Applied</td>
              </tr>
              <tr className=" h-10">
                <td>Data Analyst</td>
                <td>Mar 10, 2025</td>
                <td>Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InterviewChatSection;
