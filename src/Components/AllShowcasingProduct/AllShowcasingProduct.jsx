import React, { use } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import SelectedProduct from "../SelectedProduct/SelectedProduct";

const AllShowcasingProduct = ({
  fetchingModernTools,
  availableProduct,
  setAvailableProduct,
  selectedProduct,
  setSelectedProduct,
}) => {
  const fetchingDigitalData = use(fetchingModernTools);

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mt-14">
        <h2 className="text-4xl font-bold mb-4">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center my-10">
        <div className="bg-white border rounded-full p-1 shadow">

          <button
            onClick={() => setAvailableProduct("available")}
            className={`px-6 py-2 rounded-full transition ${
              availableProduct === "available"
                ? "bg-purple-700 text-white"
                : "text-purple-700"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setAvailableProduct("selected")}
            className={`px-6 py-2 rounded-full transition ${
              availableProduct === "selected"
                ? "bg-purple-700 text-white"
                : "text-purple-700"
            }`}
          >
            Cart ({selectedProduct.length})
          </button>

        </div>
      </div>

      {availableProduct === "available" ? (
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {fetchingDigitalData.map((singleProduct) => (
            <SingleProduct
              key={singleProduct.id}
              singleProduct={singleProduct}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <SelectedProduct
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setAvailableProduct={setAvailableProduct}
        />
      )}
    </div>
  );
};

export default AllShowcasingProduct;