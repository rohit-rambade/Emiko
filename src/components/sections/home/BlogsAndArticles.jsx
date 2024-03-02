import React, { useEffect, useRef, useState } from "react";
import { blogposts } from "../../../constants/blogposts";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const BlogsAndArticles = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h3 className="text-center font-poppins font-normal text-4xl md:text-5xl text-primary py-8">
        Latest from blogs & Articles
      </h3>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top-0 left-0 right-0 bottom-0">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-75 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <FaArrowCircleLeft size={30} color="red" />

            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75  w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-75 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <FaArrowCircleRight size={30} color="red" />

            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          style={{ display: "flex", width: "100%" }}
        >
          {blogposts.map((resource, index) => (
            <div
              key={index}
              className="carousel-item text-center relative flex-grow h-96 md:h-64 snap-start"
            >
              <a
                href={resource.link}
                className="h-full w-full aspect-square block bg-origin-padding bg-contain md:bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
              >
                <img
                  src={resource.imageUrl || ""}
                  alt={resource.title}
                  className="w-full aspect-square hidden"
                />
              </a>
              <a
                href={resource.link}
                className="h-full w-full flex items-center aspect-square  absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
              >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                  {resource.title}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAndArticles;
