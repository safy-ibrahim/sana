import React from "react";
import LogosSlider from "../../components/LogosSlider/LogosSlider";
import ImgGallary from "../../components/ImgGallary/ImgGallary";
import MainSec from "./MainSec/MainSec";


function Products() {
  return (
    <>
      <div className="py-16 bg-[#FEF9F2]">
        <MainSec />
        <div className="border-t-2 border-t-primary">
          <LogosSlider />
        </div>

        <ImgGallary />
      </div>
    </>
  );
}

export default Products;
