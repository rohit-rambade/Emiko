// import React from "react";
import battery from "../../../assets/home/section-3-battery.png";
import banner from "../../../assets/home/section-3-banner.png";

import batteryEMT from "../../../assets/home/batteryemt.png";

const WhyChooseEmiko = () => {
  return (
    <div>
      <div className="md:relative font-poppins  md:mb-32">
        <img
          src={banner}
          alt="Banner Image"
          className="w-full hidden md:block"
        />
        <div className="md:absolute -bottom-28 py-5 md:px-20 left-0 right-0 ">
          <div
            className="flex flex-col md:flex-row md:relative justify-start items-center bg-gradient-to-r  md:h-44 md:mx-16"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(255, 255, 255, 0.7))",
            }}
          >
            <div className="flex flex-col space-y-9 md:flex-row items-center p-2 md:p-5 ">
              <div className="w-fit">
                <h1 className="text-2xl text-white font-semibold">
                  Why Choose EMIKO?
                </h1>
              </div>

              <div>
                <ul className="md:flex md:justify-normal space-y-6 md:space-y-0 justify-center  md:space-x-10  list-disc font-semibold md:text-lg px-8">
                  <li className="md:w-1/3 ">
                    Exceptional Performance & durability
                  </li>
                  <li className="md:w-1/3">Power and dependability</li>
                </ul>
              </div>
            </div>
            <div className=" p-6 md:p-0 md:absolute md:-right-12 w-5/6 md:w-1/4 flex justify-start">
              <img src={batteryEMT} alt="battery" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEmiko;
