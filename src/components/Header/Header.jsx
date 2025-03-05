import React from "react";

import {  FaChevronDown, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

import { ImPhone } from "react-icons/im";
const Header = () => {
  return (
    <div className="bg-primary fixed top-0 left-0 z-20 w-full h-[40px] text-white p-3 flex justify-between items-center text-sm px-4 md:px-10">
      <div className="flex items-center gap-6">
     <div className="flex gap-x-1"> <ImPhone size={16} /><span className=" font-semibold">+966555410916</span></div>

        <div className="flex items-center gap-2 cursor-pointer">
        <CiGlobe size={18}/>
          <span>EN</span>
          <FaChevronDown size={18} />
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/company/sana-food-industries-company/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/sanacheeses/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@sanacheeses?_t=ZS-8tUpZRASj33&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={20} />
        </a>
      </div>
    </div>
  );
};

export default Header;




