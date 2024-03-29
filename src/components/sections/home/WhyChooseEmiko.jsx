// import React from "react";
import battery from "../../../assets/home/section-3-battery.png";
import banner from "../../../assets/home/section-3-banner4.jpg";

import batteryEMT from "../../../assets/home/batteryemt.png";
import { Fade } from "react-awesome-reveal";

const WhyChooseEmiko = () => {
  return (
    <div>
      <div className="md:relative   md:mb-32">
        <Fade direction="up" triggerOnce="true">
          <img
            src={banner}
            alt="Banner Image"
            className="w-full hidden md:block"
          />
        </Fade>

        <div className="md:absolute -bottom-28 py-5 md:px-20 left-0 right-0 ">
          <div className="flex flex-col md:flex-row md:relative justify-start items-center bg-primary  md:h-44 md:mx-16">
            <Fade direction="up" triggerOnce="true">
              {" "}
              <div className="flex flex-col space-y-9 md:flex-row items-center p-2 md:p-5 ">
                <div className="w-fit">
                  <h1 className="text-2xl text-white font-semibold">
                    Why Choose EMIKO?
                  </h1>
                </div>
                <Fade direction="up" triggerOnce="true">
                  <div>
                    <ul className="md:flex md:justify-center space-y-6 md:space-y-0 justify-center  md:space-x-10  list-disc font-semibold md:text-lg px-8 text-white">
                      <li className="md:w-1/3 ">
                        Exceptional Performance & durability
                      </li>
                      <li className="md:w-1/3">Power and dependability</li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </Fade>

            <div className=" p-6 md:p-0 md:absolute md:-right-12 w-5/6 md:w-1/4 flex justify-start">
              <Fade direction="up" triggerOnce="true">
                <img src={batteryEMT} alt="battery" className="w-full" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEmiko;
