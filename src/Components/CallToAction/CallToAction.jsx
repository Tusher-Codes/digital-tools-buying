import React from 'react';

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#632efd] to-[#9716ff] py-20 px-6 text-white font-sans text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100/90 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <button className="btn bg-white text-[#632efd] border border-transparent hover:border-white hover:bg-[#632efd] hover:text-white rounded-full px-8 normal-case font-semibold shadow-md transition-colors">
            Explore Products
        </button>
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#632efd] hover:border-white rounded-full px-8 normal-case font-semibold">
            View Pricing
          </button>
        </div>


        <p className="text-purple-200/70 text-xs md:text-sm font-light tracking-wide">
          14-day free trial <span className="mx-1.5">•</span> No credit card required <span className="mx-1.5">•</span> Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CallToAction;