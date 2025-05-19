import React from "react";
import { Compass, Bot, Activity, FileText } from "lucide-react";
import { Link } from "react-router";

const Feature = ({ name, icon, link }) => {
  return (
    <Link to={link}>
      <button className="flex flex-col items-center gap-y-3 bg-[#001b45]/20 rounded-2xl w-[200px] p-4 ">
        <span className="text-wrap inline-block ">{icon} </span>
        <span className="text-wrap inline-block w-[100px]">{name} </span>
      </button>
    </Link>
  );
};

const Features = () => {
  return (
    <div className="flex flex-wrap gap-10  justify-center mt-20">
      <Feature
        link="/advisor"
        name="Career Path Advisor"
        icon={<Compass className="animate-pulse" color="#001b45" size={48} />}
      />
      <Feature
        link="/ai_generator"
        name="AI CV & Letter Generator"
        icon={<FileText className="animate-pulse" color="#001b45" size={48} />}
      />
      <Feature
        link="/interview_prep"
        name="Interview Prep"
        icon={<Bot className="animate-pulse" color="#001b45" size={48} />}
      />
      <Feature
        // link="/interview_prep"
        name="Application Tracker"
        icon={<Activity className="animate-pulse" color="#001b45" size={48} />}
      />
    </div>
  );
};

export default Features;
