import React, { useEffect, useState } from "react";
import SingleProduct from "../components/sections/products/SingleProduct";
import { products } from "../constants/products";
import Loader from "../utils/Loader";
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
    }
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(true);

      setTimeout(() => {
        setSelectedProduct(products[0]);
        setIsLoading(false);
      }, 1000); // Adjust the delay as needed
    }
  }, []);

  const handleProductClick = (product) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProduct(product);
      setIsLoading(false);
    }, 500);
  };
  return (
    <div>
      <h1 className="text-primary text-4xl font-semibold py-8 px-4 text-center">
        Products
      </h1>
      <h3 className="font-semibold text-3xl md:text-4xl px-4 text-center">
        Power up your life with our services
      </h3>
      <div className="flex flex-wrap gap-y-3 md:gapy justify-evenly items-center my-8">
        {products.map((product) => {
          const isSelected =
            selectedProduct && selectedProduct.id === product.id;
          return (
            <button
              className={`relative h-12 w-40 overflow-hidden border border-primary text-primary shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 rounded-full before:rounded-full before:bg-primary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80 ${
                isSelected ? " bg-primary text-white" : ""
              }`}
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <span className="relative z-10 font-poppins font-semibold">
                {product.name}
              </span>
            </button>
          );
        })}
      </div>
      {isLoading ? <Loader /> : <SingleProduct product={selectedProduct} />}
    </div>
  );
};

export default Product;
