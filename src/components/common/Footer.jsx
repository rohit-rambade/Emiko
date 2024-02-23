import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white p-5">
      <div className="">
        <div className="flex flex-col md:flex-row gap-y-6">
          <div className="md:w-1/4">
            <div className="">
              <p className=" uppercase ">About Us</p>
            </div>
            <div className="flex flex-col">
              <p className="mt-4 max-w-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>

              <ul className="mt-8 flex gap-6 flex-col">
                <li>
                  <div className="flex   gap-x-4">
                    <div>
                      <FaLocationArrow
                        size={30}
                        color="black"
                        className="mt-2"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eum, aperiam.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4">
                    <div>
                      <FaPhone size={30} color="black" className="mt-1" />
                    </div>
                    <p>18001204954</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-x-4">
                    <div>
                      <MdEmail size={30} color="black" className="mt-1" />
                    </div>
                    <p>connect@emiko.co.in</p>
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
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Where to buy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      Contact Us
                    </a>
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
                    Autometive battery
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
                    E-Rikshaws
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Solor Batteries
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4">
            <form className="flex flex-col gap-y-4">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Name*"
                required
              />
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="Email*"
                required
              />
              <input
                type="text"
                id="contactno"
                placeholder="Contact*"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                required
              />
              <textarea
                id="message"
                rows="4"
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
