"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname]);

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-red-700" : ""} px-4 py-2 rounded`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
