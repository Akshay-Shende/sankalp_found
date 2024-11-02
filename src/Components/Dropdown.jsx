"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full"
      >
        Work
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center">
          <div className="py-1">
            <ul>
                <li> <NavLink
              href={"/environment"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Environment
            </NavLink></li>
           
<li> <NavLink
              href={"/education"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Education
            </NavLink>
</li>
           <li><NavLink
              href={"/social-awareness"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Social Awareness
            </NavLink></li>
            
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
