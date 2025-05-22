import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    // Simulate loading time - adjust as needed
    const timer = setTimeout(() => {
      finishLoading();
    }, 4000); // 4 seconds total for animation
    
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9F6F1]">
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.5 }
          }}
        >
          {/* Logo Container with Dramatic Reveal */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: 1,
              transition: { 
                duration: 1.5,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }
            }}
            className="relative flex items-center justify-center"
          >
            {/* Animated Ring Around Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ 
                scale: [1.5, 1],
                opacity: [0, 0.5, 0],
                transition: { 
                  delay: 1,
                  duration: 1.5,
                  repeat: 1,
                  repeatType: "reverse"
                }
              }}
              style={{ 
                width: '300px', 
                height: '300px', 
                borderRadius: '50%',
                border: '6px solid #FF6A43',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
              }}
            />
            
            {/* Logo Image with Rotation and Pulse */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                transition: {
                  delay: 1.5,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className="w-64 h-64 flex items-center justify-center"
            >
              <motion.img 
                src={logo} 
                alt="Sun Meridian School Logo" 
                className="w-56 h-56 object-contain"
                initial={{ rotate: -15, filter: 'brightness(0.8)' }}
                animate={{ 
                  rotate: 0,
                  filter: 'brightness(1)',
                  transition: { 
                    duration: 1.2, 
                    ease: "easeOut" 
                  }
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 1.2, 
                duration: 0.8 
              }
            }}
            className="mt-6 text-center"
          >
            {/* School Name with Letter Animation */}
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 overflow-hidden"
            >
              {Array.from("Sun Meridian School").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: 1.5 + (index * 0.05),
                      duration: 0.3
                    }
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              className="mt-2 text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { 
                  delay: 2.5, 
                  duration: 0.8 
                }
              }}
            >
              Empowering Minds, Shaping Futures
            </motion.p>
          </motion.div>
          
          {/* Animated Line */}
          <motion.div 
            className="mt-8"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { 
                delay: 2.8, 
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          >
            <div className="h-1 w-48 bg-orange-500 rounded"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen; 