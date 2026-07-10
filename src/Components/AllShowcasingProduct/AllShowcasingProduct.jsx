import React, { use } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import NoItemSelected from '../NoItemSelected/NoItemSelected';

const AllShowcasingProduct = ({fetchingModernTools, availableProduct, setAvailableProduct}) => {
    const fetchingDigitalData = use(fetchingModernTools)

    return (
        <div>
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center mt-14">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight mb-4">
                    Premium Digital Tools
                </h2>

                <p className="text-center text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                Choose from our curated collection of premium digital products designed
                <br />
                to boost your productivity and creativity.
                </p>
            </div>


            <div>
                <div className="flex flex-col items-center   mb-10 ">
                    <div className='bg-white border border-slate-100 shadow-sm font-sans rounded-full p-1'>

                    <button
                    onClick={() => setAvailableProduct("available")}
                    className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer
                        ${
                        availableProduct === 'available'
                            ? 'bg-gradient-to-r from-[#632efd] to-[#9716ff] text-white shadow-md'
                            : 'text-[#632efd] hover:text-[#5222e0] bg-transparent'
                        }
                    `}
                    >
                    Products
                    </button>

                    <button
                    onClick={() => setAvailableProduct("selected")}
                    className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer
                        ${
                        availableProduct === 'selected'
                            ? 'bg-gradient-to-r from-[#632efd] to-[#9716ff] text-white shadow-md'
                            : 'text-[#632efd] hover:text-[#5222e0] bg-transparent'
                        }
                    `}
                    >
                    Cart (2)
                    </button>
                    </div>
                 </div> 

                    <div>
                        {
                        availableProduct === "available" ? (
                            <div className='max-w-6xl mx-auto grid grid-cols-3 gap-4'>
                            {/* Added opening curly brace here */}
                            {fetchingDigitalData.map((singleProduct) => (
                                <SingleProduct
                                key={singleProduct.id}
                                singleProduct={singleProduct}
                                /> 
                            ))}
                            {/* Added closing curly brace here */}
                            </div>
                        ) : (
                            <NoItemSelected 
                                setAvailableProduct={setAvailableProduct}
                            />
                        )
                        }
                    </div>
                
            </div>
            
        </div>
    );
};

export default AllShowcasingProduct;