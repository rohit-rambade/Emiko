import React from "react";
import worker from "../assets/aboutUs/workerr.jpg";
import group from "../assets/aboutUs/group.jpg";

import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-black text-lg">
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
            <div className="mt-12 md:mt-0 order-last md:order-first">
              <img
                src={group}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              ></img>
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                OUR MISSION
              </h2>
              <p className="mt-4 text-black text-lg">
                We will lead the innovation and delivery of energy storage
                solutions to power the world safely and sustainably.
                <br />
                <h3 className="py-4 text-3xl">Our Values</h3>
                <ul className="list-disc px-6">
                  <li> We do the right thing, always</li>
                  <li> We act with honesty, integrity and respect</li>
                  <li> We are accountable to our customers and each other</li>
                  <li> We succeed as one united global team</li>
                  <li>We innovate with purpose</li>
                  <li>We are driven to perform better every day</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default About;
