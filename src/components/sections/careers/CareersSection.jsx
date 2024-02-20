import React from "react";
import circle from "../../../assets/careers/careerCircle.png";
import finance from "../../../assets/careers/finance.png";
import supply from "../../../assets/careers/supply.png";
import networking from "../../../assets/careers/networking.png";
import research from "../../../assets/careers/r&d.png";
import sales from "../../../assets/careers/sales.png";
import human from "../../../assets/careers/humanresource.png";

const CareersSection = () => {
  return (
    <>
      <div className="flex justify-center content-center">
        <img src={circle} alt="" className="w-1/2"></img>
      </div>
      <div className="flex justify-center  text-center">
        <div className="bg-slate-200 w-1/2 text-blue-600 font-bold text-4xl font-kameron ">
          <h3>
            We promote a culture of collaboration, freedom and innovation.
          </h3>
        </div>
        <div className="bg-slate-400 w-1/2">
          <p>
            Embrace a dynamic work culture that fosters creativity,
            collaboration, and innovation. We prioritize diversity, encourage
            continuous learning, and value work-life balance. Join a team-driven
            environment where every voice is heard, ideas are celebrated, and
            excellence is recognized. Elevate your career in a supportive and
            inclusive workplace.
          </p>
        </div>
      </div>
      {/* Our departments */}
      <div className="my-8">
        <section class="bg-gray-300 ">
          <div class="container px-6 py-8 mx-auto">
            <h2 class="text-2xl font-bold text-center text-blue-800 capitalize lg:text-6xl">
              More about EMIKO Battery
            </h2>

            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div class="w-full max-w-xs text-center bg-white">
                <img
                  class="object-cover object-center w-full  rounded-full p-20 bg-white"
                  src={finance}
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">
                    Blogs and Articles
                  </h3>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={supply}
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">Careers</h3>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src=""
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">FAQ</h3>
                </div>
              </div>
            </div>
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src=""
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">
                    Blogs and Articles
                  </h3>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src=""
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">Careers</h3>
                </div>
              </div>

              <div class="w-full max-w-xs text-center">
                <img
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src=""
                  alt="avatar"
                />

                <div class="mt-2">
                  <h3 class="text-lg font-medium text-black ">FAQ</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersSection;
