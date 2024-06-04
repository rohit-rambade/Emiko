// import React from "react";
import battery from "../../../assets/home/section-3-battery.png";
import banner from "../../../assets/home/section-3-banner4.jpg";

import batteryEMT from "../../../assets/home/batteryemt.png";
import { Fade } from "react-awesome-reveal";

const WhyChooseEmiko = () => {
  return (
    <div>
      <div className="md:relative md:mb-32">
        <Fade direction="up" triggerOnce="true">
          <img
            src={banner}
            alt="Banner Image"
            className="hidden w-full md:block"
          />
        </Fade>

        <div className="left-0 right-0 py-5 md:absolute -bottom-28 md:px-20 ">
          <div className="flex flex-col items-center justify-start md:flex-row md:relative bg-primary md:h-44 md:mx-16">
            <Fade direction="up" triggerOnce="true">
              {" "}
              <div className="flex flex-col items-center p-2 space-y-9 md:flex-row md:p-5 ">
                <div className="w-fit">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Choose EMIKO?
                  </h2>
                </div>
                <Fade direction="up" triggerOnce="true">
                  <div>
                    <ul className="justify-center px-8 space-y-6 font-semibold text-white list-disc md:flex md:justify-center md:space-y-0 md:space-x-10 md:text-lg">
                      <li className="md:w-1/3 ">
                        Exceptional Performance & durability
                      </li>
                      <li className="md:w-1/3">Power and dependability</li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </Fade>

            <div className="flex justify-start w-5/6 p-6 md:p-0 md:absolute md:-right-12 md:w-1/4">
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
