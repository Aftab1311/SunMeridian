import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLightbulb, FaBookOpen, FaUserGraduate, FaSmile, FaChartLine, FaHeadset } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import kid from "../assets/kid.png";
import comp from "../assets/comp.png";
import kid2 from "../assets/kid2.png";

// Mock images - replace with your actual image paths
const child1 = "https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80";
const child2 = "https://images.unsplash.com/photo-1591727884968-cc11135a19b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80";
const child3 = "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80";
const heroImage = "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80";

function AnimatedStat({ value, label, icon, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-white p-4 rounded-xl shadow-lg text-center w-32 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-orange-500 text-3xl font-bold flex justify-center mb-1">
        {icon}
      </div>
      <div className="text-orange-500 text-3xl font-bold">{value}</div>
      <div className="text-gray-600 text-sm mt-1">{label}</div>
    </motion.div>
  );
}

function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  

  return (
    <section className="bg-gradient-to-b h-auto lg:h-screen from-[#F9F6F1] to-[#f0e9dd] py-20 relative overflow-hidden ">
      {/* Animated background elements - updated with bolder colors */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-orange-600"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 right-40 w-24 h-24 rounded-full bg-[#ff9900]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/8 right-1/4 w-12 h-12 rounded-full bg-[#00cc66]"
        />
      </div>

      {/* Animated kid images */}
      <motion.img 
        src={kid} 
        alt="Happy child learning" 
        className='w-[490px] absolute top-1/2 -translate-y-1/2 -left-10'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 60,
          damping: 15,
          delay: 0.4
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      />
      
      <motion.img 
        src={kid2} 
        alt="Child with computer" 
        className='w-[400px] absolute top-1/3 -translate-y-1/2 right-4 '
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 60,
          damping: 15,
          delay: 0.6
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-6 flex flex-col items-center text-center relative z-10"
      >
        {/* Animated heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4 shadow-sm"
            animate={{
              y: [0, -5, 0],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            Future Ready Learning
          </motion.span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
        >
          Igniting <span className="text-orange-600 relative inline-block">
            Young Minds
            <motion.svg 
              className="absolute -bottom-2 left-0 w-full h-2" 
              viewBox="0 0 200 10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <path d="M0,5 Q50,10 100,5 T200,5" stroke="#F97316" strokeWidth="3" fill="none" />
            </motion.svg>
          </span><br />
          For A Brighter Tomorrow
        </motion.h1>

        {/* Subtext with animation */}
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base  text-gray-700 mt-6 mb-8 max-w-xl"
        >
          We don't just teach—we inspire, engage, and prepare children for real-world success through innovative learning experiences.
        </motion.p>

        {/* CTA and features */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-8 mb-10"
        >
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100"
          >
            <div className="flex -space-x-2">
              <motion.img 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-7 h-7 rounded-full border-2 border-white" 
                src={child1} 
                alt="Student" 
              />
              <motion.img 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-7 h-7 rounded-full border-2 border-white" 
                src={child2} 
                alt="Student" 
              />
              <motion.img 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-7 h-7 rounded-full border-2 border-white" 
                src={child3} 
                alt="Student" 
              />
            </div>
            <span className="text-gray-700 text-sm font-medium">Join 10,000+ happy learners</span>
          </motion.div>
        </motion.div>

        {/* Stats and image showcase */}
        <div className="w-full max-w-6xl mt-16 relative">
          <motion.div 
            className="absolute -top-16 left-0 right-0 flex justify-center space-x-4 md:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatedStat 
              value="98%" 
              label="Satisfaction" 
              icon={<FaSmile className="text-orange-500" />} 
              delay={0.1}
            />
            <AnimatedStat 
              value="500+" 
              label="Activities" 
              icon={<FaLightbulb className="text-orange-500" />} 
              delay={0.2}
            />
            <AnimatedStat 
              value="24/7" 
              label="Support" 
              icon={<FaHeadset className="text-orange-500" />} 
              delay={0.3}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;