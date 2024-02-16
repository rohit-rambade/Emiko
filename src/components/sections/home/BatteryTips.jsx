import React from "react";
import batteryCharge from "../../../assets/battry-charge.png";
const BatteryTips = () => {
  return (
    <div>
      <section className="text-black font-poppins">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium title-font text-primary mb-4 ">
              Battery Tips
            </h1>
            <p className="text-2xl leading-relaxed mx-auto font-semibold">
              Know how to take care of your battery
            </p>
          </div>
          <div className="flex p-5 flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 md:gap-y-5 space-y-6 md:space-x-4">
            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0 ">
                <img src={batteryCharge} alt="" className="w-32" />
              </div>
              <div className="flex-grow">
                <p className=" text-sm  font-semibold mb-3">
                  How do i know that my battery needs replacement?
                </p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0 ">
                <img src={batteryCharge} alt="" className="w-32" />
              </div>
              <div className="flex-grow">
                <p className=" text-sm  font-semibold mb-3">
                  Tips while replacing the battery or cleaning terminals
                </p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3 space-y-7 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0 ">
                <img src={batteryCharge} alt="" className="w-32" />
              </div>
              <div className="flex-grow">
                <p className=" text-sm  font-semibold mb-3">
                  Battery Recycling- how to handle and used batteries with care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryTips;