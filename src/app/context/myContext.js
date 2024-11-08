'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with a default value
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false); // Set a default initial state

  // Use effect to set the initial state from localStorage after the component mounts
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(storedLoggedIn === 'true'); // Convert stored value to boolean
    }
  }, []);

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

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
