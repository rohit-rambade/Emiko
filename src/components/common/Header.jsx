import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import SubMenu from "./SubMenu";
import navMenu from "../../constants/NavMenu.json";
import { FaPhone, FaXmark } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";

import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const handleNavLinkClick = (hasSubMenu) => {
    if (isMobile && !hasSubMenu) {
      setIsOpen(false);
    }
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div className="sticky top-0 z-50 w-full p-2 mx-auto bg-white font-poppins md:p-2 ">
      <header>
        <nav>
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-2 mx-auto md:p-0 ">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-10 md:h-16" alt="Emiko Logo" />
            </Link>
            <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <a
                type="button"
                href="tel:18001204954"
                className="flex w-auto px-1 py-2 text-sm font-medium text-center text-black rounded-lg md:space-x-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <FaPhone className="hidden md:block" size={20} color="black" />
                <span className="font-semibold text-white">1800 120 4954</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className=" md:hidden"
              >
                {isOpen ? <FaXmark size={35} /> : <SlMenu size={35} />}
              </button>
            </div>
            <div
              className={`absolute w-full ${
                isOpen ? "block" : "hidden"
              } top-full bg-white  left-0  md:p-2  flex flex-col  gap-y-3 md:flex-row  text-left   md:relative md:w-auto md:flex`}
            >
              <div className="flex">
                <ul className="flex flex-col w-full p-4 md:items-center md:p-0 h md:space-x-8 rtl:space-x-reverse md:flex-row ">
                  {navMenu.map((menu) => {
                    return (
                      <div key={menu.id}>
                        {!menu.isSubMenu ? (
                          <li>
                            <NavLink
                              to={menu.link}
                              className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-3 md:py-0 ${
                                location.pathname === menu.link
                                  ? "text-red-500"
                                  : "text-black"
                              }`}
                              onClick={() => {
                                handleNavLinkClick(); // Close the menu on mobile after clicking a link
                              }}
                              aria-current="page"
                            >
                              {menu.title}
                            </NavLink>
                          </li>
                        ) : (
                          <div
                            className="relative cursor-pointer md:p-2"
                            onClick={() => {
                              toggleSubMenu(menu.id);
                              // Close menu on mobile after selecting submenu
                            }}
                            onMouseEnter={() => {
                              if (!isMobile) {
                                setActiveMenu(menu.id);
                              }
                            }}
                            onMouseLeave={() => {
                              if (!isMobile) {
                                setActiveMenu(null);
                              }
                            }}
                            key={menu.id}
                          >
                            <div className="flex items-center space-x-3 ">
                              <li className="relative  w-fit block items-center after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center py-3 md:py-0">
                                {menu.title}
                              </li>
                            </div>
                            {menu.submenu && activeMenu === menu.id && (
                              <SubMenu
                                navMenu={menu}
                                index={activeMenu}
                                closeNavbar={closeNavbar}
                              />
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
