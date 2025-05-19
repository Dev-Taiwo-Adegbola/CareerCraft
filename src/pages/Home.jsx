import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CoverLetterSection from "../components/CoverLetterSection";
import InterviewChatSection from "../components/InterviewChatSection";
import Footer from "../components/Footer";

const Home = ({ themeToggle, onThemeToggle }) => {
  return (
    <div>
      {/* <NavigationBar onThemeToggle={onThemeToggle} themeToggle={themeToggle} /> */}
      <Hero />
      <Features />
      <CoverLetterSection />
      <InterviewChatSection />
      <Footer themeToggle={themeToggle} />
    </div>
  );
};

export default Home;
