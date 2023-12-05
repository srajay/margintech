import React from "react";
import HeroSection from "./herosection/HeroSection";
import WorkSection from "./worksection/WorkSection";
import AboutSection from "./aboutsection/AboutSection";
import ServiceSection from "./servicesection/ServiceSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
};

export default Home;
