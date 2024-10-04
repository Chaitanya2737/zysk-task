import React, { useState } from "react";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 text-primary fixed top-0 left-0 w-full z-10 shadow-md mb-10">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <img src="/asset/Content.png" alt="" />
          <h1>Untitled UI</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-600" aria-label="Home">Home</a>
          <a href="#" className="hover:text-gray-600" aria-label="Product">Product</a>
          <a href="#" className="hover:text-gray-600" aria-label="Resources">Resources</a>
          <a href="#" className="hover:text-gray-600" aria-label="Pricing">Pricing</a>
        </div>
        <div>
          <BiUser className="w-6 h-6" aria-label="User Profile" />
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} flex flex-col items-start transition duration-300`}>
        <div className="px-4 py-2 space-y-2 w-full bg-slate-200">
          <a href="#" className="block hover:text-gray-600" aria-label="Home">Home</a>
          <a href="#" className="block hover:text-gray-600" aria-label="Product">Product</a>
          <a href="#" className="block hover:text-gray-600" aria-label="Resources">Resources</a>
          <a href="#" className="block hover:text-gray-600" aria-label="Pricing">Pricing</a>
        </div>
        <div className="flex items-center justify-between w-full p-4 border-t border-gray-700">
          <BiUser className="w-6 h-6" aria-label="User Profile" />
          <span className="ml-2">User</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
