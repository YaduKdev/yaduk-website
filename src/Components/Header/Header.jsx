import React, { useState } from "react";
import Menu from "./Menu/Menu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-full justify-end items-center p-5 fixed top-0 z-30">
      <div className="menu-container">
        <Menu isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default Header;
