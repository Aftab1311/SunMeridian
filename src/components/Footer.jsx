import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Adjust the path to your logo

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f0e9dd] to-[#e0d4bc] text-gray-800 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-8 md:mb-12">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <img src={logo} alt="Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            <h3 className="text-xl md:text-2xl font-bold text-[#5e210e] mt-2">Sun Meridian</h3>
            <p className="text-xs sm:text-sm max-w-xs mt-2">Igniting curiosity and creativity in children through innovative learning experiences.</p>
            <div className="flex space-x-4 mt-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Icon size={20} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className='w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-600">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2">
                {['About Us', 'Programs', 'Testimonials', 'Success Stories', 'FAQs'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a href="#" className="text-xs sm:text-sm hover:text-orange-600 transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-600">Our Programs</h4>
              <ul className="space-y-1 md:space-y-2">
                {['STEM Learning', 'Creative Arts', 'Language Skills', 'Social Development', 'Summer Camp'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <a href="#" className="text-xs sm:text-sm hover:text-orange-600 transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center sm:text-left"
            >
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-600">Contact Us</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
                  <span className="text-orange-600">📍</span>
                  <span>123 Learning St, Education City, 10101</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <span className="text-orange-600">📞</span>
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <span className="text-orange-600">✉️</span>
                  <span>info@sunmeridian.com</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent my-6 md:my-8"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-center md:text-left"
          >
            © {currentYear} Sun Meridian School. All rights reserved.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-xs hover:text-orange-600 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;