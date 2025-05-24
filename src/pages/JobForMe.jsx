import React, { useState, useEffect } from "react";
import { ArrowLeft, Bot, BriefcaseBusiness, Compass } from "lucide-react";
import styled from "styled-components";
import { getStatesFromApi, fetchJobs } from "../../API/apis";
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

const JobForMe = () => {
  const [jobTitle, setJobTitle] = useState();
  const [location, setLocation] = useState();
  const [states, setStates] = useState([]);
  const [learnmore, setLearnmore] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [index, setIndex] = useState(0);

  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState([]);

  async function getStates(params) {
    const nga_states = await getStatesFromApi();
    setStates(nga_states);
  }

  useEffect(() => {
    getStates();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMobileToggle(true);

    try {
      setLoading(true);
      const result = await fetchJobs(jobTitle, location);
      setAdvice(result);
      console.log(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="flex gap-10 items-center">
        <div className="px-2 flex flex-col gap-y-5 mt-10 md:w-[500px] mx-auto ">
          <div className="  flex items-center mt-5 gap-x-5">
            <BriefcaseBusiness
              className=" bg-blue-500 text-text p-3 rounded-2xl"
              size={60}
              color="#f8fafc"
            />
            <h2 className="text-2xl font-[poppins] font-bold text-text">
              Job for Me
            </h2>
          </div>
          <p className="text-text  text-[15px] ">
            where do you belong? Get the list of vacant roles across various
            fields and industries that align with your skill and interest .
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
                Job Title
              </label>
              <input
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
                placeholder="e.g. Cook, FrontEnd Developer"
                type="text"
                className="w-full h-11 text-text pl-4 rounded border border-bordercolor"
              />
            </div>

            <div>
              <label
                className="text-md text-text font-bold font-[inter]"
                htmlFor=""
              >
                Location
              </label>
              <select
                onChange={(e) => {
                  setLocation(e.target.value);
                  console.log(location);
                }}
                value={location}
                placeholder="e.g. marketing, healthcare"
                className="w-full h-11 text-text pl-4 rounded border border-bordercolor bg-background"
              >
                {states.map((element, i) => {
                  return <option key={i}>{element}</option>;
                })}
              </select>
            </div>

            <button className="w-full h-13 text-text rounded bg-blue-500 border-bordercolor">
              Find Job
            </button>
          </form>
          <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
            <Bot size={38} />
            <Bot size={38} />
            <Bot size={38} />
          </BotAnimation>
        </div>
        <div
          className={` ${
            mobileToggle &&
            "max-lg:absolute left-0 p-2 max-lg:block max-lg:bg-background max-lg:w-full   h-[80vh]"
          } hidden lg:flex flex-col grow -mt-8 h-[80vh] lg:max-w-[60%] overflow-y-auto  `}
        >
          <div className="flex items-center gap-x-10 border-b-1 pb-3">
            <button
              onClick={() => {
                setMobileToggle(false);
              }}
            >
              <ArrowLeft size={38} />
            </button>{" "}
            <h2 className=" text-2xl font-[poppins] font-bold text-center  text-text">
              Available Jobs
            </h2>
          </div>
          <div className="    lg:grid bg-background   border-bordercolor h-[60vh]    lg:max-w-[full]   place-items-center">
            {loading === true ? (
              <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
                <Bot size={28} />

                <Bot size={28} />
                <Bot size={28} />
              </BotAnimation>
            ) : advice == false ? (
              <p className="text-2xl text-text ">
                Available Jobs that matches your search will Show here!{" "}
              </p>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-5 text-text text-center ">
                  Here are your Career Suggestions
                </h2>
                <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
                  {advice.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className=" grow p-3 w-[260px]  shadow rounded-xl h-[250px]    bg-backgroundO/20 "
                      >
                        <h3 className="text-xl mb-2 text-text font-[poppins] font-bold ">
                          Job Title: {e.job_title}
                        </h3>
                        <p>{e.job_description.slice(0, 100)}...</p>
                        <p>Employer Name: {e.employer_name.slice(0, 100)}...</p>
                        <button
                          onClick={() => {
                            setLearnmore(true);
                            setIndex(i);
                          }}
                          className="mt-5 w-[100px] py-3 bg-backgroundO text-textO rounded"
                        >
                          Learn more
                        </button>
                      </div>
                    );
                  })}
                  {learnmore && (
                    <div
                      onClick={() => {
                        setLearnmore(false);
                      }}
                      className="absolute inset-0 backdrop-blur-2xl"
                    >
                      <div className="absolute p-4 top-[50%] bg-background rounded-xl shadow w-full lg:w-[60%] h-[65vh] left-[50%] -translate-[50%]">
                        <button
                          onClick={() => {
                            setLearnmore(false);
                          }}
                        >
                          <ArrowLeft size={38} />
                        </button>
                        <h3 className="text-xl mb-2 text-text font-[poppins] font-bold ">
                          Job Title: {advice[index].job_title}
                        </h3>
                        <p>{advice[index].job_description.slice(0, 500)}...</p>
                        <br />
                        <p>Employer Name: {advice[index].employer_name}...</p>
                        <a href={advice[index].job_apply_link} target="_blank">
                          <button
                            onClick={() => {
                              setLearnmore(true);
                              setIndex(i);
                            }}
                            className="mt-5 w-[100px] py-3 bg-backgroundO text-textO rounded"
                          >
                            Apply
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
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

export default JobForMe;
