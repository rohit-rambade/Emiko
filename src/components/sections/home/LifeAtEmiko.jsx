import React from "react";
import { Fade } from "react-awesome-reveal";

const LifeAtEmiko = () => {
  return (
    <>
      <div className="font-poppins  flex flex-col md:flex-row justify-center mx-auto">
        <div className="md:w-1/2 flex  bg-primary items-center justify-center text-white md:text-center text-center font-poppins font-semibold text-2xl p-4 md:p-4">
          <Fade direction="up" triggerOnce="true">
            <h3 className="">Great Place To Learn</h3>
          </Fade>
        </div>

        <div className="bg-slate-200 bg-gradient-to-l from-white to-blue-500 py-4  px-4">
          <Fade direction="up" triggerOnce="true">
            <h1 className="flex md:justify-center text-left md:text-center text-4xl font-semibold   text-primary">
              Life At Emiko
            </h1>

            <p className="flex justify-center text-xl leading-7 md:px-24 text-left md:text-center md:pb-2">
              Embrace a dynamic work culture that fosters creativity,
              collaboration, and innovation. We prioritize diversity, encourage
              continuous learning, and value work-life balance. Join a
              team-driven environment where every voice is heard, ideas are
              celebrated, and excellence is recognized. Elevate your career in a
              supportive and inclusive workplace.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default LifeAtEmiko;
