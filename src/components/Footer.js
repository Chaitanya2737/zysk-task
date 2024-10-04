import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">BrandName</h2>
          <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Service</a>
          <a href="#" className="hover:text-gray-800">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
