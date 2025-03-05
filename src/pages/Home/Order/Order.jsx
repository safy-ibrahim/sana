import React from "react";
function Order() {
  return (
    <>
      <div className="w-full flex h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] border-b-2 border-primary">
        <div className="w-[45%] sm:w-1/3 h-full">
          <img
            src='/images/order1.webp'
            alt="Left Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="w-[45%] sm:w-1/3 h-full flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url('/images/orderbg.webp')`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <h2 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-bold text-primary">
            Sana Food Industries Co
          </h2>
        </div>

        <div className="w-[45%] sm:w-1/3 h-full">
          <img
            src='/images/order1.webp'
            alt="Right Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Order;
