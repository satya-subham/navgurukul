import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
//import { auth } from "../firebase";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  function signUp(email, password) {
    return createUserWithEmailAndPassword(email, password,);
  }
  function logIn(email, password) {
    return createUserWithEmailAndPassword(email, password,);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider value={{ signUp, user }}>
        {children}
      </userAuthContext.Provider>
    </>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
