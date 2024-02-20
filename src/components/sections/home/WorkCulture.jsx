import React from "react";
import emikoCube from "../../../assets/home/emikoCubes.png";

const WorkCulture = () => {
  return (
    <>
      <div className="flex flex-col justify-center content-center text-center">
        <div>
          <h3 className="font-kameron text-6xl py-8 ">Our work culture</h3>
          <p className="px-12">
            Embrace a dynamic work culture that fosters creativity,
            collaboration, and innovation. We prioritize diversity, encourage
            continuous learning, and value work-life balance. Join a team-driven
            environment where every voice is heard, ideas are celebrated, and
            excellence is recognized. Elevate your career in a supportive and
            inclusive workplace
          </p>
        </div>
        <div className=" flex content-center justify-center">
          <img src={emikoCube} alt="" className="w-5/6 py-4"></img>
        </div>
      </div>
    </>
  );
};

export default WorkCulture;
