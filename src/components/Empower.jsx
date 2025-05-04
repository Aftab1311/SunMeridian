import React from "react";
import girlImg from "../assets/girlImg.png";
import { CheckCircle, ArrowUpRight } from "lucide-react";

export default function Empower() {
  return (
    <section className="bg-[#F9F5F0] w-full py-20 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white text-sm font-medium text-gray-700 border border-gray-200 shadow">
          Admission on going
        </div>
        <h1 className="text-[2.5rem] lg:text-5xl font-['Tagesschrift'] font-bold leading-snug text-[#3B2F2F]">
          Empower your kids to think be <span className="text-[#943C28]">smarter</span> and <span className="text-[#943C28]">sharper</span>
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-700">
          Encourage kids to think critically, be creative, and solve problems for a better future.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FF6A43] hover:bg-[#e85b37] text-white text-lg rounded-full flex items-center gap-2 shadow-md">
          Get Educated <ArrowUpRight size={20} />
        </button>

        {/* Stats */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center bg-white rounded-2xl p-4 shadow w-full sm:w-60">
            <CheckCircle className="text-green-500 mr-3" size={30} />
            <div>
              <div className="text-xl font-bold">45M+</div>
              <div className="text-sm text-gray-600">Genius kids watched across the globe</div>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-2xl p-4 shadow w-full sm:w-60">
            <img src="https://img.icons8.com/color/48/000000/globe--v2.png" alt="globe" className="w-8 h-8 mr-3" />
            <div>
              <div className="text-xl font-bold">164+</div>
              <div className="text-sm text-gray-600">Nations participating in the Olympiad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex justify-center relative mb-10 lg:mb-0">
        <div className="relative z-10">
          <img src={girlImg} alt="happy girl" className="w-[400px] lg:w-[500px] rounded-xl" />
        </div>
      </div>
    </section>
  );
}


