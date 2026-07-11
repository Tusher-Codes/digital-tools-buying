import React from "react";
import heroBanner from '../../assets/heroBanner.png';
import { FaPlay } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="hero">
        <div className="hero-content flex flex-col lg:flex-row justify-between items-center gap-12 w-full">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="badge badge-lg bg-violet-100 text-violet-600 border-none mb-6">
              ● New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="py-6 text-gray-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates,
              and productivity software—all in one place.
              Start creating faster today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="btn bg-violet-600 border-transparent hover:border-[#632efd] hover:outline-[#632efd] hover:bg-[#ffffff] hover:text-[#632efd] text-white rounded-full px-8">
                Explore Products
              </button>
              <button className="btn btn-outline border-violet-600 text-violet-600 rounded-full hover:bg-[#632efd] hover:text-[#ffffff] px-8">
                <FaPlay />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={heroBanner}
              alt="Hero"
              className="rounded-2xl w-full max-w-md lg:max-w-xl object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;