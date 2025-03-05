import React from "react";
import ValuesCard from "../ValuesCard/ValuesCard";

function Values() {
  const cardData = [
    {
      image: "/images/value1.png",
      title: "Efficiency",
      text: "Optimizing processes to ensure maximum productivity and minimal waste.",
    },
    {
      image: "/images/value2.png",
      title: "Safety",
      text: "Prioritizing the well-being of our employees, customers, and products.",
    },
    {
      image: "/images/v6.png",
      title: "Mastery",
      text: "Striving for excellence and expertise in every aspect of our work.",
    },
    {
      image: "/images/v5.png",
      title: "Health",
      text: "Promoting health and wellness through our products and practices.",
    },
    {
      image: "/images/v4.png",
      title: "Responsibility",
      text: "Reacting promptly and effectively to the needs of our customers and market demands.",
    },
  ];

  return (
    <>
      <section className="px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch relative bg-[#FCF8F3] overflow-hidden">
        {/* ✅ القسم الأزرق */}
        <div className="relative flex justify-center overflow-visible py-20 h-full">
          <div className="relative z-10">
            <img
              src="/images/va.webp"
              alt="Sana's Products"
              className="w-full max-w-md sm:max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* ✅ صورة الفقاعة اليسرى */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/4 scale-125 w-32">
            <img src="/images/f0.png" alt="Left Image" className="w-full" />
          </div>

          {/* ✅ صورة الديكور على اليمين */}
          <div className="absolute right-[-110px] top-5 transform -translate-y-1/4 -translate-x-3/4">
            <img src="/images/va.svg" alt="Right Image" className="w-24" />
          </div>

          {/* ✅ صورة بين القسمين */}
          {/* <div className="absolute bottom-[190px] left-1/2 transform -translate-x-1/2 translate-y-1/2 scale-125">
            <img src="/images/b0.webp" alt="Middle Image" className="w-full" />
          </div> */}
          <div className="absolute bottom-[210px] lg:bottom-[210px] md:bottom-[180px] left-[355px] hidden sm:block md:left-[400px] lg:left-[335px] transform translate-y-1/2 -translate-x-1/2 w-[100%]  md:w-[75%] lg:w-[100%] scale-100  md:scale-90 lg:scale-100">
            <img src="/images/b0.webp" alt="Bottom Image" className="w-full" />
          </div>

          {/* ✅ صورة القلب */}
          <div className="absolute bottom-[72px] left-[50%] transform translate-y-1/2 -translate-x-1/2 h-14 w-6 sm:w-6 sm:h-10 md:w-12 md:h-12">
            <img src="/images/heart.svg" alt="Heart Image" className="w-full" />
          </div>
        </div>
        {/* ✅ صورة الزينة العلوية */}
        <div className="absolute top-[-10px] right-[-70px] z-0">
          <img
            src="/images/t0.png"
            alt="Top Right Decoration"
            className="w-full h-full"
          />
        </div>
        {/* ✅ القسم الأخضر */}
        <div className="space-y-6 flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-extrabold text-primary text-center lg:text-left mb-9 z-10">
            Sana’s Values
          </h2>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-6 flex-1">
              {cardData.slice(0, 3).map((item, index) => (
                <ValuesCard key={index} {...item} />
              ))}
            </div>

            <div className="flex flex-col gap-6 flex-1 justify-center">
              {cardData.slice(3).map((item, index) => (
                <ValuesCard key={index + 3} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Values;
