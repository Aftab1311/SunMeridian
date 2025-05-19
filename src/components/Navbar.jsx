import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import logo from "../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

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
            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 ${navLinkClass({ isActive: false })}`}
                onClick={() => setIsAboutDropdownOpen && setIsAboutDropdownOpen((prev) => !prev)}
                type="button"
              >
                <span>About Us</span>
                <IoIosArrowDown className="w-4 h-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <NavLink 
                  to="/about" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsAboutDropdownOpen && setIsAboutDropdownOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink 
                  to="/directors-message" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsAboutDropdownOpen && setIsAboutDropdownOpen(false)}
                >
                  Director's Message
                </NavLink>
              </div>
            </div>

            <NavLink to="/academic-excellence" className={navLinkClass}>Academic Excellence</NavLink>
            <NavLink to="/admission" className={navLinkClass}>Admission</NavLink>
            
            {/* Gallery Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 ${navLinkClass({ isActive: false })}`}
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
              >
                <span>Gallery</span>
                <IoIosArrowDown className={`w-4 h-4 transition-transform ${isGalleryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${isGalleryDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <NavLink 
                  to="/gallery" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsGalleryDropdownOpen(false)}
                >
                  Photo Gallery
                </NavLink>
                <NavLink 
                  to="/events" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsGalleryDropdownOpen(false)}
                >
                  Events
                </NavLink>
                <NavLink 
                  to="/activities" 
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setIsGalleryDropdownOpen(false)}
                >
                  Activities
                </NavLink>
              </div>
            </div>

            <NavLink to="/notices" className={navLinkClass}>Notices</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden w-[200px] lg:flex justify-end">
            <NavLink 
              to="/enquiry"
              className="border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
            >
              Enquire Now
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
            {/* About Us Dropdown in Mobile */}
            <div className="relative">
              <button 
                className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors text-gray-800"
                onClick={() => setIsAboutDropdownOpen && setIsAboutDropdownOpen((prev) => !prev)}
              >
                <span>About Us</span>
                <IoIosArrowDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4">
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                  <NavLink 
                    to="/directors-message" 
                    className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Director's Message
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink 
              to="/academic-excellence" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Academic Excellence
            </NavLink>
            <NavLink 
              to="/admission" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admission
            </NavLink>

            {/* Gallery Dropdown in Mobile */}
            <div className="relative">
              <button 
                className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 rounded transition-colors text-gray-800"
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
              >
                <span>Gallery</span>
                <IoIosArrowDown className={`w-4 h-4 transition-transform ${isGalleryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isGalleryDropdownOpen && (
                <div className="pl-4">
                  <NavLink 
                    to="/gallery" 
                    className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Photo Gallery
                  </NavLink>
                  <NavLink 
                    to="/events" 
                    className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </NavLink>
                  <NavLink 
                    to="/activities" 
                    className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Activities
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink 
              to="/notices" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Notices
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 px-4 hover:bg-gray-100 rounded transition-colors ${isActive ? 'text-orange-500' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* Get Started Button - Mobile */}
            <div className="mt-4">
              <NavLink 
                to="/enquiry"
                className="block text-center border-2 border-black rounded-tr-3xl rounded-bl-3xl px-6 py-2 font-semibold hover:bg-black hover:text-white transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;