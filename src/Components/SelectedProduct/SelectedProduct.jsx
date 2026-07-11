import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import NoItemSelected from "../NoItemSelected/NoItemSelected";
import { toast } from "react-toastify";

const SelectedProduct = ({
  selectedProduct,
  setSelectedProduct,
  setAvailableProduct,
}) => {

  const handleDelete = (id) => {
    const remainingProducts = selectedProduct.filter(
      (product) => product.id !== id
    );
    setSelectedProduct(remainingProducts);
    toast.error("Product Removed From the Cart", {
        position: "top-center"
    })
  };

  const totalPrice = selectedProduct.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const handleCheckout = () => {
    setSelectedProduct([]);
    setAvailableProduct("available");
    toast.success("Checkout Completed", {
        position: "top-center"
    })
  };

  if (selectedProduct.length === 0) {
    return (
      <NoItemSelected
        setAvailableProduct={setAvailableProduct}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      {/* Selected Products */}
      <div className="space-y-5">

        {selectedProduct.map((product) => (

          <div
            key={product.id}
            className="flex justify-between items-center border rounded-2xl p-5 shadow-sm"
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <img
                src={product.icon}
                alt={product.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p className="text-gray-500">
                  {product.description}
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

              <h2 className="text-xl font-bold">
                ${product.price}
              </h2>

              <button
                onClick={() => handleDelete(product.id)}
                className="btn btn-error btn-outline btn-sm"
              >
                <FaTrashAlt />
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        <button
          onClick={handleCheckout}
          className="btn bg-[#632efd] hover:bg-[#5222e0] text-white border-none rounded-full"
        >
          Checkout
        </button>

      </div>

    </div>
  );
};

export default SelectedProduct;