import React from "react";
import blogs from "../../../assets/history/blogsLogo.jpg";
import career from "../../../assets/history/careerLogo.jpg";
import faq from "../../../assets/history/faqLogo.jpg";
import watch from "../../../assets/history/oldWatch .jpg";
const Timeline = () => {
  return (
    <>
      <div className="relative w-full h-96 flex justify-center items-center  bg-gradient-to-r from-orange-200 to-orange-50 ">
        <img
          src={watch}
          className=" opacity-40 absolute object-cover w-full h-full"
        ></img>
        <div className="absolute flex flex-col justify-center items-center ">
          <h3 className="font-arimo font-bold   text-4xl py-4">
            EMIKO SUCCESS THROUGH THE YEARS
          </h3>
          <p>
            Tracing the Evolution of Emiko Batteries: Powering Progress through
            Time
          </p>
        </div>
      </div>

      <h3 className="text-center text-4xl font-bold text-blue-800 pt-8">
        Our Journey
      </h3>
      {/* <!-- component --> */}
      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-50 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              <div className="p-2 bg-gray-800 rounded-full 2-4 h-4"></div>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">2022</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Launched the longest-range GC2 lithium-ion golf car battery
                Introduced a 48V GC2 lithium-ion battery to the golf industry
                Launched the 24V/36V lithium-ion battery line.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              <div className="p-2 bg-gray-800 rounded-full 2-4 h-4"></div>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-900 text-xl">2018</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Acquired by C&D Technologies, a portfolio company of KPS Capital
                Partners.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              <div className="p-2 bg-gray-800 rounded-full 2-4 h-4"></div>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">2013</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Launched two new deep-cycle 8V batteries: Traveler™ 8V, the
                longest-life battery and Ranger 160™, the longest-range battery.
                Received Frost & Sullivan 2013 “Innovative Enterprise” award.
                Received Genie's “Outstanding Performance” award for 2012.
                Received 2012 “Application Solar Project of the Year” award for
                a solar-powered rural street lighting project in Dubai, U.A.E.
                Received investment from Charlesbank Capital Partners.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              <div className="p-2 bg-gray-800 rounded-full 2-4 h-4"></div>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-900 text-xl">2012</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
                Selected as one of the "most admired companies" by readers of
                Golf Course Industry magazine, as well as a company they can
                trust to provide reliable products and support.
              </p>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
              <div className="p-2 bg-gray-800 rounded-full 2-4 h-4"></div>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">2011</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Received highest in sustained capacity and total ampere hour
                performance rankings for Trojan's T-875 flooded batteries from
                independent third-party. Launched industrial line of deep-cycle
                flooded batteries for renewable energy applications. Added
                U1-AGM and 22-AGM products to the deep-cycle AGM line.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* More about emiko battery div */}
      <div className="my-8">
        <section className="bg-gray-300 ">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-bold text-center text-blue-800 capitalize lg:text-6xl py-4">
              More about EMIKO Battery
            </h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={blogs}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-black ">
                    Blogs and Articles
                  </h3>
                </div>
              </div>

              <div className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={career}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-black ">Careers</h3>
                </div>
              </div>

              <div className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={faq}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-black ">FAQ</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timeline;
