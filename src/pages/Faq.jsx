import React from "react";
import Faqs from "../components/sections/faq/Faqs";
import faqImg from "../assets/faq/faq.jpg";
import { Fade } from "react-awesome-reveal";
const Faq = () => {
  return (
    <div className=" flex flex-col h-full  justify-center items-center font-poppins">
      <Fade direction="up" triggerOnce="true">
        <div className="flex justify-center content-center text-center py-6">
          <img src={faqImg} alt="" className=" object-center md:w-3/5"></img>
        </div>
      </Fade>
      <div className="w-full">
        <div className="relative w-full bg-gray-200 px-6 md:pt-10 pb-8 mt-8  ring-gray-900/5 sm:mx-auto sm:max-w-full sm:rounded-lg sm:px-10">
          <div className="mx-auto ">
            <div className="flex flex-col items-center">
              <Fade direction="up" triggerOnce="true">
                <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl text-primary">
                  FAQ
                </h2>
              </Fade>
              <Fade direction="up" triggerOnce="true">
                <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                  Frequenty asked questions
                </p>
              </Fade>
            </div>
            <div className="mx-auto mt-8 px-6 grid max-w-full divide-y divide-neutral-200 gap-y-4 md:gap-y-8">
              <Faqs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
