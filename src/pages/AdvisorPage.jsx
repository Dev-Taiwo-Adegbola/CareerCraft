import React, { useState } from "react";
import { Bot, Compass } from "lucide-react";
import styled from "styled-components";
import { getCareerAdvice } from "../../API/apis";
import d from "../assets/bot.svg";
const AiResponse = styled.div`
  overflow-y: auto;
  & li {
    display: block;
    margin-block: 15px;
  }

  & p {
    margin-block: 30px;
  }
`;

export const BotAnimation = styled.div`
  & > :first-child {
    animation: first0 0.3s linear infinite alternate;
    @keyframes first0 {
      from {
        color: green;
      }

      to {
        color: #f37474;
      }
    }
  }

  & > :nth-child(2) {
    animation: first0 0.3s 1s linear infinite alternate;
    @keyframes first0 {
      from {
        color: green;
      }

      to {
        color: #f37474;
      }
    }
  }

  & > :nth-child(3) {
    animation: first0 0.3s 1.5s linear infinite alternate;
    @keyframes first0 {
      from {
        color: green;
      }

      to {
        color: #f37474;
      }
    }
  }
`;

const AdvisorPage = () => {
  const [skills, setSkills] = useState([]);
  const [interest, setInterest] = useState([]);
  const [educationalLevel, setEducationalLevel] = useState("");
  const [preferredIndustries, setPreferredIndustries] = useState("");

  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let inputs = {
      skills: skills,
      interest: interest,
      educationalLevel: educationalLevel,
      preferredIndustries: preferredIndustries,
    };
    try {
      setLoading(true);
      const result = await getCareerAdvice(inputs);
      setAdvice(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="flex gap-10 items-center">
        <div className="px-2 flex flex-col gap-y-5 mt-10 md:w-[500px] mx-auto ">
          <div className="lg:hidden flex items-center mt-5 gap-x-5">
            <Compass
              className=" bg-blue-500 text-text p-3 rounded-2xl"
              size={60}
              color="#f8fafc"
            />
            <h2 className="text-2xl font-[poppins] font-bold text-text">
              Career Path Advisor
            </h2>
          </div>
          <p className="text-text  text-[15px] ">
            where do you belong? Let AI help you find the right career based on
            your unique strengehs and interests.
          </p>

          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-10"
          >
            <div>
              <label
                className="text-md text-text font-bold font-[inter]"
                htmlFor=""
              >
                Skills
              </label>
              <input
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
                placeholder="e.g. marketing, healthcare"
                type="text"
                className="w-full h-11 text-text pl-4 rounded border border-bordercolor"
              />
            </div>
            <div>
              <label
                className="text-md text-text font-bold font-[inter]"
                htmlFor=""
              >
                Interests
              </label>
              <input
                onChange={(e) => setInterest(e.target.value)}
                value={interest}
                placeholder="e.g. technology, finance"
                type="text"
                className="w-full h-11 text-text pl-4 rounded border border-bordercolor"
              />
            </div>

            <div>
              <label
                className="text-md text-text font-bold font-[inter]"
                htmlFor=""
              >
                Educational Level
              </label>
              <select
                onChange={(e) => setEducationalLevel(e.target.value)}
                value={educationalLevel}
                placeholder="e.g. marketing, healthcare"
                className="w-full h-11 text-text pl-4 rounded border border-bordercolor"
              ></select>
            </div>
            <div>
              <label
                className="text-md text-text font-bold font-[inter]"
                htmlFor=""
              >
                Preferred Industries
              </label>
              <input
                onChange={(e) => setPreferredIndustries(e.target.value)}
                value={preferredIndustries}
                placeholder="e.g. marketing, healthcare"
                type="text"
                className="w-full h-11 pl-4 text-text rounded border border-bordercolor"
              />
            </div>
            <button className="w-full h-13 text-text rounded bg-blue-500 border-bordercolor">
              Find My Path
            </button>
          </form>
          <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
            <Bot size={38} />
            <Bot size={38} />
            <Bot size={38} />
          </BotAnimation>
        </div>
        <div className=" hidden lg:flex flex-col grow -mt-8 h-[80vh] max-w-[60%] overflow-y-auto  ">
          <div className="flex items-center gap-x-5 border-b-1 pb-3">
            <Compass
              className=" bg-blue-500 text-text p-3 rounded-2xl"
              size={60}
              color="#f8fafc"
            />
            <h2 className="text-2xl font-[poppins] font-bold text-text">
              Career Path Advisor
            </h2>
          </div>
        <div className="hidden   lg:grid bg-background   border-bordercolor h-[60vh]    lg:max-w-[full]   place-items-center">
          
          {loading === true ? (
            <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
              <Bot size={28} />

              <Bot size={28} />
              <Bot size={28} />
            </BotAnimation>
          ) : advice === "" ? (
            <p className="text-2xl text-text ">
              Your Career Path Advice will Show here!{" "}
            </p>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-text text-center ">
                Here are your Career Suggestions
              </h2>
              <AiResponse
                className="text-md text-text "
                dangerouslySetInnerHTML={{ __html: advice }}
              />
              {/* {" "}
              {advice}
            </p> */}
            </div>
          )}
        </div>
        </div>
      </main>
      <div className=" pt-6 pb-3 -mx-6 md:-mx-10 text-center text-xs text-slate-100  bg-slate-900">
        © {new Date().getFullYear()} CareerCraft. All rights reserved.
      </div>
    </>
  );
};

export default AdvisorPage;
