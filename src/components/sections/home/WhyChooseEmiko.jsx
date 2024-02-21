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
            className="flex flex-col md:flex-row md:relative justify-start items-center bg-gradient-to-r  h-44 mx-16"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(255, 255, 255, 0.7))",
            }}
          >
            <div className="flex flex-col space-y-9 md:flex-row items-center p-4 md:p-5 ">
              <div className="w-fit">
                <h1 className="text-2xl text-white font-semibold">
                  Why Choose EMIKO?
                </h1>
              </div>

              <div>
                <ul className="md:flex md:justify-end space-y-6 md:space-y-0 justify-center  md:space-x-10 list-disc font-semibold">
                  <li className="md:w-1/3 ">
                    Exceptional Performance & durability
                  </li>
                  <li className="md:w-1/3">Power and dependability</li>
                </ul>
              </div>
            </div>
            {/* <img src={battery} alt="battery" className="w-36 " /> */}
            <div className=" p-5 md:p-0 md:absolute md:-right-12 md:w-1/4 flex justify-start">
              <img src={batteryEMT} alt="battery" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <section className="text-gray-600 body-font  ">
    //     <div className=" ">
    //       <div>
    //         <div className="">
    //           <img src={banner} alt="" className="" />
    //           <div className="absolute top-[90%] bg-red-400">
    //             <div>
    //               <h1>Why Choose EMIKO?</h1>
    //             </div>
    //             <div>
    //               <ul>
    //                 <li>Exceptional Performance & durability</li>
    //                 <li>Power and dependability</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default WhyChooseEmiko;
