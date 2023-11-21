import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isLoggedInStored = localStorage.getItem("isLoggedIn");
  const isLoggedIn = isLoggedInStored ? JSON.parse(isLoggedInStored) : false;

  const userDataStored = localStorage.getItem("userData");
  const userData = userDataStored ? JSON.parse(userDataStored) : null;

  const [isLoggedInState, setIsLoggedIn] = useState(isLoggedIn);
  const [userDataState, setUserData] = useState(userData);

  const login = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedInState, userData: userDataState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
