import React, { useState, createContext } from "react";

export let AuthContext = createContext(0);

export default function AuthContextProvider(props) {
  let [token, setToken] = useState(
    localStorage.getItem("Token") ? localStorage.getItem("Token") : null
  );
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}
