import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { PiMapPinLineBold } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="py-10">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 w-2/3 mx-auto gap-6 space-y-8 md:space-y-0">
            <div className="w-full md:w-auto text-lef flex justify-center ">
              <div>
                <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
                <p className="flex items-center gap-4">
                  <LuPhone size={16} className="text-primary" /> +966555410916
                </p>
                <p className="flex items-center gap-4">
                  <MdMailOutline size={16} className="text-primary" />{" "}
                  info@sanafood.sa
                </p>
                <p className="flex items-center gap-4">
                  <PiMapPinLineBold size={16} className="text-primary" />{" "}
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>

            <div className="hidden md:block border-l-2 border-gray-300 h-32"></div>

            {/* Middle Logo */}
            <div className="w-full md:w-auto flex flex-col items-center">
              <img
                src='/images/fLogo.png'
                alt="Sana"
                className="h-[95px] w-[130px] md:h-[120px] md:w-[160px] mb-2 object-contain"
              />

              <div className="flex gap-3 text-primary mt-2">
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

            <div className="hidden md:block border-l-2 border-gray-300 h-32"></div>
            <div className="w-full md:w-auto text-center">
              <h3 className="font-semibold text-lg mb-3">Find Us</h3>
              <div className="flex justify-center gap-2">
                <img
                  src='/images/footer3.png'
                  alt=""
                  className="w-[50px] h-[50px] object-contain"
                />
                <img
                  src='/images/footer2.png'
                  alt=""
                  className="w-[50px] h-[50px] object-contain"
                />
                <img
                  src='/images/footer1.png'
                  alt=""
                  className="w-[50px] h-[50px] object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-sm mt-5 border-t border-[#D6C7BE] pt-3">
            Copyright Sana Food Industries Co
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
