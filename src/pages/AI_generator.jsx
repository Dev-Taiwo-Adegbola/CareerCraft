// import { FileText } from "lucide-react";
// import React from "react";
// import { Link } from "react-router";

export const AI_generatorForm = () => {
  return (
    <main className="flex gap-10 items-center">
      <div className="px-2 flex flex-col gap-y-5 mt-10 md:w-[500px] mx-auto ">
        <div className="flex items-center gap-x-5">
          <FileText
            className=" bg-blue-500 text-text p-3 rounded-2xl"
            size={60}
            color="#f8fafc"
          />
          <h2 className="text-2xl font-[poppins] font-bold text-text">
            AI Resume generator
          </h2>
        </div>
        <p className="text-text  text-[15px] ">
          where do you belong? Let AI help you find the right career based on
          your unique strengehs and interests.
        </p>

        <form
          action="#"
          //   onSubmit={handleSubmit}
          className="flex flex-col gap-y-4"
        >
          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Fullname:
            </label>
            <input
              //   onChange={(e) => setSkills(e.target.value)}
              //   value={skills}
              placeholder="e.g. Taiwo Adegbola Enoch"
              type="text"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            />
          </div>
          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Job Title
            </label>
            <input
              //   onChange={(e) => setInterest(e.target.value)}
              //   value={interest}
              placeholder="e.g. Frontend Developer, Data Engineer"
              type="text"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            />
          </div>

          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Company Name
            </label>
            <input
              //   onChange={(e) => setInterest(e.target.value)}
              //   value={interest}
              placeholder="e.g. Meta, Google"
              type="text"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            />
          </div>

          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Short About Me / Experience Summary
            </label>
            <textarea
              rows={4}
              //   onChange={(e) => setInterest(e.target.value)}
              //   value={interest}
              placeholder="e.g. Describe yourself here: Years of Experience, skills etc"
              type="text"
              className=" resize-none w-full   text-text pl-4 rounded border border-bordercolor"
            />
          </div>

          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Writing Style
            </label>
            <select
              //   onChange={(e) => setEducationalLevel(e.target.value)}
              //   value={educationalLevel}
              placeholder="e.g. marketing, healthcare"
              className="w-full h-15 text-text pl-4 rounded border border-bordercolor"
            >
              <option value="">Formal </option>
              <option value="">Enthusiastic</option>
              <option value="">Friendly</option>
            </select>
          </div>
          <div>
            <label
              className="text-lg text-text font-bold font-[inter]"
              htmlFor=""
            >
              Preferred Industries
            </label>
            <input
              //   onChange={(e) => setPreferredIndustries(e.target.value)}
              //   value={preferredIndustries}
              placeholder="e.g. marketing, healthcare"
              type="text"
              className="w-full h-15 pl-4 text-text rounded border border-bordercolor"
            />
          </div>
          <button className="w-full h-15 text-text rounded bg-blue-500 border-bordercolor">
            Generate Cover letter
          </button>
        </form>
        {/* <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
      <Bot size={48} />
      <Bot size={48} />
      <Bot size={48} />
    </BotAnimation> */}
      </div>
      <div className="hidden lg:grid bg-background rounded-2xl border-bordercolor h-[60vh] grow lg:max-w-[50%]   place-items-center">
        {/* {loading === true ? (
      <BotAnimation className="flex gap-x-10 mx-auto my-10 animate-pulse">
        <Bot size={38} />

        <Bot size={38} />
        <Bot size={38} />
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

      </div>
    )} */}
      </div>
    </main>
  );
};

// const AI_generator = () => {
//   return (
//     <>
//       <div className=" text-center my-40  grid gap-y-6 place-items-center text-text  ">
//         <FileText color="#001b45" size={60} />
//         <h2 className="text-2xl font-bold  ">
//           Let's Build Your CV & CoverLetter
//         </h2>
//         <p className="font-semibold text-md ">
//           Craft a standout CV and Cover letter to boost your job prospects and
//           career success
//         </p>
//         <Link to="/ai_generator/generate">
//           <button className="text-gray-50 mt-8 px-4 py-2 h-[50px] rounded-lg bg-slate-900">
//             Generate CoverLetter
//           </button>
//         </Link>
//       </div>
//       <div className="absolute bottom-0 inset-x-0 pt-6 pb-3 -mx-6 md:-mx-10 text-center text-xs text-slate-100 dark:bg-slate-900">
//         © {new Date().getFullYear()} CareerCraft. All rights reserved.
//       </div>
//     </>
//   );
// };

// export default AI_generator;

// 📁 src/pages/CoverLetterGenerator.jsx
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const AI_generator = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [style, setStyle] = useState("Formal");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const letterRef = useRef(null);

  const generateLetter = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
              content:
                "You are a career assistant who writes professional cover letters.",
            },
            {
              role: "user",
              content: `Job Title: ${jobTitle}\nCompany: ${company}\nExperience: ${experience}\nStyle: ${style}`,
            },
          ],
        }),
      });
      const data = await res.json();
      setResult(data.choices[0].message.content);
    } catch (error) {
      console.error("Error generating letter:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!letterRef.current) return;
    html2pdf().from(letterRef.current).save("cover_letter.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Cover Letter Generator</h1>
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Job Title"
          className="p-2 border rounded"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          className="p-2 border rounded"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <textarea
          placeholder="Your Experience..."
          className="p-2 border rounded"
          rows={5}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Formal">Formal</option>
          <option value="Friendly">Friendly</option>
          <option value="Enthusiastic">Enthusiastic</option>
        </select>
        <button
          onClick={generateLetter}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Letter"}
        </button>
      </div>

      {result && (<>
        <h2 className="text-xl font-semibold mt-5 mb-2">Generated Cover Letter</h2>

        <div
          className="mt-8 bg-white dark:bg-slate-900 p-6 rounded shadow"
          ref={letterRef}
        >
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </div>
          <button
            onClick={downloadPDF}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
        </>
      )}
    </div>
  );
};

export default AI_generator;
