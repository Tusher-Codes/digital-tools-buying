import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleProduct = ({singleProduct, selectedProduct, setSelectedProduct}) => {
    const {id, name, description, price, period, tag, tagType, features, icon} = singleProduct;
     const [isCartProduct, setProductToCart] = useState(false)

    const handleAddProductCart = () => {
      setProductToCart(true)
      setSelectedProduct(prev => [...prev, singleProduct])
      toast.info("Item has been added on your Cart",{
        position: "top-center"
      })
    }
    return (
        <div>
            <div className="relative max-w-sm w-full bg-white border border-gray-100 rounded-3xl p-6 shadow-sm text-left">
      
                {tag && (
                <span
                className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide
                    ${tagType === 'popular' ? 'bg-purple-50 text-purple-600' : ''}
                    ${tagType === 'new' ? 'bg-emerald-50 text-emerald-600' : ''}
                    ${tagType === 'best-seller' ? 'bg-orange-50 text-orange-600' : ''}
                `}
                >
                {tag}
                </span>
            )}

            <div className="flex items-center justify-center h-16 w-16 rounded-full border border-gray-100 bg-gray-50/50 text-purple-600 mb-6">
                <img src={icon} alt={name}/>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {name}
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                {description}
            </p>

            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">${price}</span>
                <span className="text-slate-400 text-sm font-medium">/{period}</span>
            </div>

            <ul className="space-y-2 mb-5">
                {features.map((feature, id) => (
                <li key={id} className="flex items-center gap-2 text-slate-600 text-sm md:text-base">
                    <FaCheck className='text-success'/>
                    <span>{feature}</span>
                </li>
                ))}
            </ul>

            <button 
                onClick={handleAddProductCart}
                disabled={isCartProduct}
                className="btn w-full bg-[#7c1aff] hover:bg-[#6911e0] text-white border-none rounded-full py-4 text-base font-semibold tracking-wide shadow-md transition-colors normal-case     disabled:bg-gray-300
                disabled:text-gray-500
                disabled:cursor-not-allowed
                disabled:shadow-none
                disabled:hover:bg-gray-300">
                {isCartProduct ? "Add to Cart" : "Buy Now"}
            </button>

            </div>
        </div>
    );
};

export default SingleProduct;