import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-slate-300 p-6 -mx-6 mt-10 md:-mx-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        <div>
          <Logo type="dark" />
          <p className="text-sm mt-2">
            Empowering career growth with smart tools.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-1 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career Advisor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Job Tracker
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Connect</h3>
          <ul className="space-y-1 mt-2">
            <li>
              <a href="#" className="hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-xs">
        © {new Date().getFullYear()} CareerCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
