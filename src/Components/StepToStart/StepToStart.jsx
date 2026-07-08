import React from 'react';
import user from '../../assets/user.png'
import product from '../../assets/product.png'
import rocketLunch from '../../assets/rocketLunch.png'

const StepToStart = () => {
  return (
    <div className="w-full bg-[#fafafa] py-20 px-6 font-sans text-center">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-slate-400 text-sm md:text-base mb-16 max-w-md mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
 
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow">

            <span className="absolute top-6 right-6 bg-[#632efd] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold">
              01
            </span>

            <div className="h-20 w-20 flex items-center justify-center mb-6 mt-4">
              <img src={user}/>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Create Account</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>


          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow">

            <span className="absolute top-6 right-6 bg-[#632efd] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold">
              02
            </span>
     
            <div className="h-20 w-20 flex items-center justify-center mb-6 mt-4">
                <img src={product} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Products</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>


          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow">

            <span className="absolute top-6 right-6 bg-[#632efd] text-white h-7 w-7 rounded-full flex items-center justify-center text-xs font-semibold">
              03
            </span>
  
            <div className="h-20 w-20 flex items-center justify-center mb-6 mt-4">
              <img src={rocketLunch}/>
            </div>
    
            <h3 className="text-xl font-bold text-slate-900 mb-3">Start Creating</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StepToStart;