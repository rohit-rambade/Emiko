import React from "react";
import carrer from "../../../assets/carrer.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const ExploreOpportunities = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 font-poppins md:flex-row md:m-14">
        <div className="md:w-1/2">
          <Fade direction="up" triggerOnce="true">
            <h2 className="py-8 text-4xl font-semibold text-primary">
              Explore Opportunities
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <p className="max-w-lg px-2 text-xl">
              Join a team-driven environment where every voice is heard, ideas
              are celebrated, and excellence is recognized. Elevate your career
              in a supportive and inclusive workplace.
            </p>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            {" "}
            <h2 className="px-2 pt-6 text-2xl font-poppins">Our Departments</h2>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <ul className="px-6 py-4 list-disc list-inside">
              <li>Manufacturing & supply chain</li>
              <li>IT & Networking</li>
              <li>Research & Design</li>
              <li>Sales & Marketing</li>
              <li>Human Resource</li>
              <li>Finance</li>
            </ul>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <Link
              to="/carrers"
              className="relative flex h-[50px] w-80 md:w-96 items-center justify-center overflow-hidden bg-red-400 text-black rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-96"
            >
              <span className="relative z-10 text-xl font-poppins">
                Join our career community
              </span>
            </Link>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce="true" className="py-8 md:w-1/2">
          <img src={carrer} alt="Battery Manufacturer"></img>
        </Fade>
      </div>
    </>
  );
};

export default ExploreOpportunities;
