import React from "react";

const Header = () => {
  return (
    <div className="flex w-full justify-end items-center p-4 fixed">
      <div className="menu cursor-pointer flex gap-1 w-12 flex-wrap hover:scale-110 transition-all duration-500">
        <div className="border-2 bg-blue-950 rounded-md border-blue-950 w-5 h-5"></div>
        <div className="border-2 bg-blue-950 rounded-md border-blue-950 w-5 h-5"></div>
        <div className="border-2 bg-blue-950 rounded-md border-blue-950 w-5 h-5"></div>
        <div className="border-2 bg-blue-950 rounded-md border-blue-950 w-5 h-5"></div>
      </div>
    </div>
  );
};

export default Header;
