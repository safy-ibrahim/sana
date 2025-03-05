

import React from "react";

function ProductCard({ img, title, description, weights, index }) {
  return (
    <>
      <div className=" relative bg-[#FEF9F2] text-primary border border-primary rounded-3xl p-6 w-[400px] shadow-md transition-all duration-300 group hover:bg-primary hover:text-white hover:shadow-2xl">
        {index === 0 && (
          <button className="absolute top-4 left-4 bg-primary text-white transition-all duration-300 group-hover:bg-white group-hover:text-primary px-6 py-2 rounded-3xl ">
            NEW
          </button>
        )}
        <div className="mx-auto flex justify-center items-center overflow-hidden">
          <img
            src={img}
            alt="Sweet Ricotta Cheese"
            className="block object-cover ml-[-50px] mt-[-70px]"
          />
        </div>

        <h2 className=" font-extrabold text-lg text-center mt-3">{title}</h2>

        <div className="border-b border-dashed border-[#A94536] my-6  transition-all duration-300 group-hover:border-white"></div>

        <p className=" my-4 text-sm flex items-center justify-between w-full">
          <img
            src='/images/bal.svg' 
            alt=""
            className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />
          <span className="font-bold ml-2">weight</span>
          {weights.map((weight, index) => (
            <span key={index} className="px-2">
              {weight}
            </span>
          ))}
        </p>

        <p className="] text-sm mt-2">{description}</p>

        <div className="mt-4 flex justify-center">
          <a  href="https://wa.me/966555410916"
            target="_blank"
            rel="noopener noreferrer" className="bg-primary text-white  px-9 py-1 rounded-2xl flex items-center gap-3 text-lg transition-all duration-300  group-hover:bg-white group-hover:text-primary">
            <span className=" text-sm font-semibold">CONTACT US</span>
            <div className=" p-1 rounded-full">
              <img src='/images/watslogo.svg'  className="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
