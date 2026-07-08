import React from 'react';

const CounterUp = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#632efd] to-[#9716ff] py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
        
        <div className="flex-1 text-center py-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">50K+</h2>
          <p className="text-purple-100 text-sm md:text-base opacity-90 font-medium">Active Users</p>
        </div>

        <div className="hidden sm:block h-16 w-[1px] bg-white/30 self-center" />

        <div className="flex-1 text-center py-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">200+</h2>
          <p className="text-purple-100 text-sm md:text-base opacity-90 font-medium">Premium Tools</p>
        </div>

        <div className="hidden sm:block h-16 w-[1px] bg-white/30 self-center" />

        <div className="flex-1 text-center py-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">4.9</h2>
          <p className="text-purple-100 text-sm md:text-base opacity-90 font-medium">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default CounterUp;