import React from "react";
import emikoCube from "../../../assets/home/emikoCubes.png";
import { Fade } from "react-awesome-reveal";

const WorkCulture = () => {
  return (
    <>
      <div className="font-poppins flex flex-col justify-center content-center md:text-center text-left py-6 px-4 ">
        <div>
          <Fade direction="up" triggerOnce="true">
            <h1 className="text-4xl py-4 text-primary font-semibold">
              Our work culture
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <p className="md:px-24 text-lg py-2">
              Embrace a dynamic work culture that fosters creativity,
              collaboration, and innovation. We prioritize diversity, encourage
              continuous learning, and value work-life balance. Join a
              team-driven environment where every voice is heard, ideas are
              celebrated, and excellence is recognized. Elevate your career in a
              supportive and inclusive workplace
            </p>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce="true">
          {" "}
          <div className=" flex content-center justify-center md:py-8 py-4">
            <img
              src={emikoCube}
              alt="cube"
              className="w-5/6 md:w-4/6 py-2 transition duration-1000 ease-in-out transform hover:scale-110 hover:saturate-100 shadow-[10px_10px_5px_2px_rgba(255,0,0,0.2)] hover:shadow"
            ></img>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default WorkCulture;
