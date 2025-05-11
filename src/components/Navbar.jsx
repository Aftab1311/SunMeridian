import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import logo from "../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinkClass = ({ isActive }) => 
    `hover:text-orange-500 transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`;

  return (
    <nav className={`bg-[#F9F6F1] shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='w-[200px] flex items-center justify-start'>
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              <img src={logo} alt="Logo" className={`w-16 h-16 transition-all duration-300 ${isScrolled ? 'w-12 h-12' : ''}`} />
            </NavLink>
          </div>
         
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/notices" className={navLinkClass}>Notices</NavLink>
            <NavLink to="/events" className={navLinkClass}>Upcoming Events</NavLink>
            <NavLink to="/activities" className={navLinkClass}>Activities</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink> 
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden w-[200px] lg:flex justify-end">
            <NavLink 
              to="/contact"
              className="border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
            >
              Get Started
            </NavLink>
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
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/notices" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Notices
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Upcoming Events
            </NavLink>
            <NavLink 
              to="/activities" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Activities
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            {/* Get Started Button - Mobile */}
            <div className="mt-4">
              <NavLink 
                to="/contact"
                className="block text-center border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;