'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with a default value
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null); // Initialize with `null` to avoid premature state setting
  const [loading, setLoading] = useState(true); // Track loading state

  // Set the initial state from localStorage after the component mounts
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    setLoggedIn(storedLoggedIn === 'true'); // Convert stored value to boolean
    setLoading(false); // Set loading to false after initializing from `localStorage`
  }, []);

  // Save state to localStorage whenever it changes and loading is complete
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('loggedIn', loggedIn); // Save loggedIn state as a string
    }
  }, [loggedIn, loading]);

  // Show loading or children based on loading status
  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
