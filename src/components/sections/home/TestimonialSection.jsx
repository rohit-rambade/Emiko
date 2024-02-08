import React from "react";
import exide from "../../../assets/partners/exide.png";
import livguard from "../../../assets/partners/livguard.png";
import eastman from "../../../assets/partners/eastman.png";
const TestimonialSection = () => {
  const clients = [
    {
      id: 1,
      name: "Exide",
      imgUrl: exide,
    },
    {
      id: 2,
      name: "Livguard",
      imgUrl: livguard,
    },
    {
      id: 3,
      name: "Eastman",
      imgUrl: eastman,
    },
  ];
  return (
    <div>
      <section class="font-poppins">
        <div class="container  py-10 mx-auto flex flex-col md:flex-row ">
          <div className="lg:w-3/5 bg-gray-400 p-3 space-y-6">
            <h1 className="text-4xl font-bold text-primary">
              Trust in our Expertise, Experience, and Dedication.
            </h1>
            <p className="text-2xl ">what our clients says</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {clients.map((client) => {
                return (
                  <img
                    key={client.id}
                    src={client.imgUrl}
                    alt={client.name}
                    className="w-44"
                  />
                );
              })}
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
              <div class="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
                <p class="text-sm text-center text-[#333] leading-relaxed">
                  Nam eu molestie ex, eget placerat eros. Donec non pretium
                  nisi. Etiam id tincidunt sem. Cras feugiat convallis lacus, eu
                  dictum diam ultricies eget.
                </p>
                <div class="flex flex-wrap items-center justify-center mt-8">
                  <img
                    src="https://dummyjson.com/image/40"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="ml-4 text-left">
                    <p class="text-sm font-semibold">Test User</p>
                    <p class="text-xs text-gray-400">test@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
                <p class="text-sm text-center text-[#333] leading-relaxed">
                  Nam eu molestie ex, eget placerat eros. Donec non pretium
                  nisi. Etiam id tincidunt sem. Cras feugiat convallis lacus, eu
                  dictum diam ultricies eget.
                </p>
                <div class="flex flex-wrap items-center justify-center mt-8">
                  <img
                    src="https://dummyjson.com/image/40"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="ml-4 text-left">
                    <p class="text-sm font-semibold">Test User</p>
                    <p class="text-xs text-gray-400">test@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div class="flex flex-col justify-start p-6">
              <div className="lg:space-y-4">
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-[#251061] ">
                  Testimonials
                </h1>
                <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  What Our Clients Say
                </h1>
              </div>

              <div className="lg:mt-auto">
                <p class="mb-3 font-normal text-gray-700 ">
                  JPG Batteries Pvt. Ltd., a subsidiary of a prominent 700 crore
                  group, has been a key player in the lead acid battery industry
                  since 1988. Introducing the EMIKO brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
