import React, { useEffect, useState } from "react";
import ProductOne from "../components/sections/products/ProductOne";
import { products } from "../constants/products";
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <h1 className="p-2"> Products</h1>
      <h3 className="font-poppins font-bold text-3xl p-2">
        Power up your life with our services
      </h3>
      <div className="flex justify-evenly items-center my-8">
        {products.map((product) => {
          return (
            <button
              className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-2xl "
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <span className="relative z-10 font-poppins">{product.name}</span>
            </button>
          );
        })}
      </div>
      <ProductOne product={selectedProduct} />
    </div>
  );
};

export default Product;
