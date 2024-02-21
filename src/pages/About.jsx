import React from "react";
import AboutUs from "../components/sections/aboutUs/AboutUs";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <AboutUs />
      <Outlet />
    </>
  );
};

export default About;
