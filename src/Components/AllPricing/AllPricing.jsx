import React, { use } from 'react';
import SinglePricing from '../SinglePricing/SinglePricing';

const AllPricing = ({ pricingData }) => {
  console.log(pricingData);
  return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">

            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-20 max-w-lg mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pricingData.map((singlePrice) => (
        <SinglePricing
          key={singlePrice.id}
          singlePrice={singlePrice}
        />
      ))}
    </div>
  </div>
  );
};

export default AllPricing;