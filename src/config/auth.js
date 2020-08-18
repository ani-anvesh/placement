import React, { useEffect, useState } from "react";
import base from "./FbConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const unsubscribe = base.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user.uid);
        setUserName(user.displayName);
      } else {
        setCurrentUser(null);
        setUserName("AVASYU");
      }
    });
    return () => unsubscribe();
  }, []);
  // console.log(currentUser);
  return (
    <AuthContext.Provider value={{ userId: currentUser, userName: userName }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
