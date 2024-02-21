import React from "react";
import circle from "../../../assets/careers/careerCircle.png";
import finance from "../../../assets/careers/finance.png";
import supply from "../../../assets/careers/supply.png";
import networking from "../../../assets/careers/networking.png";
import research from "../../../assets/careers/r&d.png";
import sales from "../../../assets/careers/sales.png";
import human from "../../../assets/careers/humanresource.png";

const CareersSection = () => {
  return (
    <>
      <div className="flex justify-center content-center">
        <img src={circle} alt="" className="w-1/2"></img>
      </div>
      <div className="flex justify-center  text-center bg-gray-200 px-6">
        <div className=" w-1/2 text-blue-600 font-bold text-4xl font-kameron ">
          <h3 className="my-6">
            We promote a culture of collaboration, freedom and innovation.
          </h3>
        </div>
        <div className=" w-1/2">
          <p>
            Embrace a dynamic work culture that fosters creativity,
            collaboration, and innovation. We prioritize diversity, encourage
            continuous learning, and value work-life balance. Join a team-driven
            environment where every voice is heard, ideas are celebrated, and
            excellence is recognized. Elevate your career in a supportive and
            inclusive workplace.
          </p>
        </div>
      </div>
      {/* Our departments */}
      <div className="my-8">
        <section className=" ">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-bold text-center text-blue-800 capitalize lg:text-6xl">
              More about EMIKO Battery
            </h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={finance}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">Finance</h3>
              </div>

              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={supply}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">
                  Manufacturing &Supply Chain
                </h3>
              </div>

              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={networking}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">
                  IT & Networking
                </h3>
              </div>
            </div>
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={research}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">
                  Research and design
                </h3>
              </div>

              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={sales}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">
                  Sales & Marketing
                </h3>
              </div>

              <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl">
                <img
                  className=" object-cover object-center w-full  px-20 bg-white"
                  src={human}
                  alt="avatar"
                />
                <h3 className="text-lg font-medium text-black ">
                  Human Resource
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersSection;
