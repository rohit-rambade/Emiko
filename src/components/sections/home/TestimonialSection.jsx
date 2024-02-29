import React from "react";

import { testimonials } from "../../../constants/testimonials";

const TestimonialSection = () => {
  return (
    <div className="container mx-auto">
      <section className="font-poppins">
        <div className="py-10 mx-auto flex flex-col md:flex-row ">
          <div className=" p-3 space-y-6">
            <h1 className="text-4xl font-bold text-primary">
              Trust in our Expertise, Experience, and Dedication.
            </h1>
            <p className="text-2xl ">what our clients says</p>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-3  space-y-4 md:space-y-0 md:space-x-2">
              {testimonials.map((item) => {
                return (
                  <div className="overflow-hidden w-full flex justify-center   md:w-[30%] shadow-xl bg-primary rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                      <div className="  items-center justify-center flex py-2">
                        <div className="flex flex-col  items-center justify-center ">
                          <div className="flex items-center">
                            <div className="p-1 bg-white rounded-full">
                              <img
                                src="https://source.unsplash.com/100x100/?man,boy"
                                alt=""
                                className="rounded-full"
                              />
                            </div>
                            <div>
                              <div className="font-bold text-stone-500 mx-4">
                                {item.name}
                              </div>
                              <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4">
                                <a href="#">{item.role}</a>
                              </div>
                              <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4">
                                <a href="#">{item.companyName}</a>
                              </div>
                            </div>
                          </div>
                          <div className="  m-2 px-8">
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
