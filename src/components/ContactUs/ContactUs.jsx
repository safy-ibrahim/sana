import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <div className="bg-primary text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <img src='/images/lef.svg'  alt="" className="hidden lg:block" />
            <div className="w-[85%]">
              <h2 className="text-3xl font-bold uppercase mb-6">Contact Us</h2>
              <div className="bg-white rounded-full flex flex-1 relative items-center p-2 w-full">
                <div className="flex-1 flex items-center bg-white rounded-full px-4 py-3">
                  <input
                    type="text"
                    placeholder="Add Your Inquiry"
                    className="w-full bg-transparent outline-none text-secondary placeholder-secondary p-3"
                  />
                  <div
                    className="absolute left-8 right-24 top-2/3 transform -translate-y-1/2 h-px 
              hidden md:block lg:w-[67%] bg-secondary"
                  ></div>
                </div>

                <a
                  href="https://wa.me/966555410916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white 
              w-[120px] h-[45px] sm:w-[140px] sm:h-[50px] md:w-[183px] md:h-[61px] 
              px-6 sm:px-8 md:px-10 
              rounded-full flex items-center gap-3 
              text-sm sm:text-base md:text-lg text-center"
                >
                  <div className="p-1 sm:p-2 rounded-full">
                    <img src='/images/watslogo.svg'  className="w-9 sm:w-10 md:w-auto" />
                  </div>
                  <span>Send</span>
                </a>
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center md:justify-between items-center mt-6 text-lg w-full gap-4">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-xl" />
                  <span>+966555410916</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl" />
                  <span>info@sanafood.sa</span>
                </div>
                <div className="flex items-center gap-3 md:w-full lg:w-auto md:justify-center">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>
            </div>
            <img src='/images/rig.svg' alt="" className="hidden lg:block" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
