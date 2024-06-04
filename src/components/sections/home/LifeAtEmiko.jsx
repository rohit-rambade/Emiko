import React from "react";
import { Fade } from "react-awesome-reveal";

const LifeAtEmiko = () => {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto font-poppins md:flex-row">
        <div className="flex items-center justify-center p-4 text-2xl font-semibold text-center text-white md:w-1/2 bg-primary md:text-center font-poppins md:p-4">
          <Fade direction="up" triggerOnce="true">
            <h3 className="">Great Place To Learn</h3>
          </Fade>
        </div>

        <div className="px-4 py-4 bg-slate-200 bg-gradient-to-l from-white to-blue-500">
          <Fade direction="up" triggerOnce="true">
            <h2 className="flex text-4xl font-semibold text-left md:justify-center md:text-center text-primary">
              Life At Emiko
            </h2>

            <p className="flex justify-center text-xl leading-7 text-left md:px-24 md:text-center md:pb-2">
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
