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
      <h1 className="text-primary text-4xl font-semibold py-8 px-4">
        Products
      </h1>
      <h3 className="font-semibold text-3xl px-4">
        Power up your life with our services
      </h3>
      <div className="flex justify-evenly items-center my-8">
        {products.map((product) => {
          return (
            <button
              className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-semibold text-black rounded-full shadow-2xl "
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <span className="relative z-10 font-poppins">{product.name}</span>
            </button>
          );
        })}
      </div>
      {isLoading ? <Loader /> : <SingleProduct product={selectedProduct} />}
    </div>
  );
};

export default Product;