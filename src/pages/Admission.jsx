import React from 'react';
import { motion } from 'framer-motion';
import useScrollToTop from '../hooks/useScrollToTop';

const Admission = () => {
  useScrollToTop();
  const admissionSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete the online application form with required documents."
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit original documents for verification."
    },
    {
      step: 3,
      title: "Entrance Assessment",
      description: "Participate in the entrance assessment (if applicable)."
    },
    {
      step: 4,
      title: "Interview",
      description: "Attend a personal interview with parents/guardians."
    },
    {
      step: 5,
      title: "Admission Confirmation",
      description: "Complete fee payment and receive admission confirmation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Admission Process</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join our community of learners and begin your journey towards excellence.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Important Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Required Documents</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Birth Certificate</li>
                <li>Previous School Records</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Passport Size Photographs</li>
                <li>Address Proof</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Age Requirements</h3>
              <p className="text-gray-600">
                Students must meet the age requirements for their respective grade levels as per educational board guidelines.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <a
            href="/admission-guidelines"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Admission Guidelines
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Admission; 