import React from "react";
import worker from "../../../assets/aboutUs/workerLogo.jpeg";

const AboutUs = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                JPG Batteries Pvt. Ltd., a subsidiary of a prominent 700 crore
                group company involved in the lead acid battery industry since
                1988, is embarking on a new venture in the realm of alternative
                power energy solutions. Through its flagship brand, EMIKO, the
                company aims to revolutionize the industry by offering
                state-of-the-art products incorporating the latest advancements
                and cutting-edge technology. As a trusted battery manufacturer,
                we offer a wide range of high quality batteries for inverter,
                solar & E-rickshaw under our brand EMIKO. By delving into power
                backup systems, solar power solutions, e-rickshaws, automotive
                batteries and two-wheeler batteries, JPG Batteries Pvt. Ltd.
                seeks to elevate the standards of the market.
              </p>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center">
              <img
                src={worker}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <img
                src={worker}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              ></img>
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                JPG Batteries Pvt. Ltd., a subsidiary of a prominent 700 crore
                group company involved in the lead acid battery industry since
                1988, is embarking on a new venture in the realm of alternative
                power energy solutions. Through its flagship brand, EMIKO, the
                company aims to revolutionize the industry by offering
                state-of-the-art products incorporating the latest advancements
                and cutting-edge technology. As a trusted battery manufacturer,
                we offer a wide range of high quality batteries for inverter,
                solar & E-rickshaw under our brand EMIKO. By delving into power
                backup systems, solar power solutions, e-rickshaws, automotive
                batteries and two-wheeler batteries, JPG Batteries Pvt. Ltd.
                seeks to elevate the standards of the market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
