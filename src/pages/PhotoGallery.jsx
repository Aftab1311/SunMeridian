import React, { useState } from "react";
import { motion } from "framer-motion";
import useScrollToTop from "../hooks/useScrollToTop";
import img1 from "../assets/gall1.jpeg";
import img2 from "../assets/gall2.jpeg";
import img3 from "../assets/gall3.jpeg";
import img4 from "../assets/gall4.jpeg";
import img5 from "../assets/gall5.jpeg";
import img6 from "../assets/gall6.jpeg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";

const PhotoGallery = () => {
  useScrollToTop();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: img1,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },

    {
      id: 2,
      src: img2,
      title: "Classroom Activities",
      description: "Students engaged in interactive learning",
    },
    {
      id: 6,
      src: img6,
      title: "Cultural Program",
      description: "Traditional dance performance",
    },
    {
      id: 3,
      src: img3,
      title: "Sports Day",
      description: "Annual sports day celebration",
    },
    {
      id: 4,
      src: img4,
      title: "Annual Function",
      description: "Cultural performances at annual function",
    },
    {
      id: 5,
      src: img5,
      title: "Science Exhibition",
      description: "Students showcasing their innovative projects",
    },
    {
      id: 7,
      src: img7,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },
    {
      id: 8,
      src: img8,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },
    {
      id: 9,
      src: img9,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },
    {
      id: 10,
      src: img10,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },

    {
      id: 11,
      src: img11,
      title: "School Campus",
      description: "Our beautiful school campus with modern infrastructure",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our school through these beautiful moments captured in time.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid relative group cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;
