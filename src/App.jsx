import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdvisorPage from "./pages/AdvisorPage";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ChatPage, { ChatPageForm } from "./pages/ChatPage";
import AI_generator, { AI_generatorForm } from "./pages/AI_generator";

function sysTheme() {
  const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
  if (systemTheme) {
    return localStorage.getItem("theme") === "dark";
  } else return localStorage.getItem("theme") === "dark";
}

function App() {
  const [jobRole, setJobRole] = useState("");
  const [myName, setMyName] = useState("");
  const [themeToggle, setThemeToggle] = useState(() => sysTheme());

  useEffect(() => {
    const root = window.document.documentElement;

    if (themeToggle === true) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.toggle("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeToggle]);

  return (
    <>
      <Router>
        <NavigationBar
          onThemeToggle={() => setThemeToggle(!themeToggle)}
          themeToggle={themeToggle}
        />

        <Routes>
          <Route path="/" element={<Home themeToggle={themeToggle} />} />
          <Route path="/advisor" element={<AdvisorPage />} />
          <Route path="/ai_generator" element={<AI_generator />} />
          <Route path="/ai_generator/generate" element={<AI_generatorForm />} />
          <Route
            path="/interview_prep/chat"
            element={<ChatPage jobRole={jobRole} myName={myName} />}
          />
          <Route
            path="/interview_prep"
            element={
              <ChatPageForm
                jobRole={jobRole}
                onsetJobRole={setJobRole}
                myName={myName}
                onsetMyName={setMyName}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
