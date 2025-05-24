import React from "react";
import logo1 from "../assets/careercraft.webp";
import logo2 from "../assets/careercraftW.webp";
import { Link } from "react-router";

const Logo = ({ type, menuToggle }) => {
  return (
     <Link to={"/"}>
      <div className="cursor-pointer size-fit flex items-center gap-2 relative z-10">
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
     </Link>
  );
};

export default Logo;
