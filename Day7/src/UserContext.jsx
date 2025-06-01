import React, { createContext, useState, useCallback } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Xeerak");
  const [email, setEmail] = useState("xeerakazhar@gmail.com");


  const changeUser = useCallback((newUser) => {
    setUser(newUser);
  }, []);

  const changeEmail = useCallback((newEmail) => {
    setEmail(newEmail);
  }, []);

  const contextValue = {
    user,
    email,
    changeUser,
    changeEmail
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
