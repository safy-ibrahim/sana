import React from "react";
import Slider from "react-slick";


function ImgGallary() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000,

    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <>
      <div className="m-0 p-0 h-auto overflow-hidden">
        <Slider {...settings} className="mb-0 ">
          <div className="px-2 flex items-center w-[70%] h-full">
            <img
              src='/images/imgS.webp' 
              alt="Image 1"
              className="w-full h-full min-h-[300px] lg:max-h-[650px] max-h-[500px] md:max-h-[400px] sm:max-h-[250px]  object-cover aspect-[16/9]"
            />
          </div>
          <div className="px-2 w-[70%] h-full">
            <img
              src='/images/imgS2.webp'
              alt="Image 2"
              className=" w-full h-full min-h-[300px] lg:max-h-[650px] max-h-[500px] md:max-h-[400px] sm:max-h-[250px]  object-cover aspect-[16/9]"
            />
          </div>
          <div className="px-2 w-[70%] h-full">
            <img
              src='/images/imgS4.webp'
              alt="Image 2"
              className="w-full h-full min-h-[300px] lg:max-h-[650px] max-h-[500px] md:max-h-[400px] sm:max-h-[250px]  object-cover aspect-[16/9]"
            />
          </div>
          <div className="px-2 w-[70%] h-full">
            <img
              src='/images/imgS3.webp'
              alt="Image 3"
              className="w-full h-full min-h-[300px] lg:max-h-[650px] max-h-[500px] md:max-h-[400px] sm:max-h-[250px]  object-cover aspect-[16/9]"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ImgGallary;
