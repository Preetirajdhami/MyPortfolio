"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location; 
      setCurrentPath(pathname);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0   z-50 h-20 bg-bgTheme" 
    style={{
      background:
        "#d7deff",
    }} >
      <div className="lg:px-32 sm:px-7 md:px-8 mx-auto flex items-center justify-between py-4 px-4 relative">

        {/* Hamburger Button */}
        <div className="md:hidden flex-shrink-0 text-textColor">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <RxHamburgerMenu className="text-2xl font-bold" />
          </button>
        </div>

        {/* Logo and Title */}
        <div className="flex flex-1 text-center items-center justify-center md:justify-between w-full md:w-auto md:mx-0 mx-auto">
          <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
            
            <h2 className="font-semibold text-textColor">PREETI RAJDHAMI</h2>
          </Link>
        </div>

        {/* Dropdown Menu for Mobile */}
        <nav
          className={`${isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-5 font-light md:left-auto rounded-md    w-48 md:w-auto z-20 shadow-lg md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link
              href="/"
              className={`${currentPath === '/' ? 'text-ButtonC' : 'text-textColor'
                } font-bold  block py-2 px-4 md:py-0 md:px-0`}
            >
              HOME
            </Link>
            <Link
              href="#about"
              className={`${currentPath === '#about' ? 'text-ButtonC' : 'text-textColor'
                } font-bold  block py-2 px-4 md:py-0 md:px-0`}
            >
              ABOUT
            </Link>
            <Link
              href="#project"
              className={`${currentPath === '#project' ? 'text-ButtonC' : 'text-textColor'
                } font-bold  block py-2 px-4 md:py-0 md:px-0`}
            >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              className={`${currentPath === '#contact' ? 'text-ButtonC' : 'text-textColor'
                } font-bold  block py-2 px-4 md:py-0 md:px-0`}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;
