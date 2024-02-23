import React from "react";

const LifeAtEmiko = () => {
  return (
    <>
      <div className="  flex flex-col md:flex-row justify-center container mx-auto">
        <div className=" bg-primary items-center text-white md:text-left text-center font-poppins font-bold text-xl italic p-4">
          <h3 className="">Great Place To Learn</h3>
        </div>

        <div className="bg-slate-200 bg-gradient-to-r from-white to-blue-500">
          <h1 className="flex justify-center text-primary font-bold text-4xl">
            Life At Emiko
          </h1>
          <p className="px-6 text-2xl leading-8 font-normal">
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
