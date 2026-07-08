import React from "react";
import heroBanner from '../../assets/heroBanner.png'
import { FaPlay } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row justify-between gap-12">

          <div className="w-[650px]">
            <div className="badge badge-lg bg-violet-100 text-violet-600 border-none mb-6">
              ● New: AI-Powered Tools Available
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="py-6 text-gray-500 text-lg">
              Access premium AI tools, design assets, templates,
              and productivity software—all in one place.
              Start creating faster today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-violet-600 border-transparent hover:border-[#632efd] hover:outline-[#632efd] hover:bg-[#ffffff] hover:text-[#632efd] text-white rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline border-violet-600 text-violet-600 rounded-full hover:bg-[#632efd] hover:text-[#ffffff]">
                <FaPlay />
                Watch Demo
              </button>
            </div>

          </div>

          <div>
            <img
              src={heroBanner}
              alt="Hero"
              className="rounded-xl w-[500px] max-w-md"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;