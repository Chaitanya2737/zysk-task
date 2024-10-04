import React from "react";

const Feature = () => {
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
    {
      id: 4,
      image: "/asset/Feature/message-smile-circle.png",
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      id: 5,
      image: "/asset/Feature/command.png",
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      id: 6,
      image: "/asset/Feature/message-heart-circle.png",
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-violet-700 text-lg font-semibold my-5">Features</p>
        <h2 className="text-primary text-4xl font-semibold my-6 ">
          Analytics that feels like it’s from the future
        </h2>
        <p className="text-gray-500 text-wrap text-xl ">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, <br /> and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="mt-20">
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
    </div>
  );
};

export default Feature;
