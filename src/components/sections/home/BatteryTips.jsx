import React from "react";
import batteryCharge from "../../../assets/battry-charge.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const BatteryTips = () => {
  return (
    <div>
      <section className="px-4 text-black font-poppins">
        <div className="container px-5 mx-auto">
          <Fade direction="up" triggerOnce="true">
            <div className="py-4 text-center">
              <h2 className="py-8 text-4xl font-semibold sm:text-4xl text-primary ">
                Battery Tips
              </h2>
              <p className="mx-auto text-xl font-semibold leading-relaxed">
                Know how to take care of your battery
              </p>
            </div>
          </Fade>
          <div className="flex flex-wrap justify-center p-5 -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0 md:gap-y-5 md:space-x-4">
            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Link to="/faq">
                <Fade direction="up" triggerOnce="true">
                  <div className="inline-flex items-center justify-center flex-shrink-0 rounded-full ">
                    <img src={batteryCharge} alt="Battery Need Replacement" className="w-32" />
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce="true">
                  <div className="flex-grow">
                    <p className="text-lg ">
                      How do i know that my battery needs replacement?
                    </p>
                  </div>
                </Fade>
              </Link>
            </div>

            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Link to="/faq">
                <Fade direction="up" triggerOnce="true">
                  <div className="inline-flex items-center justify-center flex-shrink-0 rounded-full ">
                    <img src={batteryCharge} alt="Battery Need Replacement" className="w-32" />
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce="true">
                  <div className="flex-grow">
                    <p className="text-lg ">
                      Tips while replacing the battery or cleaning terminals
                    </p>
                  </div>
                </Fade>
              </Link>
            </div>
            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Link to="/faq">
                <Fade direction="up" triggerOnce="true">
                  <div className="inline-flex items-center justify-center flex-shrink-0 rounded-full ">
                    <img src={batteryCharge} alt="Battery Need Replacement" className="w-32" />
                  </div>
                </Fade>
                <Fade direction="up" triggerOnce="true">
                  <div className="flex-grow">
                    <p className="text-lg ">
                      Battery Recycling- how to handle and used batteries with
                      care
                    </p>
                  </div>
                </Fade>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryTips;
