import React from "react";
import carrer from "../../../assets/carrer.png";
const ExploreOpportunities = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 md:m-14">
        <div className="md:w-1/2  p-8">
          {" "}
          <h1 className=" ">Explore Opportunities</h1>
          <p className="max-w-lg h-56 py-10">
            Join a team-driven environment where every voice is heard, ideas are
            celebrated, and excellence is recognized. Elevate your career in a
            supportive and inclusive workplace.
          </p>
          <h2 className="text-2xl font-poppins">Our Departments</h2>
          <ul className="list-disc list-inside px-4">
            <li>Manufacturing & supply chain</li>
            <li>IT & Networking</li>
            <li>Research & Design</li>
            <li>Sales & Marketing</li>
            <li>Human Resource</li>
            <li>Finance</li>
          </ul>
          <button className="relative flex h-[50px] w-96 items-center justify-center overflow-hidden bg-red-400 text-black rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-96 my-10">
            <span className="relative z-10 font-poppins font-normal text-xl">
              Join our career community
            </span>
          </button>
        </div>
        <div className="md:w-1/2   p-8">
          <img src={carrer} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default ExploreOpportunities;
