import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { fetchSharedCart } from "../Api/sharecart";

const SharedCart = () => {
  const { cartId } = useParams();
  const { dispatch } = useCart();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await fetchSharedCart(cartId);
        dispatch({ type: "LOAD_CART", payload: data });
      } catch (error) {
        console.error("Error loading shared cart:", error);
      }
    };
    loadCart();
  }, [cartId, dispatch]);

  return <div>Shared cart loaded successfully!</div>;
};

export default SharedCart;
