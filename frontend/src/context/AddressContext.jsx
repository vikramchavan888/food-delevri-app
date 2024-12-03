import React, { createContext, useState, useContext } from "react";

// Create context
const AddressContext = createContext();

// Create a provider component
export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <AddressContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAddress = () => useContext(AddressContext);


