"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Select from "./Select";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue); // Update state with selected value
    router.push(selectedValue);
  };

  return (
    <nav className="flex justify-between mx-7 my-5 ">
      <ul>
        <li>Sankalp Foundation</li>
      </ul>
      <ul className="flex space-x-4">
        <li>
          <NavLink href="/home">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink href="/donation">Donation</NavLink>
        </li>
        <li className ='-mt-1'>
          <Select 
            options={[
              { value: "/environment", label: "Environment" },
              { value: "/education", label: "Education" },
              { value: "/social-awareness", label: "Social Awareness" },
            ]}
            onChange={handleSelectChange}
            value={selectedValue} // Bind selected value to dropdown
          />
        </li>
        <li>
          <NavLink href="/news">News</NavLink>
        </li>
        <li>
          <NavLink href="/display-blog">Blogs</NavLink>
        </li>
        <li>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
