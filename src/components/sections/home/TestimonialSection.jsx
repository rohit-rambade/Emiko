import React from "react";

import { testimonials } from "../../../constants/testimonials";

const TestimonialSection = () => {
  return (
    <div className="container mx-auto">
      <section className="font-poppins">
        <div className="py-10 px-2 mx-auto flex flex-col md:flex-row ">
          <div className=" p-3 space-y-6">
            <h1 className="text-4xl text-center font-semibold text-primary">
              Trust in our Expertise, Experience, and Dedication.
            </h1>
            <p className="text-2xl text-center capitalize ">
              what our clients says
            </p>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-3  space-y-4 md:space-y-0 md:space-x-5">
              {testimonials.map((item) => {
                return (
                  <div
                    className="overflow-hidden w-full flex justify-center   md:w-[30%] shadow-xl bg-primary rounded-2xl"
                    key={item.id}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                      <div className="  items-center justify-center flex py-2">
                        <div className="flex flex-col  items-center justify-center ">
                          <div className="flex flex-col items-center justify-center ">
                            <div className="p-1  flex justify-center">
                              <img
                                src={item.photo}
                                alt={item.name}
                                className="rounded-full w-1/2"
                              />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                              <div className="text-sm font-medium text-primary  mx-4">
                                <p>{item.role}</p>
                              </div>
                              <div className="font-bold text-black mx-4">
                                <p>{item.name}</p>
                              </div>

                              <div className="text-sm font-medium text-stone-500  mx-4">
                                <p>{item.companyName}</p>
                              </div>
                            </div>
                          </div>
                          <div className="m-2 px-8">
                            <p> {item.testimonial}</p>
                          </div>
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
