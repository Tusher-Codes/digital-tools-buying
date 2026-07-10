import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NoItemSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white border border-gray-100 rounded-3xl p-12 shadow-sm max-w-2xl mx-auto font-sans text-center my-8 animate-fadeIn">
      
      <div className="h-24 w-24 rounded-full bg-purple-50 text-[#632efd] flex items-center justify-center mb-6 animate-bounce-slow">
        <FaShoppingCart className="text-4xl" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
        Your Cart is Empty
      </h3>
      
      <p className="text-slate-400 text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
        Looks like you haven't added any premium digital tools to your bundle yet.
      </p>

      <button 
        onClick={() => window.location.reload()} 
        className="btn bg-[#632efd] hover:bg-[#5222e0] text-white border-none rounded-full px-8 py-3 text-sm font-semibold tracking-wide shadow-md transition-all normal-case"
      >
        Explore Products
      </button>
    </div>
  );
};

export default NoItemSelected;