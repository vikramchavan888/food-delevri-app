import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      axios
        .get(`http://localhost:3000/auth/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data && response.data.data) {
            setUser(response.data.data); 
          }
        })
        .catch((error) => console.error("Error fetching user data:", error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
