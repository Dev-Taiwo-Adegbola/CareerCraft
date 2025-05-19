import React, { useState } from "react";
import { Compass, Bot, Send, User2 } from "lucide-react";
import { BotAnimation } from "./AdvisorPage";
import { Link } from "react-router";

export const ChatPageForm = ({
  onsetJobRole,
  jobRole,
  onsetMyName,
  myName,
}) => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="px-2 flex flex-col gap-y-5 mt-10 md:w-[500px] mx-auto ">
        <div className="flex items-center gap-x-5">
          <Bot
            className=" bg-blue-500 text-text p-3 rounded-2xl"
            size={60}
            color="#f8fafc"
          />
          <h2 className="text-2xl font-[poppins] font-bold text-text">
            Interview Prep
          </h2>
        </div>
        <p className="text-text  text-[15px] ">
          Let AI be your Interviewer! Never go to an Interview unprepared,
          CareerCraft Interview Prep makes you Interview ready for Job roles .
        </p>

        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4"
        >
          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Your FullName:
            </label>
            <input
              onChange={(e) => onsetMyName(e.target.value)}
              value={myName}
              placeholder="e.g. Taiwo Adegbola enoch"
              type="text"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            />
          </div>

          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Role/Position Interveiwing for:
            </label>
            <input
              onChange={(e) => onsetJobRole(e.target.value)}
              value={jobRole}
              placeholder="e.g. Software Engineer, Data Analyst"
              type="text"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            />
          </div>

          <Link to="/interview_prep/chat">
            <button className="w-full h-15 text-text rounded bg-blue-500 border-bordercolor">
              Start Interview
            </button>
          </Link>
        </form>
        <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
          <Bot size={48} />
          <Bot size={48} />
          <Bot size={48} />
        </BotAnimation>
      </div>
      <div className="relative bottom-0 inset-x-0 pt-6 pb-3 -mx-6 md:-mx-10 text-center text-xs text-slate-100 dark:bg-slate-900">
        © {new Date().getFullYear()} CareerCraft. All rights reserved.
      </div>
    </div>
  );
};

const ChatPage = ({ jobRole, myName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [startChat, setStartChat] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const newMessages = [...messages, { sender: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    const SYSTEM_PROMPT = `You are a professional interviewer. Conduct a mock interview for the role of a [${jobRole}]. Ask questions one at a time, wait for responses, and provide constructive feedback. my name is ${myName}`;
    try {
      console.log("data");
      setLoading(true);
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta-llama/llama-3.3-8b-instruct:free",
            messages: [
              {
                role: "system",
                content: SYSTEM_PROMPT,
              },
              ...newMessages.map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.content,
              })),
            ],
          }),
        }
      );

      const data = await response.json();
      const aiReply = data.choices[0].message.content;
      console.log(data);

      setMessages([...newMessages, { sender: "ai", content: aiReply }]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function startInterview(e) {
    e.preventDefault();
    setStartChat(!startChat);
    sendMessage();
  }

  return (
    <div className="lg:w-[60%] mx-auto mt-10">
      <div className="bg-white dark:bg-gray-900 h-[70vh] rounded-xl p-6 shadow">
        <div className="space-y-4 max-h-[400px]  overflow-y-auto flex flex-col">
          {messages.map((msg) => (
            <div
              className={`text-sm p-3 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-blue-100 dark:bg-blue-900 self-end w-fit"
                  : "bg-gray-200 dark:bg-gray-700  w-fit"
              }`}
            >
              {msg.sender === "user" ? (
                <span className="border-l-4 px-2 rounded flex flex-row gap-x-1 items-center mb-1 bg-slate-900/30 py-1 w-fit  font-semibold">
                  <User2 className="p-1 bg-[#001b45]/30 rounded-full" />{" "}
                  CareerCraft User
                </span>
              ) : (
                <span className="border-l-4 px-2 rounded flex gap-x-1 items-center  mb-1 bg-slate-900/30 py-1 w-fit font-semibold">
                  <Bot className="p-1 bg-[#001b45]/30 rounded-full" />{" "}
                  CareerCraft AI
                </span>
              )}
              {msg.content}
            </div>
          ))}
        </div>
         
      </div>
      <div className="mt-4 flex items-center gap-2 w-[90%] md:w-[60%] mx-auto">
        {startChat ? (
          <>
            <textarea
              // rows={2}
              placeholder="send message here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 outline-0  border rounded-full h-fit resize-none px-3 py-2 dark:bg-gray-800 dark:text-white place"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-4  rounded-full"
            >
              <Send />
            </button>
          </>
        ) : (
          <button
            onClick={startInterview}
            className="bg-blue-600 text-white px-4 py-2 mx-auto  rounded-full"
          >
            start Interview
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
