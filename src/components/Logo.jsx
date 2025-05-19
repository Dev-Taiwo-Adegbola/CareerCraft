import React from "react";
import logo1 from "../assets/careercraft.webp";
import logo2 from "../assets/careercraftW.webp";

const Logo = ({ type }) => {
  return (
    <div className="size-fit flex items-center gap-2">
      <img
        className="w-[60px]  "
        src={type === "light" ? logo1 : logo2}
        alt="CareerCraft Logo"
      />
      <h1
        className={`${
          type === "dark" ? "text-gray-50" : "text-[#001b45]"
        } font-[poppins] font-bold text-[1.15rem] md:text-[1.3rem] `}
      >
        CareerCraft
      </h1>
    </div>
  );
};

export default Logo;
