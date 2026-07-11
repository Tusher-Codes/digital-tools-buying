import { FaCheck } from 'react-icons/fa';

const SinglePricing = ({singlePrice}) => {
    const {id, name, description, price, period, features, buttonText, isPopular} = singlePrice;
    // console.log(singlePrice)
    return (
  <div
      className={`relative flex flex-col justify-between border rounded-3xl p-8 transition-all duration-200 text-left w-full max-w-sm mx-auto
        ${
          isPopular
            ? 'bg-[#632efd] border-[#632efd] text-white shadow-xl lg:-translate-y-2'
            : 'bg-white border-gray-100 text-slate-900 shadow-sm hover:shadow-md'
        }
      `}
    >

      {isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm whitespace-nowrap">
          Most Popular
        </span>
      )}


      <div>
        <h3 className="text-2xl font-bold mb-1 tracking-tight">{name}</h3>
        <p className={`text-sm mb-8 ${isPopular ? 'text-purple-100/80' : 'text-slate-400'}`}>
          {description}
        </p>


        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className={`text-sm font-medium ${isPopular ? 'text-purple-200' : 'text-slate-400'}`}>
            /{period}
          </span>
        </div>


        <ul className="space-y-2 mb-4">
          {features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-medium">
              <FaCheck
                className={`text-xl shrink-0 mt-0.5 ${
                  isPopular ? 'text-white' : 'text-emerald-500'
                }`}
              />
              <span className={isPopular ? 'text-purple-50' : 'text-slate-600'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>


      <button
        className={`btn w-full rounded-full py-4 text-base font-semibold tracking-wide shadow-md transition-all normal-case border-none mt-4
          ${
            isPopular
              ? 'bg-white text-[#632efd] hover:bg-purple-50'
              : 'bg-[#632efd] text-white hover:bg-[#5222e0]'
          }
        `}
      >
        {buttonText}
      </button>
    </div>
);
};

export default SinglePricing;