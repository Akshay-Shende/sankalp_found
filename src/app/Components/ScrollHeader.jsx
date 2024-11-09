"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { MyContext } from "../context/myContext";
import useAuth from "@/appwriteService";

const ScrollHeader = () => {
  const [showScrollHeader, setShowScrollHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter(); 
  const [isUserLogged, setIsUserLogged] = useState(false);
  const { loggedIn,setLoggedIn } = useContext(MyContext);
  const { loggedInUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsUserLogged(loggedIn);
  }, [loggedIn]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setShowScrollHeader(true); // Show the header when user scrolls to the top
    } else if (currentScrollY > lastScrollY) {
      setShowScrollHeader(false); // Hide the header on scroll down
    }

    setLastScrollY(currentScrollY);
  };

  const handleLoginClick = () => {
    router.push("/login"); // Redirect to login page
  };

  const handleLogoutClick = () => {
    setLoading(true);
    logout();
    setLoading(false);

    setLoggedIn(false)

    router.push("/home"); // Redirect to home page
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    showScrollHeader && (
      <div className="scroll-header w-full bg-gray-100 py-2 shadow-md">
        <div className="flex justify-end space-x-4 px-4">
         {isUserLogged ? (
            <button
              className="login-button bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          ) : (
            <button
              className="login-button bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default ScrollHeader;
