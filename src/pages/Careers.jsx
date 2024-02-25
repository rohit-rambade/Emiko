import React from "react";
import circle from "../assets/careers/careerCircle.png";
import { departments } from "../constants/departments";
const Careers = () => {
  return (
    <div>
      <div className="flex justify-center content-center">
        <img src={circle} alt="" className="md:w-1/2"></img>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-left bg-gray-200 px-6 md:px-24 py-4 md:py-12">
        <div className=" md:w-1/2 text-blue-600 font-semibold text-4xl font-poppins ">
          <h3 className="my-6 leading-loose">
            We promote a culture of collaboration, freedom and innovation.
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl">
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
            <h2 className="text-4xl font-semibold text-center text-blue-800 capitalize">
              Our Departments
            </h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
              {departments.map((department) => {
                return (
                  <div className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl gap-y-4 transition-all duration-700 hover:scale-110 cursor-pointer">
                    <img
                      className=" object-cover object-center w-full  px-20 bg-white "
                      src={department.imageURL}
                      alt="avatar"
                    />
                    <h3 className="text-lg font-normal text-black p-4 ">
                      {department.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
