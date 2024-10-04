import React, { useState } from "react";
import Button from "./supportComponents/Button";

const Enquiry = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Is there a free trial available?",
      content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do i change my account email",
      content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="text-center my-20">
      <h1 className="text-primary text-3xl py-5">
        Frequently asked question
      </h1>
      <p className="text-gray-500 text-lg">
      Everything you need to know about the product and billing.
      </p>
    </div>
    <div className="w-3/4 mx-auto mt-10 text-primary rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className={`flex justify-between items-center w-full p-4 text-left focus:outline-none ${
              openIndex === index ? "bg-gray-100/5" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg ">{item.title}</span>
            <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="text-center p-5 my-20  bg-slate-100">
      <h1 className="text-primary text-3xl py-5">
        Still have question
      </h1>
      <p className="text-gray-500 text-lg">
      Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>
      <div className="flex items-center justify-center py-5">

      <Button className="bg-violet-700 text-white " content="Get in touch" />
      </div>
    </div>
    </>
  );
};

export default Enquiry;
