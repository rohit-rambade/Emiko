// import React from "react";
import battery from "../../../assets/home/section-3-battery.png";
import banner from "../../../assets/home/section-3-banner.png";
const WhyChooseEmiko = () => {
  return (
    <div>
      <div class="md:relative font-poppins  md:mb-32">
        <img src={banner} alt="Banner Image" class="w-full hidden md:block" />
        <div class="md:absolute -bottom-10 py-5 md:px-20 left-0 right-0 ">
          <div className="flex flex-col md:flex-row md:relative justify-start items-center bg-gradient-to-r from-primary to-white ">
            <div className="flex flex-col space-y-9 md:flex-row items-center p-4 md:p-5 ">
              <div className="w-fit">
                <h1 className="text-2xl text-white font-semibold ">
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
            <div className=" p-5 md:p-0 md:absolute md:-right-2 md:w-1/3 flex justify-start">
              <img src={battery} alt="battery" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <section class="text-gray-600 body-font  ">
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
