import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogposts } from "../../../constants/blogposts";
import Slider from "react-slick";

const Blogs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear",

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
      <h3 className="text-center font-poppins font-normal text-4xl md:text-5xl text-primary py-8">
        Latest from blogs & Articles
      </h3>
      <Slider {...settings}>
        {blogposts.map((blog) => (
          <div key={blog.id}>
            <div className="p-2 md:p-8">
              <div className="flex flex-col justify-center items-center">
                <img src={blog.imageUrl} alt={blog.title} className="" />
              </div>
              <div className="p-2">
                <a
                  href={blog.link}
                  className=" text-2xl hover:text-blue-700 hover:underline"
                >
                  {blog.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
