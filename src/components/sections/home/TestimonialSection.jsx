import React from "react";

import { testimonials } from "../../../constants/testimonials";
import { Fade } from "react-awesome-reveal";

const TestimonialSection = () => {
  return (
    <div className="container mx-auto">
      <section className="font-poppins">
        <div className="flex flex-col px-2 py-10 mx-auto md:flex-row ">
          <div className="p-3 space-y-6 ">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-4xl font-semibold text-center text-primary">
                Trust in our Expertise, Experience, and Dedication.
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <p className="text-2xl text-center capitalize ">
                what our clients says
              </p>
            </Fade>

            <div className="flex flex-col justify-center space-y-4 md:flex-row md:flex-wrap gap-y-3 md:space-y-0 md:space-x-5">
              {testimonials.map((item) => {
                return (
                  <div
                    className="overflow-hidden w-full flex justify-center   md:w-[30%] shadow-xl bg-primary rounded-2xl"
                    key={item.id}
                  >
                    <div className="flex flex-col items-center justify-center bg-white rounded-tl-full md:flex-row ">
                      <div className="flex items-center justify-center py-2 ">
                        <div className="flex flex-col items-center justify-center ">
                          <div className="flex flex-col items-center justify-center ">
                            <div className="flex justify-center p-1">
                              <Fade direction="up" triggerOnce="true">
                                <img
                                  src={item.photo}
                                  alt={item.name}
                                  className="w-1/2 rounded-full"
                                />
                              </Fade>
                            </div>
                            <Fade direction="up" triggerOnce="true">
                              <div className="flex flex-col items-center justify-center">
                                <div className="mx-4 text-sm font-medium text-primary">
                                  <p>{item.role}</p>
                                </div>
                                <div className="mx-4 font-bold text-black">
                                  <p>{item.name}</p>
                                </div>

                                <div className="mx-4 text-sm font-medium text-stone-500">
                                  <p>{item.companyName}</p>
                                </div>
                              </div>
                            </Fade>
                          </div>
                          <Fade direction="up" triggerOnce="true">
                            <div className="px-8 m-2">
                              <p> {item.testimonial}</p>
                            </div>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
