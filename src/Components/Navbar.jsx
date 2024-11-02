import React from "react";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <nav className="flex justify-between mx-7 my-5">
      <ul>
        <li>Sankalp Foundation</li>
      </ul>
      <ul className="flex space-x-4">
        <li> <NavLink href={"/home"}>Home</NavLink></li>
        <li> <NavLink href={"/about-us"}>About Us</NavLink></li>
        <li> <NavLink href={"/donation"}>Donation</NavLink></li>
        <li><Dropdown/></li>
        <li> <NavLink href={"/news"}>News</NavLink></li>
        <li> <NavLink href={"/contact-us"}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
