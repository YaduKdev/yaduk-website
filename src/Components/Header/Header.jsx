import React, { useState, useRef, useEffect } from "react";
import Menu from "./Menu/Menu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="flex w-full justify-end items-center p-5 fixed top-0 z-30">
      <div className="menu-container" ref={menuRef}>
        <Menu isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default Header;
