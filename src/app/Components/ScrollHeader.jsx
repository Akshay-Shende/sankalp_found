'use client';
import { useEffect, useState } from "react";

const ScrollHeader = () => {
  const [showScrollHeader, setShowScrollHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setShowScrollHeader(true); // Show the header when user scrolls to the top
    } else if (currentScrollY > lastScrollY) {
      setShowScrollHeader(false); // Hide the header on scroll down
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    showScrollHeader && (
      <div className="scroll-header w-full bg-gray-100 py-2 shadow-md">
        <div className="flex justify-end space-x-4 px-4">
          <button className="login-button bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </div>
    )
  );
};

export default ScrollHeader;
