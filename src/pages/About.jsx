import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChild, FaLightbulb, FaGlobeAmericas, FaUsers } from 'react-icons/fa';

const About = () => {
  const sectionVariants = {
    offscreen: {
      opacity: 0,
      y: 30
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  return (
    <div className="bg-gradient-to-b from-[#F9F6F1] to-[#f0e9dd] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.span 
          className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          Our Story
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-orange-600">Sun Meridian School</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          variants={item}
        >
          Where education meets innovation, and every child's potential is nurtured to shine brightly.
        </motion.p>
      </motion.div>

      {/* Our Story */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Journey</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2005, Sun Meridian School began as a small learning center with a big vision - to transform education through innovative teaching methods and a child-centric approach.
            </p>
            <p className="text-gray-700 mb-4">
              What started with just 50 students has now grown into a premier educational institution serving over 2,000 bright young minds each year.
            </p>
            <p className="text-gray-700">
              Our journey has been guided by our core belief that every child deserves an education that sparks curiosity, fosters creativity, and prepares them for the challenges of tomorrow.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-xl overflow-hidden h-80"
          >
            {/* Replace with actual image */}
            <div className="w-full h-full bg-gradient-to-r from-orange-100 to-yellow-100 flex items-center justify-center">
              <span className="text-gray-500">School Campus Image</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          variants={item}
        >
          Our <span className="text-orange-600">Core</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="text-orange-600 text-4xl mb-4">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide a transformative educational experience that empowers students to become compassionate leaders, critical thinkers, and lifelong learners in an ever-changing global society.
            </p>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="text-orange-600 text-4xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be recognized as a beacon of innovative education that lights the path for students to discover their unique potential and make meaningful contributions to the world.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto mb-16"
      >
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          variants={item}
        >
          Our <span className="text-orange-600">Values</span>
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaChild className="text-orange-600 text-3xl" />, title: "Child-Centered", desc: "We put children at the heart of everything we do" },
            { icon: <FaGraduationCap className="text-orange-600 text-3xl" />, title: "Excellence", desc: "We strive for the highest standards in all areas" },
            { icon: <FaUsers className="text-orange-600 text-3xl" />, title: "Community", desc: "We foster strong, supportive relationships" },
            { icon: <FaLightbulb className="text-orange-600 text-3xl" />, title: "Innovation", desc: "We embrace creative approaches to learning" }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-7xl mx-auto bg-orange-600 rounded-2xl shadow-lg p-8 text-white"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">18+</div>
            <div className="text-sm">Years of Excellence</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">2000+</div>
            <div className="text-sm">Happy Students</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4"
          >
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-sm">Parent Satisfaction</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Meet Our <span className="text-orange-600">Team</span>
        </h2>
        <p className="text-gray-700 mb-8">
          Our dedicated team of educators and staff are the heart of Sun Meridian. With diverse expertise and a shared passion for education, they create the nurturing environment that makes our school special.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-colors"
        >
          Meet Our Faculty
        </motion.button>
      </motion.section>
    </div>
  );
};

export default About;