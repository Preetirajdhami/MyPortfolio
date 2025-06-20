"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={closeMenu}
        />
      )}

      <header className="sticky top-0 z-50 h-20 bg-base shadow-lg">
        <div className="responsive-padding mx-auto flex items-center justify-between py-5  relative">
          {/* Hamburger Button */}
          <div className="md:hidden flex-shrink-0 text-textColor">
            <button onClick={toggleDropdown} className="focus:outline-none">
              <RxHamburgerMenu className="text-2xl font-bold" />
            </button>
          </div>

          {/* Logo and Title */}
          <div className="flex flex-1 text-center items-center justify-center md:justify-between w-full md:w-auto md:mx-0 mx-auto">
            <Link
              href="/"
              className=" responsive-text font-bold flex items-center space-x-2"
            >
              <h2 className="font-semibold tetx-base text-textColor">PREETI RAJDHAMI</h2>
            </Link>
          </div>

          {/* Mobile Nav Panel */}
          <nav
            className={`
    fixed top-0 left-0 h-screen w-64 bg-base z-30 p-6
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:static md:h-auto md:w-auto md:translate-x-0 md:flex md:items-center md:space-x-8 md:p-0 md:bg-transparent md:shadow-none
  `}
          >
            {/* Logo at top of mobile menu */}
            <div className="md:hidden mb-4 flex items-center justify-between">
              <Link href="/" onClick={closeMenu}>
                <h2 className="text-xl font-bold text-textColor">
                  PREETI RAJDHAMI
                </h2>
              </Link>
              <button onClick={closeMenu} className="text-textColor text-2xl">
                <RxCross2 />
              </button>
            </div>

            {/* Links */}
            <div className=" text-lg xl:text-xl  flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <Link
                href="/"
                onClick={closeMenu}
                className={`${
                  currentPath === "/" ? "text-primary" : "text-textColor"
                } font-bold block`}
              >
                HOME
              </Link>
              <Link
                href="#about"
                onClick={closeMenu}
                className={`${
                  currentPath === "#about" ? "text-primary" : "text-textColor"
                } font-bold block`}
              >
                ABOUT
              </Link>
              <Link
                href="#project"
                onClick={closeMenu}
                className={`${
                  currentPath === "#project" ? "text-primary" : "text-textColor"
                } font-bold block`}
              >
                PROJECTS
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className={`${
                  currentPath === "#contact" ? "text-primary" : "text-textColor"
                } font-bold block`}
              >
                CONTACT
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
