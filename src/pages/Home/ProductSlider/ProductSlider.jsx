


import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ProductSlider = () => {
  const sliderRef = useRef(null);
  const products = [
    { id: 1, name: "Stracciatella Cheese", img: '/images/pro1.webp' },
    { id: 2, name: "Stracciatella Cheese", img: '/images/pro2.webp'  },
    { id: 3, name: "Burrata", img: '/images/pro3.webp'  },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden;
        }
      `}</style>

      <div className="w-full max-w-screen-lg mx-auto overflow-hidden border-b-2 border-primary px-2">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-6">
     
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-3xl md:text-4xl text-primary leading-[40px] md:leading-[50px] font-semibold">
              Explore Our Products
            </h2>
            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="p-2 text-primary hover:bg-gray-300 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="p-2 text-primary hover:bg-gray-300 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full overflow-hidden">
            <Slider ref={sliderRef} {...settings} className="w-full">
              {products.map((product) => (
                <div key={product.id} className="p-2 flex justify-center">
                  <div className="p-2 text-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="mx-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto object-contain"
                    />
                    <p className="text-primary font-semibold mt-2 text-sm md:text-base">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
