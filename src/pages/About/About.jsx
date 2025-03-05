import React from "react";
import MainHero from "./MainHero/MainHero";
import Values from "../../components/Values/Values";
import Goals from "./Goals/Goals";
import CompetitiveAdvantages from "./CompetitiveAdvantages/CompetitiveAdvantages";
import Certifications from "./Certifications/Certifications";
import LogosSlider from "../../components/LogosSlider/LogosSlider";

function About() {
  return (
    <>
      <MainHero />
      <Values />
      <Goals />
      <CompetitiveAdvantages />
      <Certifications />
      <LogosSlider />
    </>
  );
}

export default About;
