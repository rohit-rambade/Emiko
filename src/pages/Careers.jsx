import React, { useState } from "react";
import circle from "../assets/careers/careerCircle.png";
import { departments } from "../constants/departments";
import SuccessPopUp from "../components/common/SuccessPopUp";
import useFormSubmission from "../hooks/useFormSubmission";

const initialState = {
  fullname: "",
  email: "",
  contact: "",
  location: "",
  areaOfInterest: "",
  additionalMessage: "",
};
const Careers = () => {
  const [formData, setFormData] = useState(initialState);
  const { submitForm, showSuccessModal, setShowSuccessModal } =
    useFormSubmission();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // URL of the Google Form endpoint where the form data will be submitted
  const googleFormUrl =
    "https://docs.google.com/forms/d/1K4Y1Ar_QqF0PEcU5NdzUV1-XLuWUcDARrkpmHFZO3o4/formResponse";

  // Define Google Form keys mapping with form data fields
  const googleFormFields = {
    "entry.562121278": formData.fullname,
    "entry.2017627683": formData.email,
    "entry.138380570": formData.contact,
    "entry.2112131485": formData.location,
    "entry.233252045": formData.areaOfInterest,
    "entry.1780225360": formData.additionalMessage,
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the submitForm function with necessary parameters
    submitForm(
      formData, // Form data to be submitted
      googleFormUrl, // URL of the Google Form
      googleFormFields, // Mapping of form fields to Google Form keys
      setFormData, // Function to clear form data after submission
      initialState // Initial state of the form data
    );
  };
  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="font-poppins">
      <div className="flex justify-center content-center bg-slate-100">
        <img src={circle} alt="" className="md:w-1/2"></img>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-left bg-gray-200 px-6 md:px-24 py-4 md:py-12">
        <div className=" md:w-1/2 text-blue-600 font-semibold text-4xl font-poppins ">
          <h3 className="my-6 md:leading-tight">
            We promote a culture of collaboration, freedom and innovation.
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className="text-xl">
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
        <section className=" ">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-4xl font-semibold text-center text-blue-800 capitalize">
              Our Departments
            </h2>

            <div className="grid gap-8 mt-8 place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
              {departments.map((department) => {
                return (
                  <div
                    className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-white shadow-xl gap-y-4 transition-all duration-700 hover:scale-110 cursor-pointer"
                    key={department.id}
                  >
                    <img
                      className=" object-cover object-center w-full  px-20 bg-white "
                      src={department.imageURL}
                      alt="avatar"
                    />
                    <h3 className="text-lg font-normal text-black p-4 ">
                      {department.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      {/* ------------------------------------------------------Form-------------------------------------- */}
      <div className="max-w-screen-md mx-auto p-5 ">
        <div className="  flex flex-col gap-y-2 text-center py-4">
          <p className="text-lg">
            If you think you can innovate and apply your knowledge to the best
            of use, write to us at{" "}
            <span className="s text-primary">
              <a href="mailto:connect@emiko.co.in">connect@emiko.co.in</a>
            </span>
            to apply.
          </p>
          <h1 className="text-blue-800 text-xl">
            Alternatively, please submit your application here
          </h1>
        </div>
        <div className="grid grid-cols-1  border">
          <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstname"
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  required
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email@example.com"
                value={formData.email}
                onChange={handleInputChange}
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
                name="contact"
                required
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="location"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Location
              </label>
              <textarea
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter your address"
                rows={5} // Increase the number of rows
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="location"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Area of interest
              </label>
              <textarea
                id="location"
                name="areaOfInterest"
                required
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                placeholder=""
                rows={5} // Increase the number of rows
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Additional Message
              </label>
              <textarea
                rows="8"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
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
          {showSuccessModal && (
            <SuccessPopUp handleCloseModal={handleCloseModal} />
          )}
        </div>
      </div>
      {/* ------------------------------------------------------form--------------------------------------- */}
    </div>
  );
};

export default Careers;
