import React from "react";

const LifeAtEmiko = () => {
  return (
    <>
      <div className="  flex flex-col md:flex-row justify-center mx-auto">
        <div className="flex  bg-primary items-center justify-center text-white md:text-center text-center font-poppins font-semibold text-2xl p-4 md:p-4">
          <h3 className="">Great Place To Learn</h3>
        </div>

        <div className="bg-slate-200 bg-gradient-to-r from-white to-blue-500 py-4 text-center px-4">
          <h1 className="flex md:justify-center text-left md:text-center text-4xl font-semibold italic  text-primary py-4">
            Life At Emiko
          </h1>
          <p className="flex justify-center text-xl leading-7 md:px-24 text-left md:pb-2">
            Embrace a dynamic work culture that fosters creativity,
            collaboration, and innovation. We prioritize diversity, encourage
            continuous learning, and value work-life balance. Join a team-driven
            environment where every voice is heard, ideas are celebrated, and
            excellence is recognized. Elevate your career in a supportive and
            inclusive workplace.
          </p>
        </div>
      </div>
    </>
  );
};

export default LifeAtEmiko;
