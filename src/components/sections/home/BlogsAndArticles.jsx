import React, { useState } from "react";
import Image1 from "../../../assets/blogs/sparks.jpeg"; // Import your local images

const BlogsAndArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Image1, Image1]; // Use the imported images

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="bg-stone-300 h-full">
        <h3 className="text-center font-poppins font-normal text-5xl text-primary py-8">
          Latest from blogs & Articles
        </h3>
        {/* ----------------------------------------Slider-------------------------------------------- */}
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
          <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
            <span>{currentIndex + 1}</span> / <span>{images.length}</span>
          </div>

          <button
            onClick={previous}
            className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
          >
            <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
          </button>

          <button
            onClick={forward}
            className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
          >
            <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
          </button>

          <div className="relative h-80" style={{ width: "30rem" }}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 ${
                  currentIndex === index ? "" : "hidden"
                }`}
              >
                <img
                  src={image}
                  alt={`image${index + 1}`}
                  className="rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
        {/* ----------------------------------------slider-------------------------------------------- */}
      </div>
    </>
  );
};

export default BlogsAndArticles;
