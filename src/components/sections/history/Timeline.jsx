import React from "react";
import blogs from "../../../assets/history/blogsLogo.jpg";
import career from "../../../assets/history/careerLogo.jpg";
import faq from "../../../assets/history/faqLogo.jpg";
import watch from "../../../assets/history/oldWatch .jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Timeline = () => {
  return (
    <>
      <Fade direction="up" triggerOnce="true">
        {" "}
        <div className="relative flex items-center justify-center w-full font-poppins h-96 bg-gradient-to-r from-orange-200 to-orange-50">
          <img
            src={watch}
            className="absolute object-cover w-full h-full opacity-40"
          ></img>
          <div className="absolute flex flex-col items-center justify-center px-2 text-center">
            <Fade direction="up" triggerOnce="true">
              <h3 className="py-2 text-4xl font-bold">
                EMIKO SUCCESS THROUGH THE YEARS
              </h3>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <p className="text-xl md:text-2xl">
                Tracing the Evolution of Emiko Batteries: Powering Progress
                through Time
              </p>
            </Fade>
          </div>
        </div>
      </Fade>

      <Fade>
        {" "}
        <h3 className="pt-8 text-4xl font-bold text-center text-blue-800">
          Our Journey
        </h3>
      </Fade>
      {/* <!-- component --> */}
      {/* --------------------------------------------------------Timeline--------------------------------------------------- */}
      <div className="flex items-center justify-center px-2">
        <div className="flex flex-col grid-cols-9 p-2 mx-auto text-black md:grid">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 my-4 ml-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                <h3 className="mb-1 text-lg font-semibold">1988</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Chinchwad Plant, Pune
                </h3>
                <p className="leading-tight text-justify">
                  Associated with Exide Industries for battery parts
                  manufacturing & plant activities
                </p>
              </Fade>
            </div>

            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 my-4 mr-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                <h3 className="mb-1 text-lg font-semibold">2000</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Chikali Plant, Pune
                </h3>
                <p className="leading-tight text-justify">
                  Established the first plant for injection molding and battery
                  charging
                </p>
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 my-4 ml-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                <h3 className="mb-1 text-lg font-semibold">2005</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Chikali Plant Expansion
                </h3>
                <p className="leading-tight text-justify">
                  Opened a second plant in Chikali for battery charging
                </p>
              </Fade>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
            <div className="w-full col-start-6 col-end-10 p-4 my-4 mr-auto bg-gray-300 shadow-md rounded-xl md:w-2/6">
              <Fade direction="up" triggerOnce="true">
                {" "}
                <h3 className="mb-1 text-lg font-semibold">2009</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Bawal Plant, Haryana
                </h3>
                <p className="leading-tight text-justify">
                  Set up the Bawal plant
                </p>
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 my-4 ml-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                <h3 className="mb-1 text-lg font-semibold">2011</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Shikrapur Plant, Pune
                </h3>
                <p className="leading-tight text-justify">
                  tarted smelting operations with a capacity of 2000MT/month
                </p>
              </Fade>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 my-4 mr-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                {" "}
                <h3 className="mb-1 text-lg font-semibold">2012</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Corporate Head Office, Pune
                </h3>
                <p className="leading-tight text-justify">
                  Started a new battery manufacturing plant in Hosur, Tamil Nadu
                </p>
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 my-4 ml-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                {" "}
                <h3 className="mb-1 text-lg font-semibold">2012</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Chinchwad Plant, Pune
                </h3>
                <p className="leading-tight text-justify">
                  Establishes the corporate office in Pune
                </p>
              </Fade>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
            <div className="col-start-6 col-end-10 p-4 my-4 mr-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                <h3 className="mb-1 text-lg font-semibold">2012</h3>
                <h3 className="mb-1 text-base font-semibold">
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
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 my-4 ml-auto bg-gray-300 shadow-md rounded-xl">
              <Fade direction="up" triggerOnce="true">
                {" "}
                <h3 className="mb-1 text-lg font-semibold">2015</h3>
                <h3 className="mb-1 text-base font-semibold">
                  Malur Plant, Karnataka
                </h3>
                <p className="leading-tight text-justify">
                  Established a smelting and refining plant in Malur, Karnataka
                </p>
              </Fade>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-gray-800 rounded-full shadow top-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------TielineEnded--------------------------------------------------- */}
      {/* More about emiko battery div */}
      <div className="mt-4">
        <section className="bg-gray-300 ">
          <div className="container px-6 py-8 mx-auto">
            <Fade direction="up" triggerOnce="true">
              {" "}
              <h2 className="py-4 text-2xl font-bold text-center text-blue-800 capitalize lg:text-6xl">
                More about EMIKO Battery
              </h2>
            </Fade>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="w-full text-center">
                <Fade direction="up" triggerOnce="true">
                  <img
                    className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                    src={blogs}
                    alt="avatar"
                  />{" "}
                </Fade>

                <div className="mt-2">
                  <Fade direction="up" triggerOnce="true">
                    <h3 className="text-lg font-medium text-black ">
                      Blogs and Articles
                    </h3>
                  </Fade>
                </div>
              </div>

              <div className="w-full text-center">
                <Link to="/carrers">
                  <Fade direction="up" triggerOnce="true">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src={career}
                      alt="avatar"
                    />
                  </Fade>

                  <div className="mt-2">
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-lg font-medium text-black ">
                        Careers
                      </h3>
                    </Fade>
                  </div>
                </Link>
              </div>

              <div className="w-full text-center">
                <Link to="/faq">
                  <Fade direction="up" triggerOnce="true">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src={faq}
                      alt="avatar"
                    />
                  </Fade>

                  <div className="mt-2">
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-lg font-medium text-black ">FAQ</h3>
                    </Fade>
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
