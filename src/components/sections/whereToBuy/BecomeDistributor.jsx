import React, { useState } from "react";
import becomeDistributor from "../../../assets/whereToBuy/cropped-becomeDistributor.jpg";
import useFormSubmission from "../../../hooks/useFormSubmission";
import SuccessPopUp from "../../common/SuccessPopUp";
import { Fade } from "react-awesome-reveal";

const initialState = {
  firstname: "",
  lastname: "",
  companyName: "",
  email: "",
  contact: "",
  address: "",
  noOfYearsInBusiness: "",
  whyYouWantToBecomeDealer: "",
  additionalMessage: "",
};
const BecomeDistributor = () => {
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
    "https://docs.google.com/forms/d/1JzYPGkRFKUX_z5pNOu3x7RO4Xdmv8erjfiaTYBRoCM8/formResponse";

  // Define Google Form keys mapping with form data fields
  const googleFormFields = {
    "entry.678522358": formData.firstname,
    "entry.1348935635": formData.lastname,
    "entry.997488626": formData.companyName,
    "entry.1000160308": formData.email,
    "entry.636224220": formData.contact,
    "entry.452422522": formData.address,
    "entry.812980961": formData.noOfYearsInBusiness,
    "entry.1952420369": formData.whyYouWantToBecomeDealer,
    "entry.123839028": formData.additionalMessage,
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
    <>
      <div className="font-poppins">
        {/* -----------------------------------------Banner------------------------------------ */}
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <img
            src={becomeDistributor}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[500px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <Fade direction="up" triggerOnce="true">
              <h2 className="sm:text-6xl text-2xl font-bold mb-6">
                "Power Up Your Potential: Become an
                <span className="text-primary">Emiko Battery</span>{" "}
                Distributor!"
              </h2>
            </Fade>

            <a
              href="javascript:void(0)"
              className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white hover:border-primary rounded hover:bg-primary hover:text-black transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* -----------------------------------------Banner------------------------------------ */}
        <div className="max-w-screen-md mx-auto p-5 ">
          <Fade direction="up" triggerOnce="true">
            <h1 className=" text-center text-2xl md:text-4xl font-semibold text-primary py-4">
              QUICK ENQUIRY
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <div className="grid grid-cols-1  border">
              <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="lastname"
                      name="lastname"
                      required
                      value={formData.lastname}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Lastname"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyName"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your company name"
                    rows={1} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></input>
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
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contact"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
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
                    htmlFor="address"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Country/Region,State,District
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    rows={5} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="noOfYearsInBusiness"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Number of years in business
                  </label>
                  <input
                    type="num"
                    id="noOfYearsInBusiness"
                    name="noOfYearsInBusiness"
                    required
                    value={formData.noOfYearsInBusiness}
                    onChange={handleInputChange}
                    placeholder="Enter number of years in business"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="whyYouWantToBecomeDealer"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Why do you want to become a distributor for Emiko Battery?
                  </label>
                  <textarea
                    id="whyYouWantToBecomeDealer"
                    name="whyYouWantToBecomeDealer"
                    required
                    value={formData.whyYouWantToBecomeDealer}
                    onChange={handleInputChange}
                    placeholder=""
                    rows={5} // Increase the number of rows
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="additionalMessage"
                    >
                      Additional Message/Battery Requirement
                    </label>
                    <textarea
                      rows="8"
                      id="additionalMessage"
                      name="additionalMessage"
                      required
                      value={formData.additionalMessage}
                      onChange={handleInputChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-primary hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-6 rounded"
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
          </Fade>
        </div>
      </div>
    </>
  );
};

export default BecomeDistributor;
