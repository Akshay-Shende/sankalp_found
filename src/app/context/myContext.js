'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with a default value
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null); 
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    setLoggedIn(storedLoggedIn === 'true'); 
    setLoading(false); 
  }, []);
 
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('loggedIn', loggedIn); 
    }
  }, [loggedIn, loading]);


  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
