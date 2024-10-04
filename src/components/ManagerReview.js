import React from "react";
import { IoPerson } from "react-icons/io5";

const ManagerReview = () => {
  return (
    <div className="text-center bg-gray-100 my-20">
      <div className="flex justify-center items-center gap-3 pt-16">
        <img src="/asset/sysyphus.jpg" alt="image not found" />
        <h1 className="text-2xl">Sisyphus</h1>
      </div>
      <div>
        <h1 className="text-4xl text-center my-10">
          We’ve been using Untitled to kick start every new <br /> project and
          can’t imagine working without it.
        </h1>

      </div>
<div className="flex justify-center items-center flex-col py-10">
  <div className="border rounded-full border-gray-500 m-1 p-3">
        <IoPerson  />
  </div>
        <h3 className="text-primary text-xl ">
          Candice Wu
        </h3>
        <p className="text-md text-gray-500"> 
          Product Manager , Sisyphus
        </p>
</div>
    </div>
  );
};

export default ManagerReview;
