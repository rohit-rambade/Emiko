import React from "react";

const BlogsAndArticles = () => {
  return (
    <>
      <div className="bg-stone-300 h-full">
        <h3 className="text-center font-kameron font-normal text-5xl text-primary py-8">
          Latest from blogs & Articles
        </h3>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0  justify-center content-center p-6">
          <div className="md:w-1/3 bg-slate-100 md:m-10 h-60">1</div>
          <div className="md:w-1/3 bg-slate-100 md:m-10 h-60">2</div>
          <div className="md:w-1/3 bg-slate-100 md:m-10 h-60">3</div>
        </div>
      </div>
    </>
  );
};

export default BlogsAndArticles;
