import React from "react";

function MainHero() {
  return (
    <>
      <section
        className="relative w-full min-h-[400px] bg-cover bg-center flex items-center text-white"
        style={{
          backgroundImage: `url('/images/bgAs.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:items-end text-right">
         
          <div className="self-end">
            <img
              src='/images/chessHome2.webp'
              alt="Top Right"
              className="w-16 md:w-20 lg:w-24 max-w-full h-auto object-contain"
            />
          </div>

          <div className="max-w-3xl mt-4">
            <h2 className="text-4xl font-bold my-4">About Us</h2>
            <p className="">
              WE ARE PROUD TO INTRODUCE OURSELVES AS THE FIRST-OF-ITS-KIND
              CHEESE MANUFACTURER IN SAUDI ARABIA, ESTABLISHED IN 2023. OUR
              COMPANY IS DEDICATED TO PIONEERING EXCELLENCE IN THE LOCAL DAIRY
              INDUSTRY BY SETTING NEW STANDARDS FOR QUALITY AND INNOVATION. WITH
              A STRONG COMMITMENT TO UTILIZING SEMI-AUTOMATION AND SUSTAINABLE
              PRACTICES, WE GUARANTEE EXCEPTIONAL TASTE AND QUALITY IN EVERY
              PRODUCT.
            </p>
          </div>
        </div>

        <img
          src='/images/chessHome1.webp'
          alt="Bottom Left"
          className="absolute bottom-4 md:left-3 lg:left-20 w-16 hidden sm:block md:w-20 lg:w-24 max-w-full h-auto object-contain"
        />
      </section>
    </>
  );
}

export default MainHero;
