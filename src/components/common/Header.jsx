import React, { useState } from "react";

import logo from "../../assets/logo.png";
import SubMenu from "./SubMenu";
import navMenu from "../../constants/NavMenu.json";
import { FaAlignRight, FaPhone, FaXmark } from "react-icons/fa6";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="sticky top-0 w-full bg-white mx-auto font-poppins z-50 p-2 md:p-2 ">
      <header>
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-12 md:h-16" alt="Emiko Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-black flex w-auto space-x-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  "
              >
                <FaPhone size={20} color="black" />
                <span>18001204954</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className=" md:hidden  "
              >
                {isOpen ? <FaXmark size={30} /> : <FaAlignRight size={30} />}
              </button>
            </div>
            <div
              className={`absolute w-full ${
                isOpen ? "block" : "hidden"
              } top-full bg-white  left-0  md:p-2  flex flex-col  gap-y-3 md:flex-row  text-left   md:relative md:w-auto md:flex`}
            >
              <div className="flex">
                <ul className="flex flex-col  w-full p-4 md:p-0 h    md:space-x-8 rtl:space-x-reverse md:flex-row   ">
                  {navMenu.map((menu) => {
                    return (
                      <div key={menu.id}>
                        {!menu.isSubMenu ? (
                          <li>
                            <a
                              href="#"
                              className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                              aria-current="page"
                            >
                              {menu.title}
                            </a>
                          </li>
                        ) : (
                          <div
                            className="relative"
                            onClick={() => toggleSubMenu(menu.id)}
                            key={menu.id}
                          >
                            <li>
                              <a
                                href="#"
                                className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                              >
                                {menu.title}
                              </a>
                            </li>
                            {menu.submenu && (
                              <SubMenu navMenu={menu} index={activeMenu} />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
