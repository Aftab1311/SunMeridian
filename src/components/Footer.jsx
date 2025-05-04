import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Adjust the path to your logo

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f0e9dd] to-[#e0d4bc] text-gray-800 py-12 px-6">
      <div className="w-full container mx-auto">
        <div className="flex mb-12">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
            <h3 className="text-2xl font-bold text-[#5e210e]">Sun Meridian</h3>
            <p className="text-sm">Igniting curiosity and creativity in children through innovative learning experiences.</p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <Icon size={25} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className='w-[65%] flex justify-between '>
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Testimonials', 'Success Stories', 'FAQs'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="text-sm hover:text-orange-600 transition-colors">{item}</a>
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
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Our Programs</h4>
            <ul className="space-y-2">
              {['STEM Learning', 'Creative Arts', 'Language Skills', 'Social Development', 'Summer Camp'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="text-sm hover:text-orange-600 transition-colors">{item}</a>
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
          >
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="mt-1 text-orange-600">📍</span>
                <span>123 Learning St, Education City, 10101</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-600">📞</span>
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-2">
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
          className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent my-8"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs mb-4 md:mb-0"
          >
            © {currentYear} Young Minds Learning Center. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
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

      {/* Floating decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-4 left-1/4 w-8 h-8 rounded-full bg-orange-400 opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 right-1/3 w-6 h-6 rounded-full bg-[#ff9900] opacity-20"
        />
      </div>
    </footer>
  );
}

export default Footer;