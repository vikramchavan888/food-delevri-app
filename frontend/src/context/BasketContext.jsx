
import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  return (
    <BasketContext.Provider value={{ isBasketVisible, setIsBasketVisible }}>
      {children}
    </BasketContext.Provider>
  );
};
