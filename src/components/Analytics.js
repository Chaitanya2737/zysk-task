import React from "react";

const Analytics = () => {
  return (
    <div>

    <div className="relative flex justify-center items-center mt-10  h-96 md:h-full w-full">
      <div className="rounded-2xl w-3/4 h-64 sm:h-1/2 overflow-hidden shadow-lg hidden md:block">
        <img
          className="w-full h-full object-cover border-8 rounded-2xl border-primary transform transition-transform duration-300 hover:scale-105"
          src="/asset/48bee3c577d90c805ebc6abe73e441d3.png"
          alt="Analytics visualization"
        />
      </div>
      <Phone />
    </div>
    </div>
  );
};

const Phone = () => {
  return (
    <div className="absolute left-5 sm:left-10 bottom-0  ">
      <div className="relative z-50 overflow-hidden w-full sm:w-full md:w-3/4 ">
        <img
          src="/asset/apple-iphone-13-2021-medium.png"
          className="pointer-events-none h-full z-50 select-none"
          alt="Phone template"
        />
        <div className="absolute inset-0 -z-20">
          <img
            src="/asset/7f26a92b60f8e7bf4bfe8c9f528cf3c1.png"
            className="object-cover min-w-full min-h-full h-full py-10 px-2 select-none transform transition-transform duration-300 hover:scale-105"
            alt="Displayed content"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
