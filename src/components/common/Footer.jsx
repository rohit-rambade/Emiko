import React, { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form submitted:", formData);

      // Clear form data after submission
      setFormData({
        fullname: "",
        email: "",
        contact: "",
        message: "",
      });

      // Use a more descriptive key in the form data
      const response = await fetch(
        "https://docs.google.com/forms/d/1KTpgWgaY-67kmIS-NWrlAakY_C0Qa2x2OIYXtqUuluc/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: new URLSearchParams({
            "entry.2103262084": formData.fullname,
            "entry.495060411": formData.email,
            "entry.727878866": formData.contact,
            "entry.879114805": formData.message,
          }).toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  console.log(formData);
  return (
    <footer id="footer-section" className="bg-gray-400 text-white p-5">
      <div className="">
        <div className="flex flex-col md:flex-row gap-y-6">
          <div className="md:w-1/4">
            <div className="">
              <p className=" uppercase ">About Us</p>
            </div>
            <div className="flex flex-col">
              <p className="mt-4 max-w-xs">
                EMIKO, by JPG Batteries, enters alternative energy with
                cutting-edge tech, aiming to revolutionize the industry across
                diverse segments like solar, e-rickshaws, and batteries.
              </p>

              <ul className="mt-8 flex gap-6 flex-col">
                <li>
                  <div className="flex   gap-x-4 items-center">
                    <div>
                      <FaLocationArrow
                        size={30}
                        color="black"
                        className="mt-2"
                      />
                    </div>
                    <p>EMIKO House, Viman Nagar, Pune, Maharashtra, India.</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <FaPhone size={30} color="black" className="mt-1" />
                    </div>
                    <a href="tel:18001204954">18001204954</a>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <MdEmail size={30} color="black" className="mt-1" />
                    </div>
                    <a href="mailto:connect@emiko.co.in">connect@emiko.co.in</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row gap-y-4 justify-around">
            <div className="flex ">
              <div>
                <p className="text-white uppercase">Quick Links</p>

                <ul className="mt-6 space-y-4 text-xl uppercase">
                  <li>
                    <Link
                      to="/"
                      className="text-white transition hover:opacity-75"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      className="text-white transition hover:opacity-75"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="products"
                      className="text-white transition hover:opacity-75"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="carrers"
                      className="text-white transition hover:opacity-75"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/where-to-buy"
                      className="text-white transition hover:opacity-75"
                    >
                      Where to buy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <p className="text-white uppercase">Products</p>

              <ul className="mt-6 space-y-4 text-xl ">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Automotive battery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Inveter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Marine Battery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    E-Rickshaw
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Solar Batteries
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Name*"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                id="contact"
                placeholder="Contact*"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                required
              />
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                name="message"
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-primary hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Send
              </button>
            </form>
            {showSuccessModal && (
              <div
                id="successModal"
                tabindex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
              >
                <div className="p-4 mx-auto w-full max-w-md">
                  <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Success</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Thank you for your message! We will get back to you soon.
                    </p>
                    <button
                      className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
