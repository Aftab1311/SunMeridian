import React from 'react';
import { motion } from 'framer-motion';
import useScrollToTop from '../hooks/useScrollToTop';

const AcademicExcellence = () => {
  useScrollToTop();
  const achievements = [
    {
      title: "Academic Programs",
      description: "Our comprehensive curriculum is designed to foster critical thinking and creativity.",
      icon: "📚"
    },
    {
      title: "Research Excellence",
      description: "State-of-the-art research facilities and mentorship programs.",
      icon: "🔬"
    },
    {
      title: "Student Success",
      description: "Consistently high placement rates and academic achievements.",
      icon: "🏆"
    },
    {
      title: "Faculty Excellence",
      description: "Highly qualified and experienced teaching staff.",
      icon: "👨‍🏫"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Academic Excellence</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Committed to nurturing intellectual growth and academic achievement through innovative teaching methods and comprehensive support systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{achievement.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-gray-600">{achievement.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 bg-gray-50 p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h2>
        <p className="text-gray-600 mb-4">
          We are dedicated to providing an exceptional educational experience that prepares students for future success. Our commitment to academic excellence is reflected in:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Rigorous academic standards and continuous assessment</li>
          <li>Personalized attention and mentoring</li>
          <li>State-of-the-art learning facilities</li>
          <li>Regular professional development for faculty</li>
          <li>Comprehensive student support services</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AcademicExcellence; 