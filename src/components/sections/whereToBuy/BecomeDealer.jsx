import React, { useState } from "react";
import findDealer from "../../../assets/whereToBuy/findDealer3.jpg";

const BecomeDealer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [location, setLocation] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    const phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(value)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted phone number:", phoneNumber);
    console.log("Submitted location:", location);
    // Add your form submission logic here
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  return (
    <>
      <div className="font-poppins">
        {/* -----------------------------------------Banner------------------------------------ */}
        <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={findDealer}
            alt="Banner Image"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="min-h-[500px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 class="sm:text-6xl text-2xl font-bold mb-6">Grow With Us!</h2>
            <p class="text-xl md:text-3xl text-center text-gray-200 font-semibold">
              Empower Your Business: Become A Dealer Today!
            </p>
            <a
              href="javascript:void(0)"
              class="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white hover:border-primary rounded hover:bg-primary hover:text-black transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* -----------------------------------------Banner------------------------------------ */}
        <div className="max-w-screen-md mx-auto p-5 ">
          <h1 className=" text-center text-2xl md:text-4xl font-semibold text-primary py-4">
            QUICK ENQUIRY
          </h1>
          <div className="grid grid-cols-1  border">
            <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Firstname"
                  />
                  <p className="text-primary text-base ">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Business Name
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="Enter your company name"
                  rows={1} // Increase the number of rows
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="grid-email"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="Email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                {phoneNumberError && (
                  <span style={{ color: "red" }}>{phoneNumberError}</span>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  business Address
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="Please enter your full address [City, District,  State, Country]"
                  rows={5} // Increase the number of rows
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Type of business
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder="e.g. Retail, Service"
                  rows={5} // Increase the number of rows
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Number of years in business
                </label>
                <input
                  type="num"
                  id="noOfYears"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter number of years in business"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                {phoneNumberError && (
                  <span style={{ color: "red" }}>{phoneNumberError}</span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Why do you want to become a dealer for Emiko Battery?
                </label>
                <textarea
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleLocationChange}
                  placeholder=""
                  rows={5} // Increase the number of rows
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Additional Message/Battery Requirement
                  </label>
                  <textarea
                    rows="8"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <button
                    className="shadow bg-primary hover:bg-red-500 focus:shadow-outline focus:outline-none text-black font-semibold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeDealer;
