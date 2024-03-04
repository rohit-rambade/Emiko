import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogposts } from "../../../constants/blogposts";
import Slider from "react-slick";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="font-poppins">
      <h3 className="text-center font-normal text-4xl md:text-5xl text-primary py-8">
        Latest from blogs & Articles
      </h3>
      <div className="max-w-screen-xl mx-auto px-4 overflow-hidden">
        <Slider {...settings} className="w-full">
          {blogposts.map((blog) => (
            <div key={blog.id} className="px-2 md:px-8">
              <div className="flex flex-col justify-center items-center">
                <img src={blog.imageUrl} alt={blog.title} className="" />
              </div>
              <div className="p-2">
                <a
                  href={blog.link}
                  className="text-2xl hover:text-blue-700 hover:underline"
                >
                  {blog.title}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
