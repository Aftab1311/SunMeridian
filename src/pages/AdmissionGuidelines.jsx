import React from 'react';
import { motion } from 'framer-motion';
import useScrollToTop from '../hooks/useScrollToTop';

const AdmissionGuidelines = () => {
  useScrollToTop();
  const guidelines = [
    {
      title: "Eligibility Criteria",
      items: [
        "Age requirements as per educational board guidelines",
        "Previous academic performance",
        "Transfer certificate from previous school (if applicable)",
        "Valid address proof",
        "Medical fitness certificate"
      ]
    },
    {
      title: "Application Process",
      items: [
        "Complete online application form",
        "Submit required documents",
        "Pay application fee",
        "Schedule entrance assessment",
        "Attend parent interview"
      ]
    },
    {
      title: "Selection Process",
      items: [
        "Document verification",
        "Entrance assessment evaluation",
        "Interview performance",
        "Previous academic records",
        "Overall profile assessment"
      ]
    },
    {
      title: "Fee Structure",
      items: [
        "Registration fee",
        "Admission fee",
        "Tuition fee",
        "Development fee",
        "Other applicable charges"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Admission Guidelines</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive guidelines to help you understand our admission process and requirements.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              • All documents must be submitted in original for verification along with self-attested copies.
            </p>
            <p>
              • The admission process is subject to availability of seats in the respective classes.
            </p>
            <p>
              • The school reserves the right to modify the admission process and requirements.
            </p>
            <p>
              • For any queries regarding admission, please contact our admission office.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <a
            href="/enquiry"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Enquiry
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionGuidelines; 