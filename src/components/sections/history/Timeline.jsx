import React from "react";
import blogs from "../../../assets/history/blogsLogo.jpg";
import career from "../../../assets/history/careerLogo.jpg";
import faq from "../../../assets/history/faqLogo.jpg";
import watch from "../../../assets/history/oldWatch .jpg";
import { Link } from "react-router-dom";
const Timeline = () => {
  return (
    <>
      <div className="font-poppins relative w-full h-96 flex justify-center items-center  bg-gradient-to-r from-orange-200 to-orange-50">
        <img
          src={watch}
          className=" opacity-40 absolute object-cover w-full h-full"
        ></img>
        <div className="absolute flex flex-col justify-center items-center text-center px-2">
          <h3 className="font-bold   text-4xl py-2">
            EMIKO SUCCESS THROUGH THE YEARS
          </h3>
          <p className="text-xl md:text-2xl">
            Tracing the Evolution of Emiko Batteries: Powering Progress through
            Time
          </p>
        </div>
      </div>

      <h3 className="text-center text-4xl font-bold text-blue-800 pt-8">
        Our Journey
      </h3>
      {/* <!-- component --> */}
      {/* --------------------------------------------------------Timeline--------------------------------------------------- */}
      <div className="flex justify-center items-center px-2">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">1988</h3>
              <h3 className="font-semibold text-base mb-1">
                Chinchwad Plant, Pune
              </h3>
              <p className="leading-tight text-justify">
                Associated with Exide Industries for battery parts manufacturing
                & plant activities
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2000</h3>
              <h3 className="font-semibold text-base mb-1">
                Chikali Plant, Pune
              </h3>
              <p className="leading-tight text-justify">
                Established the first plant for injection molding and battery
                charging
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2005</h3>
              <h3 className="font-semibold text-base mb-1">
                Chikali Plant Expansion
              </h3>
              <p className="leading-tight text-justify">
                Opened a second plant in Chikali for battery charging
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full md:w-2/6">
              <h3 className="font-semibold text-lg mb-1">2009</h3>
              <h3 className="font-semibold text-base mb-1">
                Bawal Plant, Haryana
              </h3>
              <p className="leading-tight text-justify">
                Set up the Bawal plant
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2011</h3>
              <h3 className="font-semibold text-base mb-1">
                Shikrapur Plant, Pune
              </h3>
              <p className="leading-tight text-justify">
                tarted smelting operations with a capacity of 2000MT/month
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2012</h3>
              <h3 className="font-semibold text-base mb-1">
                Corporate Head Office, Pune
              </h3>
              <p className="leading-tight text-justify">
                Started a new battery manufacturing plant in Hosur, Tamil Nadu
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2012</h3>
              <h3 className="font-semibold text-base mb-1">
                Chinchwad Plant, Pune
              </h3>
              <p className="leading-tight text-justify">
                Establishes the corporate office in Pune
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2012</h3>
              <h3 className="font-semibold text-base mb-1">
                Bawal Manufacturing Plants Expansion
              </h3>
              <p className="leading-tight text-justify">
                Established four manufacturing plants in Bawal, Haryana,
                <br /> Krish Auto Power India pvt.Ltd,Bawal ,<br />
                Subu Chem Pvt Ltd,Bawal,
                <br />
                Sakshi Auto Parts Pvt ltd,Bawal,
                <br /> Par Industries pvt ltd,Bawal
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">2015</h3>
              <h3 className="font-semibold text-base mb-1">
                Malur Plant, Karnataka
              </h3>
              <p className="leading-tight text-justify">
                Established a smelting and refining plant in Malur, Karnataka
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------TielineEnded--------------------------------------------------- */}
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
                <Link to="/carrers">
                  <img
                    className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                    src={career}
                    alt="avatar"
                  />

                  <div className="mt-2">
                    <h3 className="text-lg font-medium text-black ">Careers</h3>
                  </div>
                </Link>
              </div>

              <div className="w-full max-w-xs text-center">
                <Link to="/faq">
                  <img
                    className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                    src={faq}
                    alt="avatar"
                  />

                  <div className="mt-2">
                    <h3 className="text-lg font-medium text-black ">FAQ</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timeline;
