import React, { use } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllShowcasingProduct = ({fetchingModernTools}) => {
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

            <div className='max-w-6xl mx-auto grid grid-cols-3 gap-4'>
                {
                fetchingDigitalData.map(
                    singleProduct => <SingleProduct 
                    key={singleProduct.id}
                    singleProduct={singleProduct}/>
                )
            }
            </div>
        </div>
    );
};

export default AllShowcasingProduct;