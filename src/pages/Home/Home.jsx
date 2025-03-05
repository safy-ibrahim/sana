import React from "react";
import HeroSec from "./HeroSec/HeroSec";
import Values from "../../components/Values/Values";
import LogosSlider from "../../components/LogosSlider/LogosSlider";
import ProductSlider from "./ProductSlider/ProductSlider";
import ImgGallary from "../../components/ImgGallary/ImgGallary";
import Order from "./Order/Order";
import ContactUs from "../../components/ContactUs/ContactUs";

function Home() {
  return (
    <>
      <HeroSec />
      <Values />
      <div className=" border-t-2 border-primary">
        <LogosSlider />
      </div>
     
      <ProductSlider />
      <Order />
      <LogosSlider />
      <ContactUs />
      <ImgGallary />
    </>
  );
}

export default Home;
