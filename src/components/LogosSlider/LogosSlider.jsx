import Slider from "react-slick";

const LogosSlider = () => {
  
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
  };

  return (
    <div className="w-full py-6 border-b-2 border-primary">
      <div className="max-w-6xl mx-auto">
        <div className="w-3/4 sm:w-1/2 mx-auto">
          <Slider {...settings} className="gap-4">
            <div className="flex justify-center items-center px-2">
              <img
                src='/images/isologo.png' 
                alt="ISO"
                className="h-[60px] sm:h-[80px] w-auto object-contain mx-auto"
              />
            </div>
            <div className="flex justify-center items-center px-2">
              <img
               src='/images/haccplogo.png'
                alt="HACCP"
                className="h-[60px] sm:h-[80px] w-auto object-contain mx-auto"
              />
            </div>
            <div className="flex justify-center items-center px-2">
              <img
               src='/images/saudilogo.png' 
                 
                alt="Saudi Made"
                className="h-[60px] sm:h-[80px] w-auto object-contain mx-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;
