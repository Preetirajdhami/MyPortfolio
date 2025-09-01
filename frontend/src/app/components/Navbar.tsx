"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#project", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" }
  ];

  return (
    <>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={closeMenu}
        />
      )}

      <motion.header 
        className={`fixed top-0 z-50 w-full h-20 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-base/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="responsive-padding mx-auto flex items-center justify-between py-5 relative">
          
          <div className="md:hidden flex-shrink-0 text-textColor">
            <motion.button 
              onClick={toggleDropdown} 
              className="focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RxHamburgerMenu className="text-2xl font-bold" />
            </motion.button>
          </div>

          {/* Logo and Title */}
          <div className="flex flex-1 text-center items-center justify-center md:justify-between w-full md:w-auto md:mx-0 mx-auto">
            <Link
              href="/"
              className="responsive-text font-bold flex items-center space-x-2"
            >
              <motion.h2 
                className="font-semibold text-base text-textColor"
                whileHover={{ scale: 1.05 }}
              >
                PREETI RAJDHAMI
              </motion.h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`${
                    currentPath === item.href ? "text-primary" : "text-textColor"
                  } font-bold hover:text-primary transition-colors duration-200`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                className="fixed top-0 left-0 h-screen w-64 bg-base z-30 p-6 md:hidden shadow-2xl"
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25 }}
              >
                {/* Logo at top of mobile menu */}
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={closeMenu}>
                    <h2 className="text-xl font-bold text-textColor">
                      PREETI RAJDHAMI
                    </h2>
                  </Link>
                  <motion.button 
                    onClick={closeMenu} 
                    className="text-textColor text-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <RxCross2 />
                  </motion.button>
                </div>

                {/* Links */}
                <div className="text-lg xl:text-xl flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`${
                        currentPath === item.href ? "text-primary" : "text-textColor"
                      } font-bold block hover:text-primary transition-colors duration-200`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile menu decoration */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-px bg-gradient-to-r from-primary to-transparent"></div>
                  <p className="text-sm text-gray-600 mt-4">Let&apos;s build something amazing together</p>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;