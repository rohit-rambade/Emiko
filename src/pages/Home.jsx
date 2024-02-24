import React, { useEffect, useState } from "react";
import natureEmiko from "../assets/sllider/nature_emiko.jpg";
import second from "../assets/sllider/second.jpg";

import mainPage from "../assets/sllider/mainPage.jpg";
import { ourProduct } from "../constants/ourProducts";
import WhyChooseEmiko from "../components/sections/home/WhyChooseEmiko";
import BatteryTips from "../components/sections/home/BatteryTips";
import TestimonialSection from "../components/sections/home/TestimonialSection";
import LifeAtEmiko from "../components/sections/home/LifeAtEmiko";
import ExploreOpportunities from "../components/sections/home/ExploreOpportunities";
import BlogsAndArticles from "../components/sections/home/BlogsAndArticles";
import ProductOne from "../components/sections/products/ProductOne";
import WorkCulture from "../components/sections/home/WorkCulture";
const Home = () => {
  const [index, setIndex] = useState(0);

  const images = [mainPage, second, natureEmiko];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  const handleIndicatorClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div>
      <div className="relative  h-[88vh]">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`slide-${idx}`}
            className={`absolute top-0 left-0 w-full h-full object-left object-cover md:object-fill transition-opacity duration-1000 ${
              idx === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Slider indicators */}

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-3 h-3 rounded-full ${
                idx === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-current={idx === index}
              aria-label={`Slide ${idx + 1}`}
              data-carousel-slide-to={idx}
              onClick={() => handleIndicatorClick(idx)}
            ></button>
          ))}
        </div>
      </div>
      <div>
        <section className="text-black font-poppins">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-4xl text-2xl font-medium title-font text-primary mb-4 ">
                Our Product
              </h1>
              <p className="text-2xl leading-relaxed mx-auto font-semibold">
                THE ULTIMATE POWER SOURCE FOR YOUR COMMERCIAL APPLICATIONS
              </p>
            </div>
            <div className="flex p-5 flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 md:gap-y-5 space-y-6 md:space-x-4">
              {ourProduct.map((product) => {
                return (
                  <div
                    className="p-4 w-full md:w-1/3 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    key={product.id}
                  >
                    <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0 hf">
                      <img src={product.imgUrl} alt="" />
                    </div>
                    <div className="flex-grow">
                      <h2 className=" text-lg mb-3">
                        {product.name}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <WhyChooseEmiko />
      <BatteryTips />
      <TestimonialSection />
      <LifeAtEmiko />
      <ExploreOpportunities />
      <BlogsAndArticles />
      <WorkCulture />
    </div>
  );
};

export default Home;
