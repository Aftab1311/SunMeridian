import React from "react";
import letter from "../assets/img1.jpg";
import knowledge from "../assets/img2.jpg";
import geography from "../assets/img3.jpg";
import arts from "../assets/img6.jpg";

const subjects = [
  {
    title: "Letter Identification",
    subtitle: "Class - Pre School",
    bgColor: "bg-blue-300",
    img: letter, 
  },
  {
    title: "General Knowledge",
    subtitle: "Fourth Grade",
    bgColor: "bg-orange-400",
    img: knowledge ,
  },
  {
    title: "Geography Quiz",
    subtitle: "First Grade",
    bgColor: "bg-green-500",
    img: geography,
  },
  {
    title: "visual Arts Training",
    subtitle: "Sketching class",
    bgColor: "bg-yellow-300",
    img: arts,
  },
];

const Future = () => {
  return (
    <section className="py-20 bg-[#faf7f2] text-center">
      <h3 className="text-sm font-medium text-gray-600 mb-2">
        We focus on one impactful lesson at a time
      </h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
        Shaping the <span className="text-orange-500">future</span> of kids
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {subjects.map((subject, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
            {/* Background blob */}
            <div
              className={`absolute w-[250px] h-[250px] ${subject.bgColor} rounded-full blur-xl opacity-60 z-0`}
              style={{ top: "[calc(100%-250px)]" }}
            ></div>

            

            {/* Image */}
            <img
              src={subject.img}
              alt={subject.title}
              className="relative z-10 w-[250px] h-[250px] object-contain"
            />

            {/* Text */}
            <div className="mt-4 relative z-10">
              <h4 className="text-lg font-semibold text-gray-800">{subject.title}</h4>
              <p className="text-sm text-gray-600">{subject.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Future;
