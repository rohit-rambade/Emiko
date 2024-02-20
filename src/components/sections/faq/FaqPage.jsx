import React from "react";
import faqBanner from "../../../assets/faq/faqBanner.jpeg";
import faq from "../../../assets/faq/faq2.jpg";

const FaqPage = () => {
  return (
    <>
      <div className=" flex flex-col h-full  justify-center items-center">
        <div className="flex justify-center content-center text-center py-6">
          <img src={faq} alt="" className=" object-center w-1/2 h-full"></img>
        </div>
        <div className="w-full">
          <div class="relative w-full bg-gray-200 px-6 pt-10 pb-8 mt-8  ring-gray-900/5 sm:mx-auto sm:max-w-full sm:rounded-lg sm:px-10">
            <div class="mx-auto px-5">
              <div class="flex flex-col items-center">
                <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                  FAQ
                </h2>
                <p class="mt-3 text-lg text-neutral-500 md:text-xl">
                  Frequenty asked questions
                </p>
              </div>
              <div class="mx-auto mt-8 px-6 grid max-w-full divide-y divide-neutral-200">
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium ">
                      <span>
                        {" "}
                        While replacing the battery or cleaning the terminals,
                        why is it important to remove the ground wire first?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Before you start, always check the type of grounding
                      system the vehicle has. If you remove the positive
                      connector first in a negative ground system, a spark may
                      be created in the process. It could happen if the metal
                      tool you're using to remove the positive terminal
                      connector comes in contact with any piece of metal in the
                      car. If you are working near the battery when this occurs,
                      it might create fire source causing the battery to
                      explode. It's extremely important to remove the ground
                      source first.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        {" "}
                        1.Battery Recycling… How to handle used batteries with
                        care
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Batteries contain a number of heavy metals and toxic
                      chemicals which is why they must be disposed off with care
                      to prevent contamination and pollution. SF Batteries
                      recommends their customers to dispose their batteries
                      responsibly at proper waste management centres where they
                      can be recycled.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>Q.How do I safely jump-start my battery?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      A. WARNING:Modern vehicles with electronic management
                      systems should not be jump started without "protected"
                      jump starter leads and it is necessary to refer to the
                      owner's handbook for jump starting procedures for such
                      vehicles. Vehicle Jump Starting procedure is as follows
                      and should be followed carefully: Ensure battery for
                      jump-starting and vehicle battery are of the same declared
                      voltage (say 12V) Turn off all electrical loads, check
                      vehicles so that they are not touching each other and are
                      in neutral. Check that vehicles have the same terminal
                      earthed, If not, refer to manufacturers' instructions.
                      Check that cables are not frayed or damaged. Carry out the
                      following steps in sequence:
                      <br />
                      <br />
                      On negative grounded system, connect positive of
                      jump-starting battery to the positive of the stalled car
                      battery . Connect one end of other cable to negative (-)
                      terminal of booster battery. Connect other cable away from
                      battery, to engine block or car frame of the vehicle to be
                      started. Make sure cables are away from fan blades and
                      other moving vehicle parts. If vehicle does not start
                      within 30 seconds, call an auto electrician. After
                      starting, remove cables in reverse order, starting with
                      one connected to engine block or car frame.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        Q.How do I know for sure that my battery needs
                        replacement?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Many other problems can keep a car from starting. It is
                      advisable to do some troubleshooting. SF Batteries
                      authorised dealers test batteries free of charge, so as a
                      good first step visit your nearest SF Batteries Dealer to
                      be sure of your battery.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> Q.What can excessive heat do to a battery?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Heat can deteriorate a battery's life quicker by
                      evaporating the water from the electrolyte, and corroding
                      and weakening the positive grids.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        {" "}
                        Q.What are the features that should be considered when
                        buying a battery?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Size:The dimensions of your original battery. Power:The
                      Ampere hour required to power your vehicle.
                      Warranty:Automotive batteries are backed by a warranty
                      package. Choose the one that is right for your vehicle's
                      needs.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
