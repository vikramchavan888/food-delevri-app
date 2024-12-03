import React, { createContext, useContext, useReducer } from "react";
import { saveSharedCart } from "../Api/sharecart";
//import { ToastContainer } from "react-toastify";
import {handleSuccess , Usererror } from "../utils";

const CartContext = createContext();

const initialState = {
  cart: [],
  cartId: "_" + Math.random().toString(36).substr(2, 9),
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.some((item) => item.id === action.payload.id)) {
        Usererror(`"${action.payload.name}"Item is already in the cart`);
        return state;
      }
     handleSuccess(`Item "${action.payload.name}" has been added to the cart.`);
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "LOAD_CART":
      return {
        ...state,
        cart: action.payload.cart,
        cartId: action.payload.cartId,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const generateShareableLink = async () => {
    try {
      const response = await saveSharedCart(state.cartId, state.cart);
      return `${window.location.origin}/cart/${response.cartId}`;
    } catch (error) {
      console.error("Error generating shareable link:", error);
      return null;
    }
  };

  return (
    <CartContext.Provider value={{ ...state, dispatch, generateShareableLink }}>
      {children}
    </CartContext.Provider>
  );
  
};

export const useCart = () => useContext(CartContext);
