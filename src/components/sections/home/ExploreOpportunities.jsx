import React from "react";
import carrer from "../../../assets/carrer.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const ExploreOpportunities = () => {
  return (
    <>
      <div className="font-poppins  flex flex-col md:flex-row justify-center items-center md:m-14 px-4">
        <div className="md:w-1/2">
          <Fade direction="up" triggerOnce="true">
            <h1 className=" text-4xl font-semibold   text-primary py-8">
              Explore Opportunities
            </h1>
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
            <h2 className="text-2xl font-poppins px-2 pt-6">Our Departments</h2>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <ul className="list-disc list-inside px-6 py-4">
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
              <span className="relative z-10 font-poppins text-xl">
                Join our career community
              </span>
            </Link>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce="true" className="md:w-1/2 py-8">
          <img src={carrer} alt=""></img>
        </Fade>
      </div>
    </>
  );
};

export default ExploreOpportunities;
