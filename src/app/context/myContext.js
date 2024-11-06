'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
const [loggedIn,setLoggedIn] = useState(false)
  
    return (
      <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </MyContext.Provider>
    );
  };
  