import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F9F6F1] to-[#f0e9dd] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.span 
          className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 shadow-sm"
          whileHover={{ scale: 1.05 }}
          variants={item}
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          variants={item}
        >
          Contact <span className="text-orange-600">Sun Meridian</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          variants={item}
        >
          We'd love to hear from you! Whether you have questions about our programs or want to schedule a visit, our team is here to help.
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Contact Information */}
          <motion.div variants={item}>
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 h-full"
              whileHover="hover"
              variants={cardHover}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-orange-600 text-xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Address</h3>
                    <p className="text-gray-700">123 Sun Street, Meridian City, 10101</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-orange-600 text-xl mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-700">(123) 456-7890</p>
                    <p className="text-gray-700">(098) 765-4321 (Admissions)</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-orange-600 text-xl mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-700">info@sunmeridian.com</p>
                    <p className="text-gray-700">admissions@sunmeridian.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-orange-600 text-xl mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item}>
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 h-full"
              whileHover="hover"
              variants={cardHover}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="feedback">Feedback/Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="Type your message here..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center space-x-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Replace with actual map embed */}
            <div className="h-96 bg-gradient-to-r from-orange-100 to-yellow-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-orange-600 text-4xl mb-4">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-700 font-medium">Map would be displayed here</p>
                <p className="text-gray-600 text-sm mt-1">123 Sun Street, Meridian City</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ CTA */}
        <motion.div 
          className="bg-orange-600 rounded-2xl shadow-lg p-8 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Check out our FAQ section for quick answers to common questions about admissions, programs, and school life.</p>
          <motion.button
            className="bg-white text-orange-600 font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit FAQ Page
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;