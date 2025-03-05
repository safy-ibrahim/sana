

import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

function MainSec() {
  const products = [
    {
      img: '/images/pro3.webp' ,
      title: "Stracciatella Cheese",
      description:
        "Stracciatella cheese is the creamy, stringy filling inside the burrata cheese, made from shredded mozzarella and cream",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
    {
      img: '/images/pro2.webp' ,
      title: "Burrata Cheese",
      description:
        "Burrata cheese is made from an outer shell of mozzarella filled with a soft, creamy mixture of stracciatella and cream",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
    {
      img: '/images/pro1.webp' ,
      title: "Sweet Ricotta Cheese",
      description:
        "Sweet Ricotta Cream is a smooth, sweetened cheese with a velvety texture and a creamy, delicate flavor.",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
    {
      img: '/images/pro2.webp' ,
      title: "Burrata Cheese",
      description:
        "Burrata cheese is made from an outer shell of mozzarella filled with a soft, creamy mixture of stracciatella and cream",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
    {
      img: '/images/pro1.webp' ,
      title: "Sweet Ricotta Cheese",
      description:
        "Sweet Ricotta Cream is a smooth, sweetened cheese with a velvety texture and a creamy, delicate flavor.",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
    {
      img: '/images/pro2.webp' ,
      title: "Burrata Cheese",
      description:
        "Burrata cheese is made from an outer shell of mozzarella filled with a soft, creamy mixture of stracciatella and cream",
      weights: ["200G", "500G", "1000G", "6000G"],
    },
  ];

  return (
    <>
      <div className=" container mx-auto px-8 py-4">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Explore Our Products
        </h1>
        <div className="flex items-center justify-center min-h-screen py-10">
          <div className="w-full max-w-5xl">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-28">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} index={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSec;




