import React from "react";

function ValuesCard({ image, title, text }) {
  return (
    <>
      <div className="flex flex-col items-start space-y-4">
        <img src={image} alt={title} className="w-10 h-10" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </>
  );
}

export default ValuesCard;
