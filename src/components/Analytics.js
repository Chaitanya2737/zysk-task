import React from "react";

const Analytics = () => {
    const featureItem = [
        {
            id: 1,
            image: "/asset/Feature/message-chat-circle.jpg",
            title: "Share team inboxes",
            description:
              "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
          },
          {
            id: 2,
            image: "/asset/Feature/zap.png",
            title: "Deliver instant answers",
            description:
              "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
          },
          {
            id: 3,
            image: "/asset/Feature/chart-breakout-square.png",
            title: "Manage your team with report",
            description:
              "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
          },

      ];
  return (
    <div>
        <div className="text-center">
            <h1 className="text-primary text-4xl">Cutting-edge features for advanced analytics</h1>
            <p className="text-gray-500">Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.</p>
        </div>

    <div className="relative flex justify-center items-center mt-10  h-96 w-full md:h-full ">
      <div className="rounded-2xl w-3/4 h-64 sm:h-1/2 overflow-hidden shadow-lg hidden md:block">
        <img
          className="w-full h-full object-cover border-8 rounded-2xl border-primary transform transition-transform duration-300 hover:scale-105"
          src="/asset/48bee3c577d90c805ebc6abe73e441d3.png"
          alt="Analytics visualization"
        />
      </div>
      <Phone />
    </div>
    <div className="mt-20 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featureItem.map((item) => (
            <div className="text-center  transition-transform transform hover:scale-105">
            <img
              src={item.image}
              className="h-10 w-10 bg-slate-100/20 mx-auto border rounded-lg m-4 p-1"
              alt={item.title}
            />
            <h2 className="text-primary text-lg mt-2">{item.title}</h2>
            <p className="text-gray-600 text-pretty">{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <hr className="my-10" />
    </div>
  );
};

const Phone = () => {
  return (
    <div className="absolute left-5  -bottom-20 ">
      <div className="relative z-50 overflow-hidden w-60 sm:w-full md:w-3/4">
        <img
          src="/asset/apple-iphone-13-2021-medium.png"
          className="pointer-events-none h-full  z-50 select-none"
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
