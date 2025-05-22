import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import directorImg from '../assets/director.jpg'; // Replace with actual image path

const DirectorsMessage = () => {
  useScrollToTop();
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="w-full px-4 md:px-10 lg:px-16">
        <div className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 tracking-wide">
          DIRECTOR'S MESSAGE
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-center mb-8">
          <div className=" flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-4">
            <img src={directorImg} alt="Director" className="w-64 h-72 object-cover rounded-lg border-4 border-gray-200 shadow-md" />
            <div className="text-center mt-4">
              <div className="text-xl font-bold text-pink-700">Mrs Rati Srivastava
                Director <br /> <span className="font-normal text-black">Double Post Graduation, BSc, MSc, MA, B.Ed, PhD</span></div>
              <div className="text-base font-semibold text-gray-700 mt-1">Director – Academics</div>
            </div>
          </div>
          <div className="flex-1 text-gray-800 text-lg leading-relaxed">
            <p className="mb-4">Welcome to Sun Meridian School! It is my pleasure to greet you as part of our vibrant and growing community.</p>
            <p className="mb-4">At Sun Meridian School, we are dedicated to nurturing every child's curiosity, creativity, and confidence. Our mission is to create a safe, joyful, and inspiring environment where students are encouraged to dream big, think independently, and develop a lifelong love for learning.</p>
            <p className="mb-4">Our curriculum is thoughtfully designed to blend academic excellence with co-curricular opportunities, ensuring that each student receives a well-rounded education. We believe in the power of innovative teaching, supportive mentorship, and strong values to help every child discover their unique strengths and talents.</p>
            <p className="mb-4">Our passionate team of educators is committed to guiding students not only in their studies but also in their personal growth, character, and leadership. Together with our families, we strive to build a community where respect, empathy, and collaboration are at the heart of everything we do.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto my-8">
          <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-lg text-center text-xl italic text-pink-700 font-semibold shadow">
            <span className="text-2xl font-bold">"</span>
            Education opens windows to new possibilities and transforms lives. <span className="font-bold">– Director, Sun Meridian School</span>
            <span className="text-2xl font-bold">"</span>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-gray-800 text-lg leading-relaxed">
          <p className="mb-4">We value every child as our greatest asset and are committed to helping them reach their highest potential. Thank you for trusting Sun Meridian School with your child's education. We look forward to partnering with you on this exciting journey of growth and discovery.</p>
        </div>
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-yellow-300 text-gray-900 font-bold px-6 py-4 rounded-lg shadow-lg border-2 border-yellow-400 text-lg">
            For Admission, Call us!<br />
            <span className="font-normal text-base">+91 9555855275 / 9454751752 / 8005440751</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage; 