'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with a default value
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // Initialize state from localStorage or default value (false)
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    return storedLoggedIn === 'true'; // Convert stored value to boolean
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn); // Save loggedIn state as a string
  }, [loggedIn]);

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};
