import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosMenu, IoIosClose } from 'react-icons/io';
import logo from "../assets/logo.png";

function Navbar() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isProgramsOpen) setIsProgramsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProgramsOpen]);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`bg-[#F9F6F1] shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='w-[200px] flex items-center justify-start'>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <img src={logo} alt="Logo" className={`w-16 h-16 transition-all duration-300 ${isScrolled ? 'w-12 h-12' : ''}`} />
          </Link>

          </div>
         
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-gray-800 font-medium">
            <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProgramsOpen(!isProgramsOpen);
                }}
                className="flex items-center hover:text-orange-500 focus:outline-none transition-colors"
              >
                Programs
                <IoIosArrowDown className={`ml-1 transition-transform ${isProgramsOpen ? 'transform rotate-180' : ''}`} />
              </button>

              {isProgramsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link to="/program1" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Program 1</Link>
                  <Link to="/program2" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Program 2</Link>
                  <Link to="/program3" className="block px-4 py-2 hover:bg-gray-100 transition-colors">Program 3</Link>
                </div>
              )}
            </div>

            {/* <Link to="/resources" className="hover:text-orange-500 transition-colors">Resources</Link>
            <Link to="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>*/}
            <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link> 
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden  w-[200px] lg:flex justify-end">
            <Link 
              to="/get-started"
              className="border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <IoIosClose className="w-8 h-8" />
            ) : (
              <IoIosMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-md mt-2 py-4 px-4">
            <Link 
              to="/about" 
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProgramsOpen(!isProgramsOpen);
                }}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded flex justify-between items-center transition-colors"
              >
                Programs
                <IoIosArrowDown className={`ml-1 transition-transform ${isProgramsOpen ? 'transform rotate-180' : ''}`} />
              </button>

              {isProgramsOpen && (
                <div className="pl-6 mt-1">
                  <Link 
                    to="/program1" 
                    className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program 1
                  </Link>
                  <Link 
                    to="/program2" 
                    className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program 2
                  </Link>
                  <Link 
                    to="/program3" 
                    className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program 3
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/resources" 
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/instructor" 
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Instructor
            </Link>

            {/* Get Started Button - Mobile */}
            <div className="mt-4">
              <Link 
                to="/get-started"
                className="block text-center border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>

     
    </nav>
  );
}

export default Navbar;