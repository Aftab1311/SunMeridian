import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChild, FaLightbulb, FaFeatherAlt } from "react-icons/fa";
import lifeSkillsImg from "../assets/skill.jpg";
import imaginationImg from "../assets/imagine.jpg";
import growthImg from "../assets/grow.jpg";
// Mock images - replace with your actual high-quality images


const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const KidsPromoSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#FDF7EF] to-[#f5e9d8] py-16 lg:px-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-orange-300 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-yellow-200 animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Text section */}
      <div className="w-full px-4 md:px-10 lg:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-0 lg:max-w-xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3B1E18] leading-tight mb-4">
            Smart and clever kids <br />
            ready to <span className="text-[#f54a00] relative">
              fly high!
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 10">
                <path d="M0,5 Q50,10 100,5 T200,5" stroke="#f54a00" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-[#f54a00] opacity-90">
            Our innovative approach helps children develop essential skills through engaging, age-appropriate activities.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:max-w-md"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <p className="text-lg text-[#3B1E18] mb-6">
              Learn smartly with us. We teach <br className="hidden lg:block" />
              <span className="font-semibold text-[#BD6B2F]">'One Smart Lesson'</span> at a time!
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#f54a00] to-[#E38B4D] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
            >
              Enroll Now <FaArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="w-full px-4 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Life Skills */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className="bg-gradient-to-br from-[#fb7f04] to-[#fd9405] rounded-3xl text-white p-8 flex flex-col justify-between items-start relative overflow-hidden min-h-[400px] shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <FaChild className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Life Skills for Kids</h3>
            <p className="opacity-90 mb-6">Essential skills for everyday success and confidence building.</p>
          </div>
          <img
            src={lifeSkillsImg}
            alt="Children learning life skills"
            className="w-full h-auto object-contain rounded-lg z-10 border-4 border-white/20"
          />
        </motion.div>

        {/* Card 2 - Imagination */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#2cab54] to-[#5ac46c] rounded-3xl text-white p-8 flex flex-col justify-between items-start relative overflow-hidden min-h-[400px] shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <FaLightbulb className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Imagination is Power</h3>
            <p className="opacity-90 mb-6">Creative thinking and problem-solving through play and exploration.</p>
          </div>
          <img
            src={imaginationImg}
            alt="Child using imagination"
            className="w-full h-auto object-contain rounded-lg z-10 border-4 border-white/20"
          />
        </motion.div>

        {/* Card 3 - Growth */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#1988b3] to-[#39aad2] rounded-3xl text-white p-8 flex flex-col justify-between items-start relative overflow-hidden min-h-[400px] shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <FaFeatherAlt className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Grow Your Wings</h3>
            <p className="opacity-90 mb-6">Building confidence and independence for lifelong learning.</p>
          </div>
          <img
            src={growthImg}
            alt="Child growing and learning"
            className="w-full h-auto object-contain rounded-lg z-10 border-4 border-white/20"
          />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute left-10 top-1/3 w-8 h-8 bg-[#BD6B2F]/20 rounded-full"
      />
      <motion.div 
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden lg:block absolute right-20 bottom-1/4 w-6 h-6 bg-[#0B8E55]/20 rounded-full"
      />
    </section>
  );
};

export default KidsPromoSection;