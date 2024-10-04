import React from "react";

const Button = ({ content, icon , className }) => {
  return (
    <button className={`flex items-center justify-center border rounded-md px-4 py-3 text-lg font-semibold  hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200  ${className ? className : "text-zinc-700"}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default Button;
