import React from "react";

function Maps() {
  return (
    <>
      <div className=" pt-14 pb-4 bg-[#FEF9F2]">
        <div className=" container mx-auto px-4 ">
        <h2 className="text-3xl font-bold uppercase mb-6 text-primary">Contact Us</h2>
          <div className="w-full md:w-[100%] mx-auto mt-10 bg-white min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4566.594062976981!2d46.92530000000001!3d24.4998632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa34ad529a261%3A0x6468b0d530df4dff!2z2LTYsdmD2Kkg2LPYp9mG2Kcg2YTZhNi12YbYp9i52KfYqiDYp9mE2LrYsNin2KbZitipIChTQU5BIEZPT0QgSU5EVVNUUklFUyBDT01QQU5ZKQ!5e1!3m2!1sar!2seg!4v1738229182469!5m2!1sar!2seg"
              height="450"
              width="100%"
              className="w-full h-full min-h-[450px] aspect-video border-0 "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maps;
