import React from "react";

function CompetitiveAdvantages() {
  return (
    <>
      <section className="py-16 text-center">
        <h2 className="text-5xl font-bold text-primary">
          Our Competitive Advantages
        </h2>

        <div className="flex flex-col md:flex-row  justify-center gap-6 max-w-6xl mx-auto px-4 items-stretch mt-20">
          <div
            className="group flex flex-col items-center text-center border-2 border-primary rounded-3xl p-4 w-full md:w-1/2 bg-white shadow-md space-y-4 
                transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            <img
              src="/images/adv2.svg"
              alt=""
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-xl font-semibold mb-2 transition-none group-hover:text-white">
              Semi automation
            </h3>
            <p className="text-secondary transition-all duration-300 group-hover:text-white">
              With our semi-automated production process, we combine precise
              automation with artisanal techniques, ensuring consistent quality,
              exceptional flavor, and superior craftsmanship in every batch.
            </p>
          </div>

          {/* <div className="flex flex-col items-center text-center rounded-3xl p-4 w-full md:w-1/2 bg-primary text-white shadow-md space-y-4">
            <img src="/images/adv1.svg" alt="" />
            <h3 className="text-xl font-semibold mb-2">
              Fresh ingredient every day
            </h3>
            <p>
              We source the finest local milk and other fresh ingredients daily
              to ensure unmatched quality and taste. As well as supports local
              farmers and guarantees a healthier product for our customers.
            </p>
          </div> */}
         <div className="group flex flex-col items-center text-center rounded-3xl p-4 w-full md:w-1/2 bg-primary text-white shadow-md space-y-4 transition-all duration-300 hover:bg-white hover:text-black">
  <img 
    src="/images/adv1.svg" 
    alt="" 
    className="transition-all duration-300 group-hover:filter group-hover:invert group-hover:brightness-100 group-hover:contrast-100"
  />
  <h3 className="text-xl font-semibold mb-2 transition-none  group-hover:text-black">
    Fresh ingredient every day
  </h3>
  <p className="transition-all duration-300 group-hover:text-gray-600">
    We source the finest local milk and other fresh ingredients daily
    to ensure unmatched quality and taste. As well as supports local
    farmers and guarantees a healthier product for our customers.
  </p>
</div>

        </div>
      </section>
    </>
  );
}

export default CompetitiveAdvantages;
